import {z} from "zod";

export const createFeedbackZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
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
