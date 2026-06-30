import { z } from 'zod'

// The module owns its contract. Both the query hooks and the local API route
// (app/api/v1/products) validate against this single schema, so the shape can
// never drift between the two sides of the seam.
export const productSchema = z.object({
   id: z.number(),
   name: z.string(),
   price: z.number(),
   quantity: z.number(),
})

export type Product = z.infer<typeof productSchema>

export type ProductFilters = {
   category?: string
   search?: string
   tag?: string
   userId?: string
}
