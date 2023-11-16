<script setup>
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { onMounted } from 'vue';
import { localeStore } from './stores/locale';

const store = localeStore();
console.log(store.lang);

onMounted(() => {
  document.title = 'Portfolio';
  document.cookie = store.lang;
});
</script>

<template>
  <TheHeader />

  <RouterView />

  <TheFooter />
</template>

<style>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vector {
  position: absolute;
  z-index: -1;
  transform: rotate(-178.318deg);
  filter: blur(100px);
  fill: rgba(255, 255, 255, 0.18);
}
</style>
