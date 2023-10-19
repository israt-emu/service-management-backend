import {z} from "zod";

export const createServiceZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z
    .object({
      title: z.string({
        required_error: "title is required",
      }),
      price: z.number({
        required_error: "Price is required",
      }),
      duration: z.string({
        required_error: "duration is required",
      }),
      status: z.enum(["available", "unavailable"]).default("available"),
      category: z.string({
        required_error: "category is required",
      }),
      addedBy: z.string({
        required_error: "addedBy is required",
      }),
      description: z.string().optional(),
      images: z.string().optional(),
    })
    .strict(),
});
export const updateServiceZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z
    .object({
      title: z.string().optional(),
      duration: z.string().optional(),
      status: z.enum(["available", "unavailable"]).optional(),
      price: z.number().optional(),
      description: z.string().optional(),
      category: z.string().optional(),
      images: z.string().optional(),
      addedBy: z.string().optional(),
    })
    .strict(),
});
