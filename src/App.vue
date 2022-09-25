<script setup>
import { useCounterStore } from './stores/counter';
import { ref, computed } from 'vue';
import Counter from './components/Counter.vue';

const store = useCounterStore();
const started = ref(false);
const timer = ref(5);
const gameDone = computed(() => timer.value === 0);
const gameTick = () => {
  timer.value--;
  if (gameDone.value) {
    started.value = false;
    store.count = 0;
  } else {
    runGame();
  }
};
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
    <div>
      <button @click="startGame">Start a game</button>
    </div>
  </div>
</template>
