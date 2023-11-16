<template>
  <main>
    <div class="container mb-5">
      <div class="row flex mb-4">
        <h1 class="text-success animation col-12 text-center mb-3">Skills</h1>

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

      <img class="d-block m-auto mb-2" src="../assets/Icons/skills/quotes.svg" />
      <h2 class="text-center blockquote-footer mt-0">
        Intelligence is not only about knowledge, but also about the ability to apply knowledge in practice. in
        practice.
      </h2>

      <h3 class="text-center blockquote-footer m-0">Aristotle</h3>

      <img class="d-block m-auto mt-2" src="../assets/Icons/skills/quotes.svg" />
    </div>
  </main>
</template>

<script setup>
const icons = [
  {
    id: 1,
    name: 'React',
    src: 'src/assets/icons/skills/React.svg',
  },
  {
    id: 2,
    name: 'Redux',
    src: 'src/assets/icons/skills/Redux.svg',
  },
  {
    id: 3,
    name: 'Nextjs',
    src: 'src/assets/icons/skills/Nextjs.svg',
  },
  {
    id: 4,
    name: 'TypeScript',
    src: 'src/assets/icons/skills/TypeTs.svg',
  },
  {
    id: 5,
    name: 'Vue',
    src: 'src/assets/icons/skills/Vue.svg',
  },
  {
    id: 6,
    name: 'Nuxt',
    src: 'src/assets/icons/skills/Nuxt.svg',
  },
  {
    id: 7,
    name: 'JavaScript',
    src: 'src/assets/icons/skills/JavaScript.svg',
  },
  {
    id: 8,
    name: 'Html5',
    src: 'src/assets/icons/skills/Html5.svg',
  },
  {
    id: 9,
    name: 'Css3',
    src: 'src/assets/icons/skills/Css3.svg',
  },
  {
    id: 10,
    name: 'Sass',
    src: 'src/assets/icons/skills/Sass.svg',
  },
  {
    id: 11,
    name: 'Bootstrap',
    src: 'src/assets/icons/skills/Bootstrap.svg',
  },
  {
    id: 12,
    name: 'MUI',
    src: 'src/assets/icons/skills/material-ui.svg',
  },
  {
    id: 13,
    name: 'Figma',
    src: 'src/assets/icons/skills/Figma.svg',
  },
  {
    id: 14,
    name: 'Sql',
    src: 'src/assets/icons/skills/Sql.svg',
  },
  {
    id: 15,
    name: 'Vscode',
    src: 'src/assets/icons/skills/Vscode.svg',
  },
  {
    id: 16,
    name: 'Trello',
    src: 'src/assets/icons/skills/Trello.svg',
  },
  {
    id: 17,
    name: 'Tools',
    src: 'src/assets/icons/skills/Tools.svg',
  },
  {
    id: 18,
    name: 'Npm',
    src: 'src/assets/icons/skills/Npm.svg',
  },
  {
    id: 19,
    name: 'Nodejs',
    src: 'src/assets/icons/skills/Nodejs.svg',
  },
  {
    id: 20,
    name: 'GitHub',
    src: 'src/assets/icons/skills/GithubFilled.svg',
  },
  {
    id: 21,
    name: 'Git',
    src: 'src/assets/icons/skills/Git.svg',
  },
  {
    id: 22,
    name: 'Docker',
    src: 'src/assets/icons/skills/Docker.svg',
  },
  {
    id: 23,
    name: 'More to come',
    src: 'src/assets/icons/skills/Dots.svg',
  },
];
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
