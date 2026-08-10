import { FilterBar } from "@/components/filterBar/filterBar.jsx";
import { TasksCounter } from "@/components/tasksCounter/tasksCounter";
import { Task } from "@/components/task/task.jsx";
import { TaskSidebar } from "@/components/taskSidebar/taskSidebar.jsx";
import { TaskPagination } from "@/components/tasksPagination/tasksPagination.jsx";
import { useFetchTask } from "@/hooks/useFetchTask.hook";
import { Skeleton } from "@/components/ui/skeleton";
import { useContext, useEffect } from "react";
import { TasksContext } from "@/context/tasks.context";
import { useSearchParams } from "react-router";

function DisplaySkeleton() {
  return (
    <div className="mb-4">
      <Skeleton className="h-32 w-full rounded-lg" />
    </div>
  );
}

function Tasks() {
  const [searchParams] = useSearchParams();

  // Get values from URL
  const order = searchParams.get("order") ?? "asc";
  const limit = Number(searchParams.get("limit") ?? 5);
  const page = Number(searchParams.get("page") ?? 1);

  console.log("order:", order);
  console.log("limit:", limit);
  console.log("page:", page);

  const { setTasks } = useContext(TasksContext);

  const {
    data,
    isError,
    isSuccess,
    isPending,
    error,
  } = useFetchTask({
    order,
    limit,
    page,
  });

  // Save fetched tasks to global state
  useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, [data, setTasks]);

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
              data?.data?.map((task) => (
                <Task
                  key={task._id}
                  title={task.title}
                  priority={task.priority}
                  status={task.status}
                  description={task.description}
                  dueDate={new Date(task.dueDate)}
                  id={task._id}
                />
              ))
            }

            {/* Pagination */}


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