import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    scores: [],
  }),
  actions: {
    addScore() {
      this.scores.unshift({
        score: this.count,
        when: new Date(),
      });
      this.count = 0;
    },
  },
  getters: {
    sortedByHighestScore: (state) => state.scores.sort((a, b) => b.score - a.score)
  }
})
