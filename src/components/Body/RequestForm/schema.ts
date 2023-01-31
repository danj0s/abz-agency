import { z } from "zod";

export const CREATE_REQUEST_SCHEMA = z.object({

    name: z.string(),
    email: z.string().email(),
    phone: z.number()

})

export type TCreateRequestSchema = z.infer<typeof CREATE_REQUEST_SCHEMA>
