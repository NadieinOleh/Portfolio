<template>
  <footer class="footer bg-black">
    <div class="container text-center pb-1">
      <div class="row flex mb-2">
        <div class="col-12 pt-4">
          <h3 class="text-center text-success mb-4 title">{{$t("footer.touch")}}</h3>
        </div>

        <div class="col-12 pb-3">
          <h4 class="text-center email">{{ email }}</h4>
        </div>

        <div class="col-3"><img class="image" src="@/assets/ukraine.png" alt="Stand With Ukraine" /></div>

        <div class="col-3">
          <a href="https://github.com/NadieinOleh" target="blank"><img class="icon" src="@/assets/github.svg" alt="gitHub" /></a>
        </div>

        <div class="col-3">
          <a href="https://www.linkedin.com/in/oleh-nadiein-764a96175/" target="blank"
            ><img class="icon" src="@/assets/linkendin.svg" alt="linkendin"
          /></a>
        </div>

        <div class="col-3">
          <a href="https://t.me/Nadiein_Oleh/" target="blank"
            ><img class="icon" src="@/assets/telegram.svg" alt="telegram"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>

const email = 'nadeinolegdev@gmail.com';
</script>

<style scoped>
.footer {
  box-shadow: 0 -1em 1em rgba(255, 145, 67, 0.5);
  border-radius: 20px;
}

.title {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  animation: shakeX;
  animation-duration: 5s;
}

.uk {
  border-radius: 50%;
}
.image {
  width: 100px;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .image {
    width: 70%;
  }

  .icon {
    width: 30px;
  }
}
.email {
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
}
</style>
