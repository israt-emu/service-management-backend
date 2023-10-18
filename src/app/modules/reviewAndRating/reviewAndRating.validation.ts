import {z} from "zod";

export const createReviewRatingZodSchema = z.object({
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
