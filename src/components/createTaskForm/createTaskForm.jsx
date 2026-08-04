import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
"use client"
import * as React from "react"
import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react" 
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const items = [
  {
    value: "low",
    label: "Low",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "high",
    label: "High",
  },
]

export function CreateTaskForm() {
    const [date, setDate] = React.useState()
  return (
    <div>
      <h2 className="text-2xl mb-4">Create a new Task</h2>

      <form>
        <div className="py-2">
          <Input
            type="text"
            placeholder="Task title"
          />
        </div>

        <div className="flex justify-between py-2">

          <div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>

                  <SelectItem value="pending">
                    Pending
                  </SelectItem>

                  <SelectItem value="in-progress">
                    In Progress
                  </SelectItem>

                  <SelectItem value="completed">
                    Completed
                  </SelectItem>

                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Priority</SelectLabel>

                  {items.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </SelectItem>
                  ))}

                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
        </div>

        <div className="py-2">
        <Popover>
            <PopoverTrigger render={<Button variant={"outline"} data-empty={!date} className="w-[200px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground">{date ? format(date, "PPP") : <span>Due date</span>}<ChevronDownIcon data-icon="inline-end" /></Button>} />
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                defaultMonth={date}
                />
            </PopoverContent>
        </Popover>
        </div>
        <div className="py-2">
         <Textarea placeholder="Description of the task" />
        </div>
        <div className="py-2 flex justify-end">
         <Button>Create Task</Button>
        </div>
      </form>
    </div>
  )
}