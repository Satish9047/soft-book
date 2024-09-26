import { z } from "zod";

export const uploadPdfSchema = z.object({
  name: z.string().min(1, { message: "PDF name is required" }),
  author: z
    .string()
    .min(3, { message: "Author must be at least 3 characters long" }),
  pdfUrl: z.string().url({ message: "Invalid PDF URL" }),
  description: z
    .string()
    .min(10, { message: "description must be at least 10 characters long" }),
  genre: z
    .string()
    .min(3, { message: "Genre must be at least 3 characters long" }),
});
