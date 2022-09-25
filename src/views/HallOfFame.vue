<script setup>
import { useCounterStore } from '../stores/counter';

const store = useCounterStore();
</script>

<template>
  <h2>Hall Of Fame</h2>
  <div v-for="data in store.sortedByHighestScore" :key="data.when">
    {{ data.score }} in {{ data.when.toUTCString() }}
  </div>
</template>
