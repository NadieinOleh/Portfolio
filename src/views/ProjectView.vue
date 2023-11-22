<template>
  <main>
    <div class="container p-md-0">
      <div class="row gap-3 justify-content-center justify-content-md-between justify-content-lg-evenly">
        <h1 class="col-12 text-center text-success mb-5"></h1>

        <div
          class="card bg-dark mb-5 border-secondary rounded-4 col-4 col-md-6 col-sm-12 p-lg-2 p-md-2 animationCard"
          v-for="project in projects"
          :key="project.id"
        >
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">{{ project.title }}</h5>

            <div class="mb-2">
              <h6 class="card-title text-success">{{ $t('project.desc') }}</h6>
              <p class="card-text">
                {{ project.description }}
              </p>
            </div>

            <div class="mb-2">
              <h6 class="card-title text-success">{{ $t('project.technologies') }}</h6>
              <p class="card-text">
                {{ project.technologies }}
              </p>
            </div>

            <div class="d-flex gap-2 justify-content-between m-2">
              <a :href="project.gitHub" class="btn btn-success w-50 link text-uppercase">GitHub</a>
              <a :href="project.demo" class="btn btn-success w-50 link text-uppercase">Demo</a>
            </div>
          </div>
        </div>

        <h2 class="col-12 text-center text-success mb-5 animationTitle">{{$t("project.footer")}}</h2>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const projects = computed(() => [
  {
    id: 2,
    title: 'Tasker',
    description: t('project.description.2'),
    technologies: 'React, React-bootstrap, Bootstrap, Redux, Redux-persist',
    gitHub: 'https://github.com/NadieinOleh/todo-list',
    demo: 'https://nadieinoleh.github.io/todo-list/',
  },
  {
      id: 3,
      title: 'Track the parcel',
      description: t('project.description.3'),
      technologies: ' React, Typescript, Redux Toolkit, MUI, Axios',
      gitHub: 'https://github.com/NadieinOleh/NovaPoshta',
      demo: 'https://nadieinoleh.github.io/NovaPoshta/',
    },
    {
      id: 4,
      title: 'TileMerge',
      description: t('project.description.4'),
      technologies: 'HTML, CSS, BEM, Sass, JS',
      gitHub: 'https://github.com/NadieinOleh/2048-Game',
      demo: 'https://nadieinoleh.github.io/2048-Game/',
    },
    {
      id: 5,
      title: 'Cycle Hub',
      description: t('project.description.5'),
      technologies: 'HTML, CSS, BEM, Sass, JS, Figma',
      gitHub: 'https://github.com/NadieinOleh/My-Bike',
      demo: 'https://nadieinoleh.github.io/My-Bike/',
    },
    {
      id: 6,
      title: 'Museum',
      description: t('project.description.6'),
      technologies: 'HTML, CSS, BEM, Sass, JS, Figma',
      gitHub: 'https://github.com/NadieinOleh/Museum',
      demo: 'https://nadieinoleh.github.io/Museum/',
    },
    {
      id: 7,
      title: 'Dia',
      description: t('project.description.7'),
      technologies: 'HTML, CSS, BEM, Sass, JS, Figma',
      gitHub: 'https://github.com/NadieinOleh/Dia',
      demo: 'https://nadieinoleh.github.io/Dia/',
    },
]);
</script>

<style scoped>
.card {
  width: 330px;
}

.animationTitle {
  animation: flash;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}

.animationCard {
  animation: backInLeft;
  animation-duration: 3s;
}

.link {
  font-weight: 600;
}
</style>
