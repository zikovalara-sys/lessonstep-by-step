import {z} from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .email("Не віркно вказно пошту"),
    password: z
        .string()
        .min(6, "Пароль має мати 6 символів"),
});
