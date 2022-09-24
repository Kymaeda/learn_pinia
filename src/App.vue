<script setup>
import { useCounterStore } from './stores/counter'

const store = useCounterStore()
</script>

<template>
  <!-- NOTE: enabled to direct access to state value with `store` -->
  <div>Count: {{ store.count }}</div>
</template>
