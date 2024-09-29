import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(20, { message: "Name must be at most 20 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    contact: z
      .string()
      .min(10, { message: "Contact must be 10 digits" })
      .max(10, { message: "Contact must be 10 digits" })
      .refine((value) => /^[0-9]+$/.test(value), {
        message: "Contact must contain only numbers",
      }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(50, { message: "Password must be at most 50 characters" }),
    rePassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(50, { message: "Password must be at most 50 characters" }),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });
