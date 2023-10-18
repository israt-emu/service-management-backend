import {z} from "zod";

export const createBookingZodSchema = z.object({
  body: z
    .object({
      totalCost: z.number({
        required_error: "totalCost is required",
      }),

      date: z.string({
        required_error: "date is required",
      }),
      time: z.string({
        required_error: "time is required",
      }),

      user: z.string({
        required_error: "user is required",
      }),
      cart: z.string({
        required_error: "cart is required",
      }),
      service: z.string({
        required_error: "service is required",
      }),
      status: z.enum(["pending", "confirmed", "canceled"]).default("pending"),
    })
    .strict(),
});
export const reScheduleBookingZodSchema = z.object({
  body: z
    .object({
      id: z.string({
        required_error: "id is required",
      }),
      date: z.string({
        required_error: "date is required",
      }),
      time: z.string({
        required_error: "time is required",
      }),
    })
    .strict(),
});
export const updateStatusZodSchema = z.object({
  body: z
    .object({
      id: z.string({
        required_error: "id is required",
      }),

      status: z.enum(["pending", "confirmed", "canceled"], {
        required_error: "Status is required",
      }),
    })
    .strict(),
});
