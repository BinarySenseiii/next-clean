import { useShallow } from 'zustand/react/shallow'

import { createStore } from '~/lib/store'

// ? https://tkdodo.eu/blog/working-with-zustand to read more why this approach best

type CountState = {
   count: number
}

type CountActions = {
   updateIncrementCount: (step: number) => void
}

type Store = CountState & { actions: CountActions }

const initialCountState: CountState = {
   count: 0,
}

export const useCountStore = createStore<Store>(
   set => ({
      ...initialCountState,

      // ⬇️ separate "namespace" for actions
      actions: {
         updateIncrementCount: step => {
            set(state => {
               state.count = step
            })
         },
      },
   }),
   {
      skipPersist: true,
   },
)

export const useCount = () => useCountStore(state => state.count)

// ✅ this Optimized approach also fine - // Object pick, re-renders the component when any value changes
export const useCountState = () => useCountStore(useShallow(state => ({ count: state.count })))

//  🎉 one selector for all our actions
export const useCountActions = () => useCountStore(state => state.actions)
