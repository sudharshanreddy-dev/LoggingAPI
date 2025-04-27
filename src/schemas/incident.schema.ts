import z from "zod";

export const incident_schema: z.ZodSchema = z.object({
    "title": z.string(),
    "description": z.string(),
    "severity": z.enum(["Low", "Medium", "High"]),
})