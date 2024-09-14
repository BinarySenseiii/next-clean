// ? https://tkdodo.eu/blog/working-with-zustand to read more why this approach best
import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'

interface BearState {
  bears: number
  fish: number
}
interface BearActions {
  increasePopulation: (payload: number) => void
  eatFish: () => void
  resetBears: () => void
}

type BearStore = BearState & { actions: BearActions }

const initialBearState: BearState = {
  bears: 0,
  fish: 0,
}

const bearStore = create<BearStore>(set => ({
  ...initialBearState,
  // ⬇️ separate "namespace" for actions
  actions: {
    increasePopulation: by => set(state => ({ bears: state.bears + by })),
    eatFish: () => set(state => ({ fish: state.fish - 1 })),
    resetBears: () => set(initialBearState),
  },
}))

export const useBearState = () =>
  bearStore(
    useShallow(state => ({
      bears: state.bears,
      fish: state.fish,
    })),
  )

//  🎉 one selector for all our actions
export const useBearActions = () => bearStore(state => state.actions)
