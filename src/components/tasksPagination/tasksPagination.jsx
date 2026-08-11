import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useSearchParams } from "react-router";
import { useContext } from "react";
import { TasksContext } from "@/context/tasks.context";

export function TaskPagination() {
  const [searchParams, setSearchParams] = useSearchParams();

  // GLOBAL STATE
  const { tasks } = useContext(TasksContext);

  const page = Number(searchParams.get("page") ?? 1);
  const limit = searchParams.get("limit") ?? "5";
  const order = searchParams.get("order") ?? "asc";

  // Get total pages from global state
  const totalPages = tasks?.pagination?.meta?.totalPages ?? 1;

  const goToPage = (newPage) => {
    setSearchParams({
      limit: limit,
      page: String(newPage),
      order: order,
    });
  };

  return (
    <Pagination>
      <PaginationContent>

        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();

              if (page > 1) {
                goToPage(page - 1);
              }
            }}
          />
        </PaginationItem>

        {/* Page 1 */}
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive={page === 1}
            onClick={(e) => {
              e.preventDefault();
              goToPage(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>

        {/* Page 2 */}
        {totalPages >= 2 && (
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={page === 2}
              onClick={(e) => {
                e.preventDefault();
                goToPage(2);
              }}
            >
              2
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Page 3 */}
        {totalPages >=3 && (
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={page === 3}
              onClick={(e) => {
                e.preventDefault();
                goToPage(3);
              }}
            >
              3
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Page 3 */}
        {totalPages >=4 && (
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={page === 4}
              onClick={(e) => {
                e.preventDefault();
                goToPage(3);
              }}
            >
              4
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();

              if (page < totalPages) {
                goToPage(page + 1);
              }
            }}  
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
}