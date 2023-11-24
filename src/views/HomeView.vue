<script setup></script>

<template>
  <main>
    <div class="container text-center">
      <div class="row">
        <img class="vector" src="@/assets/Vector 8.svg" />

        <div class="col-xl-6 col-md-12 mb-5 flex flex-column">
          <p class="m-0 text-uppercase topTitle waviy">
            <span style="--i: 1">w</span>
            <span style="--i: 2">e</span>
            <span style="--i: 3">l</span>
            <span style="--i: 4">c</span>
            <span style="--i: 5">o</span>
            <span style="--i: 6">m</span>
            <span style="--i: 7">e</span>
          </p>

          <h1 class="titleAnimation">
            <span class="textAnimation">{{ $t('home.home') }}</span>
            <span class="textAnimation">{{ $t('home.name') }}</span>
            <span class="textAnimation">{{ $t('home.surname') }}</span>
          </h1>

          <h5 class="subTitleAnimation">
            <span class="textAnimation">Front</span>
            <span class="textAnimation">End</span>
            <span class="textAnimation">Developer</span>
          </h5>
          <button type="button" @click="downloadWithAxios(cv.src, cv.title)" class="btn btn-outline-success">
            {{ $t('home.download') }} CV
          </button>

          <p class="mt-3 text-danger" v-show="error">{{ $t('home.error') }}</p>
        </div>
        <div class="col-xl-6 col-md-12 flex mb-5 mb-sm-5">
          <img class="img flex" src="@/assets/372497211387458.png " alt="MyFoto" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const cv = {
  title: 'CV_Oleh_Nadiein.pdf',
  src: './Portfolio/CV_Oleh_Nadiein.pdf',
};

const error = ref('');

const forceFileDownload = (response, title) => {
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', title);
  document.body.appendChild(link);
  link.click();
};

const downloadWithAxios = (url, title) => {
  axios({
    method: 'get',
    url,
    responseType: 'arraybuffer',
  })
    .then((response) => {
      error.value = t('')
      forceFileDownload(response, title);
    })
    .catch(() => (error.value = t('home.error')));
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

.vector {
  position: absolute;
  z-index: -1;
  flex-shrink: 0;
  fill: rgba(255, 255, 255, 0.18);
  left: 0;
  filter: blur(100px);
}

.titleAnimation,
.subTitleAnimation {
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

.textAnimation,
.subTextAnimation {
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

.waviy {
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  font-size: 60px;
}
.waviy span {
  font-family: 'Alfa Slab One', cursive;
  position: relative;
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  animation: waviy 1s infinite;
  animation-delay: calc(0.1s * var(--i));
}
@keyframes waviy {
  0%,
  40%,
  100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
}
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

  animation: slideInRight;
  animation-duration: 2s;
}
</style>
