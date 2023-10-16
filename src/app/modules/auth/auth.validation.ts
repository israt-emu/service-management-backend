import {z} from "zod";

export const signUpZodSchema = z.object({
  body: z
    .object({
      email: z.string({
        required_error: "Email is required",
      }),
      name: z.object({
        firstName: z.string({
          required_error: "First Name is required",
        }),
        lastName: z.string({
          required_error: "Last Name is required",
        }),
      }),
      password: z.string({
        required_error: "Password is required",
      }),
      phoneNumber: z.string({
        required_error: "Phone Number is required",
      }),
      profile: z.string().optional(),
      address: z.string({
        required_error: "address is required",
      }),
      role: z.enum(["admin", "super admin", "user"]).default("user"),
    })
    .strict(),
});
export const loginZodSchema = z.object({
  body: z
    .object({
      email: z.string({required_error: "Phone number is required"}),
      password: z.string({required_error: "Password is required"}),
    })
    .strict(),
});

export const refreshTokenZodSchema = z.object({
  cookies: z
    .object({
      refreshToken: z.string({required_error: "Refresh token is required"}),
    })
    .strict(),
});
