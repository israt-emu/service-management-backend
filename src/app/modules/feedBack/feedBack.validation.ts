import {z} from "zod";

export const createFeedbackZodSchema = z.object({
  body: z
    .object({
      user: z.string({
        required_error: "user is required",
      }),

      rating: z.number({
        required_error: "rating is required",
      }),
      comments: z.string({
        required_error: "comments is required",
      }),
    })
    .strict(),
});
