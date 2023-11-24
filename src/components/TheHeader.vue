<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { localeStore } from '../stores/locale';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const store = localeStore();
const { lang } = storeToRefs(store);

const selectedOption = ref(lang);

const links = computed(() => [
  { src: '/', title: t('header.home'), id: 1 },
  { src: '/About', title: t('header.about'), id: 2 },
  { src: '/Skills', title: t('header.skills'), id: 3 },
  { src: '/Projects', title: t('header.projects'), id: 4 },
]);
</script>

<template>
  <header class="header mb-5">
    <nav class="navbar navbar-expand-lg m-0">
      <div class="container-fluid">
        <div class="d-flex align-items-center">
          <a class="navbar-brand p-0" href="/"> <img alt="Vue logo" class="logo m-0 p-0" src="@/assets/logo.svg" /></a>
        </div>

        <div class="d-flex gap-3">
          <select
            class="form-select form-select-sm text-success"
            v-model="selectedOption"
            @change="$i18n.locale = selectedOption"
          >
            <option value="en">EN</option>
            <option value="uk">UA</option>
          </select>

          <button
            class="navbar-toggler text-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item" v-for="link in links" :key="link.id">
              <RouterLink :to="link.src">{{ link.title }}</RouterLink>
            </li>

            <li class="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  box-shadow: 0 1em 1em rgba(255, 145, 67, 0.5);
  border-radius: 20px;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 70px;
  object-fit: cover;
  object-position: center;
}
</style>
