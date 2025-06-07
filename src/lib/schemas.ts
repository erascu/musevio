import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name required" }).max(50),
  lastName: z.string().min(2, { message: "Last name required" }).max(50),
  email: z.string().email(),
  message: z.string().min(2),
});
