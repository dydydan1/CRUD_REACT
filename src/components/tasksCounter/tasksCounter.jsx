export function TasksCounter({ type = "todo", count = 0 }) {
    
  const borderColor = {
    todo: "border-red-500",
    inProgress: "border-orange-500",
    completed: "border-green-500",
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`p-6 border-solid ${borderColor[type]} rounded-full border-4 mb-4`}>
        <div className="min-w-10 min-h-10 text-foreground text-3xl text-center flex justify-center items-center">
          {count}
        </div>
      </div>

      <div>
        {type === "todo" && <div>Todo</div>}
        {type === "inProgress" && <div>In Progress</div>}
        {type === "completed" && <div>Completed</div>}
      </div>
    </div>
  );
}