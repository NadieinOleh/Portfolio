<script setup>
import { RouterLink } from 'vue-router';

const links = [
  {src: '/', title: 'Home', id: 1},
  {src: '/About', title: 'About me', id: 2},
  {src: '/Skills', title: 'Skills', id: 3},
  {src: '/Projects', title: 'Projects', id: 4},
  {src: '/Contacts', title: 'Contacts', id: 5},
]
</script>

<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg m-0">
      <div class="container-fluid">
        <div class="d-flex align-items-center">
          <a class="navbar-brand p-0" href="#"> <img alt="Vue logo" class="logo m-0 p-0" src="@/assets/logo.svg" /></a>
        </div>

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

        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item" v-for="link in links" :key="link.id">
              <RouterLink  :to="link.src">{{ link.title }}</RouterLink>
            </li>
           
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