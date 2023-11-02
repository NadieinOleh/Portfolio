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
</style>
