<template>
  <main>
    <img class="vectorLeft vector" src="@/assets/Vector 6.svg" />
    <div class="flex flex-column wrapper py-4">
      <h1 class="mb-3 text-uppercase">{{ $t("about.about") }}</h1>
      <p class="mb-md-5 title">
        {{$t("about.title")}}
      </p>
    </div>

    <div class="flex flex-column mb-4">
      <h2 class="text-center text-uppercase">{{ $t("about.experience") }}</h2>
      <h5>Frontend Developer</h5>
      <h6>{{ $t("about.organization") }} "Project Future"</h6>
      <ol class="list-group list-group-numbered w-75">
        <li v-for="item in futureProject" :key="item.id" class="list-group-item">{{ item.title }}</li>
      </ol>
    </div>

    <img class="vectorRight vector" src="@/assets/Vector 8.svg" />

    <div class="flex flex-column mb-4">
      <h5>Frontend Developer</h5>
      <h6>Freelance Projects</h6>
      <ol class="list-group list-group-numbered w-75">
        <li class="list-group-item">
          {{ $t("about.freelanceProjects.responsibilities.1") }}
        </li>
        <li class="list-group-item">
          {{ $t("about.freelanceProjects.responsibilities.2") }}
        </li>
        <li class="list-group-item">
          {{ $t("about.freelanceProjects.responsibilities.3") }}
        </li>
        <li class="list-group-item">
          {{ $t("about.freelanceProjects.responsibilities.4") }}
        </li>
        <li class="list-group-item">
          {{ $t("about.freelanceProjects.responsibilities.5") }}
        </li>
      </ol>
    </div>

    <div class="flex flex-column mb-5">
      <h5> {{ $t("about.courses") }}</h5>
      <ul class="list-group list-group w-75">
        <li class="list-group-item">
          <p class="m-0">Mate academy</p>
          <p class="m-0">Frontend Development Course</p>
        </li>
        <li class="list-group-item">
          <p class="m-0">ITVDN</p>
          <p class="m-0">Frontend Development Course</p>
        </li>
        <li class="list-group-item">
          <p class="m-0">Rolling Scopes School</p>
          <p class="m-0">JS / FRONT-END Course</p>
        </li>
        <li class="list-group-item">
          <p class="m-0">MDN Web Docs</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from 'vue';

const { t } = useI18n(); 

const futureProject = computed(() => [
  {
    id: 1,
    title:
      t("about.projectFuture.responsibilities.1"),
  },
  {
    id: 2,
    title:
    t("about.projectFuture.responsibilities.2"),
  },
  {
    id: 3,
    title:
    t("about.projectFuture.responsibilities.3"),
  },
  {
    id: 4,
    title:
    t("about.projectFuture.responsibilities.44"),
  },
  {
    id: 5,
    title:
    t("about.projectFuture.responsibilities.5"),
  },
  {
    id: 6,
    title:
    t("about.projectFuture.responsibilities.6"),
  },
  {
    id: 7,
    title:
    t("about.projectFuture.responsibilities.7"),
  },
  {
    id: 8,
    title:
    t("about.projectFuture.responsibilities.8"),
  },
])


</script>

<style lang="scss" scoped>
.vectorLeft {
  left: -25%;
}
.vectorRight {
  right: -25%;
}

.wrapper {
  width: 50%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 80%;
  }
}

.title {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.7px;
  text-transform: capitalize;
}
</style>
