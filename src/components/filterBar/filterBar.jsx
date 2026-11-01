import { TaskPagination } from "@/components/tasksPagination/tasksPagination.jsx";
import {OrderSelect} from "@/components/orderSelect/orderSelect.jsx";
import { Input } from "@/components/ui/input";

export function FilterBar({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
  priorityFilter,
  onPriorityChange,
}) {
  return (
    <div className="mb-8 space-y-3">
      <div className="flex flex-col gap-3 md:flex-row">
        <Input
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search tasks..."
          aria-label="Search tasks"
          className="md:max-w-xs"
        />
        <select
          value={statusFilter}
          onChange={(event) => onStatusChange(event.target.value)}
          aria-label="Filter by status"
          className="h-8 rounded-lg border border-input bg-transparent px-2 text-sm"
        >
          <option value="all">All statuses</option>
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <select
          value={priorityFilter}
          onChange={(event) => onPriorityChange(event.target.value)}
          aria-label="Filter by priority"
          className="h-8 rounded-lg border border-input bg-transparent px-2 text-sm"
        >
          <option value="all">All priorities</option>
          <option value="low">Low priority</option>
          <option value="medium">Medium priority</option>
          <option value="high">High priority</option>
        </select>
      </div>
      <nav className="flex flex-row justify-between">
        <TaskPagination />
        <OrderSelect />
      </nav>
    </div>
  );
}