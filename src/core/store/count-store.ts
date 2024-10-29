// ? https://tkdodo.eu/blog/working-with-zustand to read more why this approach best
import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

interface CountState {
    count: number;
}

interface CountActions {
    decrementCount: (by?: number) => void;
    incrementCount: () => void;
    resetCount: () => void;
}

type BearStore = CountState & { actions: CountActions };

const initialBearState: CountState = {
    count: 0
};

const useCountStore = create<BearStore>((set) => ({
    ...initialBearState,
    // ⬇️ separate "namespace" for actions
    actions: {
        incrementCount: () => set((state) => ({ count: state.count + 1 })),
        decrementCount: (by = 1) => set((state) => ({ count: state.count > by ? state.count - by : 0 })),
        resetCount: () => set(initialBearState)
    }
}));

export const useCount = () => useCountStore((state) => state.count);

// ✅ this Optimized approach also fine - // Object pick, re-renders the component when any value changes
export const useCountState = () => useCountStore(useShallow((state) => ({ count: state.count })));

//  🎉 one selector for all our actions
export const useCountActions = () => useCountStore((state) => state.actions);
