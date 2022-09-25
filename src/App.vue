<template>
  <h1>games :)</h1>

  <div>
    <router-link :to="{ name: 'game' }">Home</router-link> |
    <router-link :to="{ name: 'hall-of-fame' }">Hall Of Fame</router-link> |
    <router-view />
  </div>
</template>
