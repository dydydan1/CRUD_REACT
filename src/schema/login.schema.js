import {z} from "zod";

export let LoginSchema = z.object({
    email: z.string().email({message: "Invalid format"}),
    password: z.string(),
    
}
)