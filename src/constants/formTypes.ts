import { z } from "zod";

export const createCourseSchema = z.object({
  title: z.string().min(2).max(50),
  shortdesc: z.string().min(2).max(50),
  description: z.string().min(2).max(500),
  price: z.string().min(1).max(10),
  thumbnail: z.string().min(2).max(500),
});
