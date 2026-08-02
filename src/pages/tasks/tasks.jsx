import { FilterBar } from "@/components/filterBar/filterBar.jsx";
import { TasksCounter } from "@/components/tasksCounter/tasksCounter";

function Tasks() {
  return (
    <section className="flex flex-row w-full p-4 gap-8">

      <section className="flex basis-2/3 justify-center">
        <div className="flex flex-col w-11/12 p-4 ">

          <h1 className="text-white font-bold text-2xl mb-8 w-full">
            Tasks as on: Sunday, 2 Aug 2026
          </h1>
          <div className="w-11/12 flex flex-col ">

          <div className="flex justify-around mb-16">
            <TasksCounter count={4} type="todo" />
            <TasksCounter count={10} type="inProgress" />
            <TasksCounter count={12} type="completed" />
          </div>
          <FilterBar />
          </div>
        </div>

      </section>

      <section className="flex basis-1/3 bg-red-300">
        Create Tasks Section
      </section>

    </section>
  );
}

export default Tasks;