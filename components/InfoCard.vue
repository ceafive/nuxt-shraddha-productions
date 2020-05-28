<template>
  <div
    :data-aos="animationName"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out-cubic"
    class="info-card"
    :style="{
      backgroundImage: `url('${image()}')`
    }"
  >
    <div class="main">
      <div class="video-bg">
        <video autoplay muted loop>
          <source :src="video()" type="video/mp4" />
        </video>
      </div>
      <div class="mainheader">
        <nuxt-link
          :to="routeLink"
          :class="mainheaderColor"
          v-html="mainheader"
        ></nuxt-link>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
        class="subheader"
      >
        <p>{{ subheader }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    animationName: String,
    mainheader: String,
    mainheaderColor: String,
    subheader: String,
    routeLink: String,
    video: {
      type: Function,
      default: () => ''
    },
    image: {
      type: Function,
      default: () => ''
    }
  }
};
</script>

<style scoped>
.info-card {
  @apply relative bg-center bg-cover h-screen;
}

.info-card .main {
  @apply absolute top-0 left-0 flex flex-col justify-center items-center text-center w-full h-full;
}

.info-card .main .mainheader {
  @apply absolute font-mainheader flex flex-col justify-center items-center text-11vw leading-none;
}

.info-card .main .subheader {
  @apply absolute font-body text-xs;
  top: 60%;
}

@screen md {
  .info-card .main .subheader {
    @apply text-xl;
    top: 70%;
  }
}

@screen xl {
  .info-card .main .subheader {
    @apply text-2xl;
  }
}

.info-card .main .video-bg {
  @apply absolute top-0 left-0 h-full w-full;
}

.info-card .main .video-bg video {
  @apply object-cover;
}

@media (min-aspect-ratio: 16/9) {
  .info-card .main .video-bg video {
    @apply h-full w-full;
  }
}

@media (max-aspect-ratio: 16/9) {
  .info-card .main .video-bg video {
    @apply h-full;
    width: auto;
  }
}
</style>
