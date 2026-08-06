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

import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"

import { CreateTaskSchema } from "@/schema/createTask.schema"

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

  const form = useForm({
    resolver: zodResolver(CreateTaskSchema),

    defaultValues: {
      title: "",
      status: "",
      priority: "",
      dueDate: undefined,
      description: "",
  },
  });

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <h2 className="text-2xl mb-4">
        Create a new Task
      </h2>

      <form onSubmit={form.handleSubmit(onSubmit)}>

        {/* TITLE */}
        <div className="py-2">

          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>

                <FieldLabel>Task Title</FieldLabel>

                <Input
                  {...field}
                  type="text"
                  placeholder="Task title"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}

              </Field>
            )}
          />

        </div>


        <div className="flex justify-between py-2">

          {/* STATUS */}
          <Controller
            name="status"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>

                <FieldLabel>Status</FieldLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>

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

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}

              </Field>
            )}
          />


          {/* PRIORITY */}
          <Controller
            name="priority"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>

                <FieldLabel>Priority</FieldLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>

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

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}

              </Field>
            )}
          />

        </div>


        {/* DUE DATE */}
        <div className="py-2">

          <Controller
            name="dueDate"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>

                <FieldLabel>Due Date</FieldLabel>

                <Popover>

                  <PopoverTrigger
                    render={
                      <Button
                        type="button"
                        variant="outline"
                        className="w-50 justify-between"
                      >
                        {field.value
                          ? format(field.value, "PPP")
                          : "Due date"}

                        <ChevronDownIcon />
                      </Button>
                    }
                  />

                  <PopoverContent
                    className="w-auto p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  </PopoverContent>

                </Popover>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}

              </Field>
            )}
          />

        </div>


        {/* DESCRIPTION */}
        <div className="py-2">

          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>

                <FieldLabel>Description</FieldLabel>

                <Textarea
                  {...field}
                  placeholder="Description of the task"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}

              </Field>
            )}
          />

        </div>


        <div className="py-2 flex justify-end">

          <Button type="submit">
            Create Task
          </Button>

        </div>

      </form>
    </div>
  )
}