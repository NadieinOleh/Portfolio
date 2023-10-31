import { ref } from 'vue';
import { defineStore } from 'pinia';

export const localeStore = defineStore('locale', () => {
  const lang = ref('en');

  function changeLang(newLang) {
    lang.value = newLang;
  }

  return { lang, changeLang };
});
