<template>
  <main>
    <div class="container mb-5">
      <div class="row flex mb-4">
        <h1 class="text-success animation col-12 text-center mb-3">{{ $t('skills.skills') }}</h1>

        <img class="vectorLeft vector" src="@/assets/Vector 6.svg" />

        <img
          v-for="icon in icons"
          :key="icon.id"
          :src="icon.src"
          :alt="icon.name"
          data-toggle="tooltip"
          data-placement="top"
          :title="icon.name"
          class="animation col-lg-1 col-2"
        />
      </div>

      <img class="d-block m-auto mb-2" src="/public/Icons/skills/quotes.svg" />
      <h2 class="text-center blockquote-footer mt-0">
        {{ $t('skills.aristotle') }}
      </h2>

      <h3 class="text-center blockquote-footer m-0">Aristotle</h3>

      <img class="d-block m-auto mt-2" src="/Portfolio/Icons/skills/quotes.svg" />
    </div>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const icons = computed(() => 
  [
    {
      id: 1,
      name: 'React',
      src: '/Portfolio/Icons/skills/React.svg',
    },
    {
      id: 2,
      name: 'Redux',
      src: '/Portfolio/Icons/skills/Redux.svg',
    },
    {
      id: 3,
      name: 'Nextjs',
      src: '/Portfolio/Icons/skills/Nextjs.svg',
    },
    {
      id: 4,
      name: 'TypeScript',
      src: '/Portfolio/Icons/skills/TypeTs.svg',
    },
    {
      id: 5,
      name: 'Vue',
      src: '/Portfolio/Icons/skills/Vue.svg',
    },
    {
      id: 6,
      name: 'Nuxt',
      src: '/Portfolio/Icons/skills/Nuxt.svg',
    },
    {
      id: 7,
      name: 'JavaScript',
      src: '/Portfolio/Icons/skills/Javascript.svg',
    },
    {
      id: 8,
      name: 'Html5',
      src: '/Portfolio/Icons/skills/Html5.svg',
    },
    {
      id: 9,
      name: 'Css3',
      src: '/Portfolio/Icons/skills/Css3.svg',
    },
    {
      id: 10,
      name: 'Sass',
      src: '/Portfolio/Icons/skills/Sass.svg',
    },
    {
      id: 11,
      name: 'Bootstrap',
      src: '/Portfolio/Icons/skills/Bootstrap.svg',
    },
    {
      id: 12,
      name: 'MUI',
      src: '/Portfolio/Icons/skills/material-ui.svg',
    },
    {
      id: 13,
      name: 'Figma',
      src: '/Portfolio/Icons/skills/Figma.svg',
    },
    {
      id: 14,
      name: 'Sql',
      src: '/Portfolio/Icons/skills/Sql.svg',
    },
    {
      id: 15,
      name: 'Vscode',
      src: '/Portfolio/Icons/skills/Vscode.svg',
    },
    {
      id: 16,
      name: 'Trello',
      src: '/Portfolio/Icons/skills/Trello.svg',
    },
    {
      id: 17,
      name: 'Tools',
      src: '/Portfolio/Icons/skills/Tools.svg',
    },
    {
      id: 18,
      name: 'Npm',
      src: '/Portfolio/Icons/skills/Npm.svg',
    },
    {
      id: 19,
      name: 'Nodejs',
      src: '/Portfolio/Icons/skills/Nodejs.svg',
    },
    {
      id: 20,
      name: 'GitHub',
      src: '/Portfolio/Icons/skills/GithubFilled.svg',
    },
    {
      id: 21,
      name: 'Git',
      src: '/Portfolio/Icons/skills/Git.svg',
    },
    {
      id: 22,
      name: 'Docker',
      src: '/Portfolio/Icons/skills/Docker.svg',
    },
    {
      id: 23,
      name: t('skills.more'),
      src: '/Portfolio/Icons/skills/Dots.svg',
    },
  ]
);
</script>

<style scoped>
.animation {
  display: inline-block;
  margin: 0 0.5rem;

  animation: backInLeft;
  animation-duration: 4s;
  cursor: pointer;
}
</style>
