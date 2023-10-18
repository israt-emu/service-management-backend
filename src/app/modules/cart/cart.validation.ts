import {z} from "zod";

export const createCartZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z
    .object({
      price: z.number({
        required_error: "Price is required",
      }),
      quantity: z.number({
        required_error: "quantity is required",
      }),
      serviceId: z.string({
        required_error: "serviceId is required",
      }),

      user: z.string({
        required_error: "user is required",
      }),
    })
    .strict(),
});
export const handleQuantityZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z
    .object({
      operation: z.enum(["plus", "minus"], {
        required_error: "operation is required",
      }),
      serviceId: z.string({
        required_error: "serviceId is required",
      }),

      user: z.string({
        required_error: "user is required",
      }),
    })
    .strict(),
});
export const deleteCartZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z
    .object({
      serviceId: z.string({
        required_error: "serviceId is required",
      }),

      user: z.string({
        required_error: "user is required",
      }),
    })
    .strict(),
});
