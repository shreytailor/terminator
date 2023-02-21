import { z } from 'zod';

const DelayableSchema = z.object({
  after: z.number().optional(),
});

const ForceableSchema = z.object({
  forced: z.boolean().optional(),
});

export const ShutdownSchema = DelayableSchema.merge(ForceableSchema).strict();
export const RestartSchema = DelayableSchema.merge(ForceableSchema).strict();
export const HibernateSchema = DelayableSchema.strict();
