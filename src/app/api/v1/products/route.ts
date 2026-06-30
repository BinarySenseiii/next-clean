import { z } from 'zod'

import { productSchema } from '~/modules/products/types'

// Demo catalogue. Validated against the products module's own schema before it
// leaves the route, so the contract is owned in one place and checked at the seam.
const MOCK_PRODUCTS = [
   { id: 1, name: 'Starter Tee', price: 25, quantity: 100 },
   { id: 2, name: 'Sticker Pack', price: 8, quantity: 250 },
]

export async function GET() {
   const products = z.array(productSchema).parse(MOCK_PRODUCTS)

   return Response.json({ data: products })
}
