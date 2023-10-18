import {z} from "zod";

export const createReviewRatingZodSchema = z.object({
  body: z
    .object({
      user: z.string({
        required_error: "user is required",
      }),
      service: z.string({
        required_error: "service is required",
      }),

      rating: z.number({
        required_error: "rating is required",
      }),
      review: z.string({
        required_error: "comments is required",
      }),
    })
    .strict(),
});
