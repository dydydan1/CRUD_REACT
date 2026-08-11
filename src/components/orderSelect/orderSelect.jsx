import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useSearchParams } from "react-router";

const items = [
  { label: "ASC", value: "asc" },
  { label: "DESC", value: "desc" },
];

export function OrderSelect() {
  const [searchParams, setSearchParams] = useSearchParams();

  const order = searchParams.get("order") ?? "asc";
  const limit = searchParams.get("limit") ?? "5";

  const handleOrderChange = (newOrder) => {
    setSearchParams({
      page: "1",
      limit: limit,
      order: newOrder,
    });
  };

  return (
    <Select value={order} onValueChange={handleOrderChange}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select Order" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Order Selection</SelectLabel>

          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}