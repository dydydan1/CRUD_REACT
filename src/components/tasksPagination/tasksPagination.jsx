import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useSearchParams } from "react-router";

export function TaskPagination() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") ?? 1);
  const limit = searchParams.get("limit") ?? "5";
  const order = searchParams.get("order") ?? "asc";

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

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goToPage(page + 1);
            }}
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
}