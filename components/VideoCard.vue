<template>
  <div class="video-card">
    <div class="main">
      <div class="video-bg">
        <video autoplay muted loop>
          <source :src="video()" type="video/mp4" />
        </video>
      </div>
      <slot name="mainheader"></slot>
      <slot name="subheader"></slot>
      <div class="mainheader">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          :class="mainheaderColor"
          v-html="mainheader"
        ></p>
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
    mainheader: String,
    mainheaderColor: String,
    subheader: String,
    video: Function
  }
};
</script>

<style scoped>
.video-card {
  @apply relative h-screen;
}

.video-card .main {
  @apply absolute top-0 left-0 flex flex-col justify-center items-center text-center w-full h-full;
}

.video-card .main .mainheader {
  @apply absolute font-mainheader flex flex-col justify-center items-center text-15vw leading-none cursor-pointer;
}

@screen xl {
  .video-card .main .mainheader {
    @apply text-10vw;
  }
}

.video-card .main .subheader {
  @apply absolute font-body text-xxs;
  top: 65%;
}

@screen md {
  .video-card .main .subheader {
    @apply text-base;
    top: 70%;
  }
}

@screen lg {
  .video-card .main .subheader {
    @apply text-2xl;
    top: 80%;
  }
}

.video-card .main .hero-mainheader {
  @apply absolute font-body text-transparent leading-none text-10vw;
  -webkit-text-stroke: 1px rgba(219, 218, 212, 0.8);
}

@screen xl {
  .video-card .main .hero-mainheader {
    @apply text-7vw;
    -webkit-text-stroke: 5px rgba(219, 218, 212, 0.8);
  }
}

.video-card .main .hero-subheader {
  @apply absolute font-mainheader text-3xl text-appYellow leading-none;
  top: 70%;
}

@screen md {
  .video-card .main .hero-subheader {
    @apply text-4xl;
  }
}

@screen lg {
  .video-card .main .hero-subheader {
    @apply text-6xl;
  }
}

.video-card .main .video-bg {
  @apply absolute top-0 left-0 h-full w-full;
}

.video-card .main .video-bg video {
  @apply object-cover -z-1;
}

@media (min-aspect-ratio: 16/9) {
  .video-card .main .video-bg video {
    @apply h-full w-full;
  }
}

@media (max-aspect-ratio: 16/9) {
  .video-card .main .video-bg video {
    @apply h-full;
    width: auto;
  }
}
</style>
