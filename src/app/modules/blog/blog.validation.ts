import {z} from "zod";

export const createBlogZodSchema = z.object({
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
      title: z.string({
        required_error: "title is required",
      }),
      description: z.string({
        required_error: "description is required",
      }),
      image: z.string().optional(),
    })
    .strict(),
});
export const updateBlogZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
    })
    .strict(),
});
