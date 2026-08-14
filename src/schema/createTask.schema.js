import { z } from "zod";

export const CreateTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Task title is required"),

  status: z.enum([
    "todo",
    "in-progress",
    "completed",
  ]),

  priority: z.enum([
    "low",
    "medium",
    "high",
  ]),

  dueDate: z.date({
    message: "Due date is required",
  }),

  description: z
    .string()
    .min(1, "Description is required"),
});