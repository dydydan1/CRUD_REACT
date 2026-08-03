import { TaskPagination } from "@/components/tasksPagination/tasksPagination.jsx";
import {OrderSelect} from "@/components/orderSelect/orderSelect.jsx";
export function FilterBar() {
  return (
    <>
      <nav className="flex flex-row justify-between pr-60  mb-8">
        <TaskPagination />
        <OrderSelect />
      </nav>
    </>
  );
}