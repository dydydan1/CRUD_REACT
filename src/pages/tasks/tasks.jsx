import { FilterBar } from "@/components/filterBar/filterBar.jsx";
import { TasksCounter } from "@/components/tasksCounter/tasksCounter";
import {  Task } from "@/components/task/task.jsx";
import  {TaskSidebar}  from "@/components/taskSidebar/taskSidebar.jsx";
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
            <TasksCounter count={8} type="inProgress" />
            <TasksCounter count={3} type="completed" />
          </div>
          <FilterBar />
          <Task />
          </div>
        </div>

      </section>

      <section className="flex basis-1/3 ">
        <TaskSidebar />
      </section>

    </section>
  );
}

export default Tasks;