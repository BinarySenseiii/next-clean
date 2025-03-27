import { useShallow } from 'zustand/react/shallow'

import { type Product } from '../types'

import { createStore } from '~/lib/store'

type ProductState = {
   products: Product[]
}

type ProductActions = {
   addProduct: (product: Product) => void
   updateProductQuantity: (id: number, quantity: number) => void
   removeProduct: (id: number) => void
}

type Store = ProductState & { actions: ProductActions }

// Initial state with an empty product list
const initialProductState: ProductState = {
   products: [],
}

// Create the store
export const useProductStore = createStore<Store>(
   set => ({
      ...initialProductState,

      // Actions for manipulating the products
      actions: {
         addProduct: product => {
            set(state => {
               state.products.push(product)
            })
         },

         updateProductQuantity: (id, quantity) => {
            set(state => {
               const productIndex = state.products.findIndex(p => p.id === id)
               if (productIndex >= 0) {
                  state.products[productIndex].quantity = quantity
               }
            })
         },

         removeProduct: id => {
            set(state => {
               state.products = state.products.filter(product => product.id !== id)
            })
         },
      },
   }),
   {
      skipPersist: true,
   },
)

// Selector to access the list of products
export const useProducts = () => useProductStore(state => state.products)

// Optimized approach with shallow comparison for products state
export const useProductState = () => useProductStore(useShallow(state => ({ products: state.products })))

// Selector to access all product actions
export const useProductActions = () => useProductStore(state => state.actions)
