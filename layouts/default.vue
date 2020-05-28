<template>
  <transition name="fade">
    <LoadingScreen v-if="isLoading" key="1" :is-loading="isLoading" />
    <div v-else key="2" class="app">
      <MobileMenu />
      <Navbar />
      <nuxt />
      <div class="overlay-top"></div>
      <div class="overlay-bottom"></div>
    </div>
  </transition>
</template>

<script>
import AOS from 'aos';

import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import MobileMenu from '@/components/MobileMenu';

export default {
  components: {
    Navbar,
    MobileMenu,
    LoadingScreen
  },
  data() {
    return {
      isLoadingValue: false
    };
  },
  computed: {
    isLoading: {
      get() {
        if (this.$route.name === 'index') return !this.isLoadingValue;
        else return false;
      },
      set(newValue) {
        this.isLoadingValue = newValue;
      }
    }
  },
  mounted() {
    // LOGIC FOR INITILIAZING ANIMATE ON SCROLL
    AOS.init();

    // LOGIC FOR LOADING SCREEN
    setTimeout(() => {
      this.isLoadingValue = true;
    }, 5000);
  }
};
</script>

<style>
.app {
  @apply relative font-display bg-black text-white uppercase antialiased overflow-hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: all ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
