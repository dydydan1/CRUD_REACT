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

function DisplaySkeleton() {
  return (
    <div className="mb-4">
      <Skeleton className="h-32 w-full rounded-lg" />
    </div>
  );
}

function Tasks() {
  const { mutate: updateTask } = useUpdateTask();

  const [searchParams] = useSearchParams();

  const order = searchParams.get("order") ?? "asc";
  const limit = Number(searchParams.get("limit") ?? 5);
  const page = Number(searchParams.get("page") ?? 1);

  const { setTasks } = useContext(TasksContext);

  const [tasks, setLocalTasks] = useState([]);

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

  return (
    <>
      <section className="flex basis-2/3 justify-center">
        <div className="flex flex-col w-11/12 p-4">

          <h1 className="text-white font-bold text-2xl mb-8 w-full">
            Tasks as on: Sunday, 2 Aug 2026
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

            <FilterBar />

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
              tasks.map((task) => (
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
                />
              ))}

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