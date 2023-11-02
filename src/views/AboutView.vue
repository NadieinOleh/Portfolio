<template>
  <div class="about">
    <nav class="nav">
      <a href="#" class="nav_link"><i class="bx-home-alt-2"></i></a>
      <a href="#" class="nav_link text-black">About</a>
      <a href="#" class="nav_link">Contact</a>
    </nav>
    <div >oleg</div>
  </div>
</template>

<style scoped>
.about {
  width: 100%;
}
.nav {
  background-color: var(--tab-color);
  width: 400px;
  height: 150px;
  border-radius: 2em;
  padding: 0 2em;
  box-shadow: 0 1em 1em rgba(255, 0, 0, 0.2);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.nav_links {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.nav_link {
  color: white;
  text-decoration: none;
  padding: 0.5em 1em;
}

.nav_link:hover {
  background-color: orangered;
}
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
