import { z } from "zod";

export const LoginFormShema = z.object({
  login: z
    .string({ message: "неверный формат поля" })
    .min(3, { message: "минимум 3 символов" }),
  password: z
    .string({ message: "в поле должны присутствовать буквы" })
    .min(6, { message: "минимум 6 символов" })
    .max(25, "максимум 25 символов")
    .regex(/[A-Z]/, {
      message: "Должна быть ровно одна заглавная латинская буква",
    }),
  email: z.email({ message: "неверный формат поля" }),
});

export type LoginFormShema = z.infer<typeof LoginFormShema>;
