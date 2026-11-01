import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateTask } from "@/hooks/useUpdateTasks.hook";
import { toast } from "@/components/ui/toast";

const initialFormState = (task) => ({
  title: task.title ?? "",
  description: task.description ?? "",
  status: task.status ?? "todo",
  priority: task.priority ?? "medium",
  dueDate: task.dueDate
    ? new Date(task.dueDate).toISOString().slice(0, 10)
    : "",
});

export function EditTaskForm({ task, onCancel }) {
  const [formData, setFormData] = useState(() => initialFormState(task));
  const { mutate: updateTask, isPending } = useUpdateTask();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    updateTask(
      {
        _id: task._id,
        ...formData,
        dueDate: new Date(`${formData.dueDate}T00:00:00`),
      },
      {
        onSuccess: () => {
          toast.add({
            title: "Task updated",
            description: "Your task was updated successfully.",
            type: "success",
          });
          onCancel();
        },
        onError: (error) => {
          toast.add({
            title: "Failed to update task",
            description: error.message || "Something went wrong.",
            type: "error",
          });
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 border-t px-6 py-4">
      <Input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task title"
        aria-label="Task title"
        required
      />

      <Textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        aria-label="Task description"
        required
      />

      <div className="grid gap-3 sm:grid-cols-3">
        <label className="flex flex-col gap-1 text-xs text-muted-foreground">
          Status
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="h-8 rounded-lg border border-input bg-background px-2 text-sm text-foreground"
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>

        <label className="flex flex-col gap-1 text-xs text-muted-foreground">
          Priority
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="h-8 rounded-lg border border-input bg-background px-2 text-sm text-foreground"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label className="flex flex-col gap-1 text-xs text-muted-foreground">
          Due date
          <Input
            name="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isPending}>
          {isPending ? "Saving..." : "Save changes"}
        </Button>
      </div>
    </form>
  );
}
