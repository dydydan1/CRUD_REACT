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

function DisplaySkeleton() {
  return (
    <div className="mb-4">
      <Skeleton className="h-32 w-full rounded-lg" />
    </div>
  );
}

function Tasks() {
  const { mutate: updateTask } = useUpdateTask();
  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTask();

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

  // Get tasks from backend
  useEffect(() => {
    if (data?.data) {
      setLocalTasks(data.data);
      setTasks(data);
    }
  }, [data, setTasks]);

  // Toggle In Progress
  const handleInProgress = (task) => {
    const newStatus =
      task.status === "in-progress"
        ? "pending"
        : "in-progress";

    // Update frontend immediately
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

    // Update backend
    updateTask({
      _id: task._id,
      status: newStatus,
    });
  };

  // Delete completed task
  const handleCompleted = (task) => {
    // Remove immediately from frontend
    setLocalTasks((currentTasks) =>
      currentTasks.filter(
        (currentTask) => currentTask._id !== task._id
      )
    );

    // Delete from database
    deleteTask(task._id);
  };

  return (
    <>
      <section className="flex basis-2/3 justify-center">
        <div className="flex flex-col w-11/12 p-4">

          <h1 className="text-white font-bold text-2xl mb-8 w-full">
            Tasks as on: Sunday, 2 Aug 2026
          </h1>

          <div className="w-11/12 flex flex-col">

            <div className="flex justify-around mb-16">
              <TasksCounter count={4} type="todo" />
              <TasksCounter count={8} type="inProgress" />
              <TasksCounter count={3} type="completed" />
            </div>

            <FilterBar />

            {/* Loading */}
            {isPending &&
              [...Array(limit)].map((_entry, index) => (
                <DisplaySkeleton
                  key={`${index}skel`}
                />
              ))
            }

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
                  onInProgress={() => handleInProgress(task)}
                  onCompleted={() => handleCompleted(task)}
                  isDeleting={isDeleting}
                />
              ))
            }

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