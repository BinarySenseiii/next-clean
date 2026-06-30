import { useMutation, useQueryClient } from '@tanstack/react-query'

import { createProduct, deleteProduct, productQueryKeys, updateProduct } from '../api'

export const useCreateProduct = () => {
   const queryClient = useQueryClient()

   return useMutation({
      mutationFn: createProduct,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: productQueryKeys.lists() }),
   })
}

export const useUpdateProduct = () => {
   const queryClient = useQueryClient()

   return useMutation({
      mutationFn: updateProduct,
      onSuccess: product => {
         queryClient.invalidateQueries({ queryKey: productQueryKeys.lists() })
         queryClient.invalidateQueries({ queryKey: productQueryKeys.detail(product.id) })
      },
   })
}

export const useDeleteProduct = () => {
   const queryClient = useQueryClient()

   return useMutation({
      mutationFn: deleteProduct,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: productQueryKeys.lists() }),
   })
}
