import { useShallow } from 'zustand/react/shallow'

import { createStore } from '~/lib/store'
import { type Product } from '~/modules/products'

// Client-only cart state. Kept separate from the products module, which owns
// server-cache state via TanStack Query — the two never collide on a name again.
type CartState = {
   items: Product[]
}

type CartActions = {
   addItem: (item: Product) => void
   updateItemQuantity: (id: number, quantity: number) => void
   removeItem: (id: number) => void
}

type Store = CartState & { actions: CartActions }

const initialCartState: CartState = {
   items: [],
}

export const useCartStore = createStore<Store>(
   set => ({
      ...initialCartState,

      actions: {
         addItem: item => {
            set(state => {
               state.items.push(item)
            })
         },

         updateItemQuantity: (id, quantity) => {
            set(state => {
               const index = state.items.findIndex(item => item.id === id)
               if (index >= 0) {
                  state.items[index].quantity = quantity
               }
            })
         },

         removeItem: id => {
            set(state => {
               state.items = state.items.filter(item => item.id !== id)
            })
         },
      },
   }),
   {
      skipPersist: true,
   },
)

// Granular selectors — components subscribe to exactly what they read.
export const useCart = () => useCartStore(state => state.items)
export const useCartState = () => useCartStore(useShallow(state => ({ items: state.items })))
export const useCartActions = () => useCartStore(state => state.actions)
