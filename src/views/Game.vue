<script setup>
import { useCounterStore } from '../stores/counter';
import { ref, computed } from 'vue';
import Counter from '../components/Counter.vue';

const store = useCounterStore();
const started = ref(false);
const timer = ref(5);
const gameDone = computed(() => timer.value === 0);
const gameTick = () => {
  timer.value--;
  if (gameDone.value) {
    started.value = false;
    store.addScore();
  } else {
    runGame();
  }
};
const reset = () => store.$reset();
const runGame = () => setTimeout(gameTick, 1000);
const startGame = () => {
  timer.value = 5;
  started.value = true;
  runGame();
};
</script>

<template>
  <div v-if="started">
    <counter></counter>
  </div>
  <div v-else>
    <div>the game has not started yet</div>
    <div>current best score: {{ store.highScore }}</div>

    <div>
      <button @click="reset">Reset</button>
    </div>

    <div>
      <button @click="startGame">Start a game</button>
    </div>
  </div>
</template>
