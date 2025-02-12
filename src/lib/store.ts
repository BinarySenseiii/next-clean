import { create, type StateCreator } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type ConfigType = {
   name?: string
   storage?: Storage
   skipPersist?: boolean
   store: string
}

export const createStore = <T>(
   storeCreator: StateCreator<T, [['zustand/devtools', never], ['zustand/immer', never]], []>,
   config?: ConfigType,
) => {
   const { store, name, storage, skipPersist = false } = config || {}

   const immerStore = immer(storeCreator)

   if (skipPersist) {
      return create<T>()(
         devtools(immerStore, {
            store,
            enabled: process.env.NODE_ENV !== 'production',
         }),
      )
   }

   return create<T>()(
      devtools(
         persist(immerStore, {
            name: name || 'zustand-store',
            storage: createJSONStorage(() => storage || localStorage),
         }),
         {
            store,
            name: name || 'zustand-store',
            enabled: process.env.NODE_ENV !== 'production',
         },
      ),
   )
}
