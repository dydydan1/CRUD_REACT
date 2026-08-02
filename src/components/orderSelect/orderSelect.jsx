import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { label: "Select Order", value: null },
  { label: "ASC", value: "Ascend" },
  { label: "DESC", value: "Descend" },
]

export function OrderSelect() {
  return (
    <Select items={items}>
      <SelectTrigger className="w-full max-w-48 ">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel >Order Selection</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
