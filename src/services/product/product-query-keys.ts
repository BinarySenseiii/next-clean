export const productQueryKeys = {
   all: () => ['products'],
   byId: (id: string) => ['product', id],
   byCategory: (category: string) => ['products', { category }],
   bySearch: (search: string) => ['products', { search }],
   byTag: (tag: string) => ['products', { tag }],
   byUser: (userId: string) => ['products', { userId }],
   byUserAndCategory: (userId: string, category: string) => ['products', { userId, category }],
}
