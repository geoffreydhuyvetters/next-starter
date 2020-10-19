import create from 'zustand';

// https://github.com/pmndrs/zustand

// Initialisation:

// const useStore = create((set) => ({
//   counter: 0,
//   increaseCounter: () => set(({ counter }) => ({ counter: counter + 1 })),
//   resetCounter: () => set({ counter: 0 }),
// }));

const useStore = create(() => ({}));

export { useStore };

// Usage:

// const counter = useStore(({ counter }) => counter);
// const increateCounter = useStore(({ increaseCounter }) => increaseCounter);
