import {z} from "zod";

export const createFAQZodSchema = z.object({
  body: z
    .object({
      question: z.string({
        required_error: "question is required",
      }),
      answer: z.string({
        required_error: "answer is required",
      }),
    })
    .strict(),
});
export const updateFAQZodSchema = z.object({
  body: z
    .object({
      id: z.string({
        required_error: "id is required",
      }),
      data: z.object({
        question: z.string().optional(),
        answer: z.string().optional(),
      }),
    })
    .strict(),
});
