import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { mailOptions, transporter } from "~/server/api/mailer";

export const mailRouter = createTRPCRouter({
  sendMailToSelf: publicProcedure
    .input(
      z.object({
        name: z.string(),
        phone: z.string(),
        email: z.string(),
        address: z.string(),
        city: z.string(),
        zipCode: z.string(),
        additionalDetails: z.string(),
      })
    )
    .query(async ({ input }) => {
      return await transporter.sendMail({
        ...mailOptions,
        subject: `${input.name} requisitou um serviço`,
        html: `
        <h1>${input.name} - ${input.phone}</h1>
        <p>email: ${input.email}</p>
        <p>endereço: ${input.address}, ${input.city}, ${input.zipCode}</p>
        <p>Informações adicionais: ${input.additionalDetails}</p>
        `,
      });
    }),
});
