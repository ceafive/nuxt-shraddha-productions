<template>
  <div :class="{ loader: isLoading }">
    <transition name="fade">
      <div v-if="!displaySecondDiv" key="1" class="page-1">
        <div class="slide-1">
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out-cubic"
          >
            If you want your ears to enjoy
          </h1>
          <h1
            data-aos="slide-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out-cubic"
            class="text-6xl"
          >
            &#10230;
          </h1>
          <h1
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in-out-cubic"
          >
            click anywhere
          </h1>
        </div>
        <div class="slide-2">
          <img src="../assets/images/logo.png" alt="logo" />
        </div>
      </div>
      <div v-else key="2" class="page-2">
        <h1
          data-aos="slide-down"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-cubic"
        >
          We are
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="800"
          data-aos-easing="ease-in-out-cubic"
          class="mainheader"
        >
          the story tellers
        </h1>
        <h1
          data-aos="slide-up"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-cubic"
        >
          with a camera
        </h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: ['isLoading'],
  data() {
    return { displaySecondDiv: false };
  },
  mounted() {
    setTimeout(() => {
      this.displaySecondDiv = true;
    }, 1500);
  }
};
</script>

<style>
.loader {
  @apply bg-black text-white fixed top-0 left-0 bottom-0 right-0 h-screen;
}

.page-1 {
  @apply h-full;
}

.slide-1 {
  @apply hidden w-full h-full justify-around items-center font-body uppercase;
}

@screen lg {
  .slide-1 {
    @apply flex text-2xl;
  }
}

.slide-2 {
  @apply block flex flex-col justify-center items-center h-full w-full;
}

@screen lg {
  .slide-2 {
    @apply hidden;
  }
}
.slide-2 img {
  @apply h-32;
}

.page-2 {
  @apply flex flex-col justify-center items-center h-full w-full font-body uppercase text-xs;
}

@screen md {
  .page-2 {
    @apply text-4xl;
  }
}

.page-2 .mainheader {
  @apply text-lg text-appYellow;
}

@screen md {
  .page-2 .mainheader {
    @apply text-5xl;
  }
}

@screen lg {
  .page-2 .mainheader {
    @apply text-6xl;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
