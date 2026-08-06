import { z } from "zod"

export const CreateTaskSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Task title is required" })
    .max(100, { message: "Title must be at most 100 characters long" }),

  status: z.enum(["pending", "in-progress", "completed"]),

  priority: z.enum(["low", "medium", "high"]),

  dueDate: z.date({
    message: "Task due date is required",
  }),

  description: z
    .string()
    .max(500, {
      message: "Description must be at most 500 characters long",
    }),
})