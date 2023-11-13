<template>
  <main>
    <h5 class="titleAnimation">
      <span class="textAnimation">Front</span>
      <span class="textAnimation">Oleh</span>
      <span class="textAnimation">Nadiein</span>

    </h5>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");


.titleAnimation {
  max-width: 40ch;
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}

.textAnimation {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
  margin: 3px;
}

span:nth-child(1) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}



@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}


</style>
