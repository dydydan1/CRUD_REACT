import { z } from "zod";

const passwordValidation = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})"
);

export const SignupSchema = z.object({
    firstName: z
        .string()
        .min(3, { message: "First name must be at least 3 characters long"})
        .max(100, {message: "First name must be at most 100 characters long"}),

    lastName: z
        .string()
        .max(100, {message: "Last name must be at most 100 characters long"})
        .optional(),

    email: z.email({message: "Invalid email address"}),

    password: z
        .string()
        .min(8, {message: "Password must be at least 8 characters long"})
        .regex(passwordValidation, {
            message: "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
        }),
});