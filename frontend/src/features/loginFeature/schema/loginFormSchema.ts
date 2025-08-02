import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.email('Email 형식을 입력해 주세요.'),
  password: z.string()
    .min(6, '비밀번호는 6글자 이상 입력해 주세요.')
    .regex(/([^a-zA-Zㄱ-힣0-9\s])/, '특수기호를 포함시켜 주세요.'),
});

export type TLoginFormSchema = z.infer<typeof loginFormSchema>;
