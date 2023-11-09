<script setup></script>

<template>
  <main>
    <div class="container text-center">
      <div class="row">
        <div class="col-xl-6 col-md-12 mb-5 flex flex-column">
          <p class="m-0 text-uppercase topTitle">Welcome</p>
          <h1 class="m-0 title">I’m Oleh Nadiein</h1>
          <h5 class="mb-3 text-uppercase bottomTitle">Front End Developer</h5>
          <button type="button" class="btn btn-outline-success">Download CV</button>
        </div>
        <div class="col-xl-6 col-md-12 flex mb-5 mb-sm-5">
          <img class="img flex" src="@/assets/myFoto.png" alt="MyFoto" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.topTitle {
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 9px;
  opacity: 0.7;
}

.title {
  font-size: 67px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.bottomTitle {
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.3px;
  opacity: 0.7;
}

.img {
  max-width: 400px;
  max-height: 400px;
  border-radius: 10px;
}
</style>
