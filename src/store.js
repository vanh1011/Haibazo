import create from 'zustand';

const useStore = create((set) => ({
  pointsA: 1,
  pointsB: 1,
  status: 'Same point',
  increasePoints: () => {
    const randomCharacter = Math.random() < 0.5 ? 'A' : 'B';
    set((state) => {
      const newPointsA = state.pointsA + (randomCharacter === 'A' ? 1 : 0);
      const newPointsB = state.pointsB + (randomCharacter === 'B' ? 1 : 0);
      return {
        pointsA: newPointsA,
        pointsB: newPointsB,
        status: newPointsA > newPointsB ? 'A is winning' : newPointsA < newPointsB ? 'B is winning' : 'Same point'
      };
    });
  },
  resetPoints: () => set({ pointsA: 1, pointsB: 1, status: 'Same point' }),
}));

export default useStore;