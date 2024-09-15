// ? https://tkdodo.eu/blog/working-with-zustand to read more why this approach best
import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'

interface BearState {
  bears: number
  fish: number
}
interface BearActions {
  increasePopulation: (by: number) => void
  eatFish: () => void
  resetBears: () => void
}

type BearStore = BearState & { actions: BearActions }

const initialBearState: BearState = {
  bears: 0,
  fish: 0,
}

const useBearStore = create<BearStore>(set => ({
  ...initialBearState,
  // ⬇️ separate "namespace" for actions
  actions: {
    increasePopulation: by => set(state => ({ bears: state.bears + by })),
    eatFish: () => set(state => ({ fish: state.fish - 1 })),
    resetBears: () => set(initialBearState),
  },
}))

export const useBears = () => useBearStore(state => state.bears)
export const useFish = () => useBearStore(state => state.fish)

// ✅ this Optimized approach also fine - // Object pick, re-renders the component when either state.bears or state.fish change
export const useBearState = () =>
  useBearStore(useShallow(state => ({ bears: state.bears })))

//  🎉 one selector for all our actions
export const useBearActions = () => useBearStore(state => state.actions)
