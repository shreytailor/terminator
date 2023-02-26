import { z } from 'zod';

const CommonParamsSchema = z
  .object({
    after: z.number().optional(),
    forced: z.boolean().optional(),
  })
  .strict();

export const ShutdownSchema = CommonParamsSchema;
export const RestartSchema = CommonParamsSchema;
