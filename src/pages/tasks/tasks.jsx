import { FilterBar } from "@/components/filterBar/filterBar.jsx";
import { TasksCounter } from "@/components/tasksCounter/tasksCounter";
import { Task } from "@/components/task/task.jsx";
import { TaskSidebar } from "@/components/taskSidebar/taskSidebar.jsx";
import { useFetchTask } from "@/hooks/useFetchTask.hook";
import { Skeleton } from "@/components/ui/skeleton";
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "@/context/tasks.context";
import { useSearchParams } from "react-router";
import { useUpdateTask } from "@/hooks/useUpdateTasks.hook";
import { useDeleteTask } from "@/hooks/useDeleteTask.hook";
import { toast } from "@/components/ui/toast";

function DisplaySkeleton() {
  return (
    <div className="mb-4">
      <Skeleton className="h-32 w-full rounded-lg" />
    </div>
  );
}

function Tasks() {
  const { mutate: updateTask } = useUpdateTask();
  const { mutate: deleteTask } = useDeleteTask();

  const [searchParams] = useSearchParams();

  const order = searchParams.get("order") ?? "asc";
  const limit = Number(searchParams.get("limit") ?? 5);
  const page = Number(searchParams.get("page") ?? 1);

  const { setTasks } = useContext(TasksContext);

  const [tasks, setLocalTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const {
    data,
    isPending,
  } = useFetchTask({
    order,
    limit,
    page,
  });

  useEffect(() => {
    if (data?.data) {
      setLocalTasks(data.data);
      setTasks(data);
    }
  }, [data, setTasks]);

  const todoCount =
    data?.taskCounter?.todo ?? 0;

  const inProgressCount =
    data?.taskCounter?.inProgress ?? 0;

  const completedCount =
    data?.taskCounter?.completed ?? 0;

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date());

  const visibleTasks = tasks.filter((task) => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !normalizedSearch ||
      String(task.title ?? "").toLowerCase().includes(normalizedSearch) ||
      String(task.description ?? "").toLowerCase().includes(normalizedSearch);
    const matchesStatus =
      statusFilter === "all" || task.status === statusFilter;
    const matchesPriority =
      priorityFilter === "all" || task.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  // TODO <-> IN PROGRESS
  const handleInProgress = (task) => {
    const newStatus =
      task.status === "in-progress"
        ? "todo"
        : "in-progress";

    // Update UI immediately
    setLocalTasks((currentTasks) =>
      currentTasks.map((currentTask) =>
        currentTask._id === task._id
          ? {
              ...currentTask,
              status: newStatus,
            }
          : currentTask
      )
    );

    // Update database
    updateTask({
      _id: task._id,
      status: newStatus,
    });
  };

  // TODO / IN PROGRESS -> COMPLETED
  const handleCompleted = (task) => {
    // Update database
    updateTask({
      _id: task._id,
      status: "completed",
    });

    // Remove from visible task list
    setLocalTasks((currentTasks) =>
      currentTasks.filter(
        (currentTask) =>
          currentTask._id !== task._id
      )
    );
  };

  const handleDelete = (task) => {
    if (!window.confirm(`Delete "${task.title}"? This cannot be undone.`)) {
      return;
    }

    setLocalTasks((currentTasks) =>
      currentTasks.filter((currentTask) => currentTask._id !== task._id)
    );

    deleteTask(task._id, {
      onSuccess: () => {
        toast.add({
          title: "Task deleted",
          description: "The task was deleted successfully.",
          type: "success",
        });
      },
      onError: (error) => {
        toast.add({
          title: "Failed to delete task",
          description: error.message || "Something went wrong.",
          type: "error",
        });
        setLocalTasks((currentTasks) => [...currentTasks, task]);
      },
    });
  };

  return (
    <>
      <section className="flex basis-2/3 justify-center">
        <div className="flex flex-col w-11/12 p-4">

          <h1 className="text-white font-bold text-2xl mb-8 w-full">
            Tasks as on: {formattedDate}
          </h1>

          <div className="w-11/12 flex flex-col">

            {/* Task Counters */}
            <div className="flex justify-around mb-16">

              <TasksCounter
                count={todoCount}
                type="todo"
              />

              <TasksCounter
                count={inProgressCount}
                type="inProgress"
              />

              <TasksCounter
                count={completedCount}
                type="completed"
              />

            </div>

            <FilterBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              statusFilter={statusFilter}
              onStatusChange={setStatusFilter}
              priorityFilter={priorityFilter}
              onPriorityChange={setPriorityFilter}
            />

            {/* Loading */}
            {isPending &&
              [...Array(limit)].map(
                (_, index) => (
                  <DisplaySkeleton
                    key={`${index}-skeleton`}
                  />
                )
              )}

            {/* Tasks */}
            {!isPending &&
              visibleTasks.map((task) => (
                <Task
                  key={task._id}
                  title={task.title}
                  priority={task.priority}
                  status={task.status}
                  description={task.description}
                  dueDate={new Date(task.dueDate)}
                  id={task._id}
                  onInProgress={() =>
                    handleInProgress(task)
                  }
                  onCompleted={() =>
                    handleCompleted(task)
                  }
                  onDelete={() => handleDelete(task)}
                />
              ))}

            {!isPending && visibleTasks.length === 0 && (
              <p className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
                {tasks.length === 0
                  ? "No tasks yet. Create your first task from the sidebar."
                  : "No tasks match your current filters."}
              </p>
            )}

          </div>
        </div>
      </section>

      <section className="flex basis-1/3">
        <TaskSidebar />
      </section>
    </>
  );
}

export default Tasks;