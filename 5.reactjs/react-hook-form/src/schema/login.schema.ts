import z from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Email bắt buộc phải nhập")
        .pipe(z.email("Email không hợp lệ"))
        .refine((value: string) => {
            //return true -> passed
            return value !== "admin@gmail.com";
        }, "Email này không được phép sử dụng"),
    password: z
        .string()
        .min(1, "Mật khẩu bắt buộc phải nhập")
        .regex(
            /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/,
            "Mật khẩu không đủ mạnh",
        ),
    confirmPassword: z.string().min(1, "Confirm password không được để trống"),
    // age: z.coerce.number<number>()
    age: z.string().transform((value) => {
        if (value) {
            return +value;
        }
    }),
    // status: z.string().transform((value: string) => {
    //     return value === '' ? undefined : value;
    // }).pipe(z.enum(['active', 'inactive'], "Trạng thái không hợp lệ").optional())

    status: z.enum(['', 'active', 'inactive'], "Trạng thái không hợp lệ"),

    agreeStatus: z.boolean(),

    gender: z.string().nullable()

}).refine(({ password, confirmPassword }) => {
    return password === confirmPassword
}, {
    path: ["confirmPassword"],
    message: "Mật khẩu nhập lại không khớp"
});