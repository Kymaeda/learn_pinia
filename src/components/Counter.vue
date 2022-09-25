<script setup>
import { useCounterStore } from '../stores/counter';

const store = useCounterStore();
</script>

<template>
  <div>Count: {{ store.count }}</div>
  <div>
    <button @click="store.count++">increment</button>
  </div>
</template>
