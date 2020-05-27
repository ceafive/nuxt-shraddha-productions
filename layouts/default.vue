<template>
  <div class="app">
    <transition name="fade">
      <LoadingScreen v-if="isLoading" key="1" :is-loading="isLoading" />
      <div v-else key="2">
        <MobileMenu />
        <Navbar />
        <nuxt />
      </div>
    </transition>
  </div>
</template>

<script>
import AOS from 'aos';

import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import MobileMenu from '@/components/MobileMenu';

export default {
  name: 'App',
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
        if (this.$route.name === 'home') return !this.isLoadingValue;
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
    }, 6000);
  }
};
</script>

<style>
.app {
  @apply relative font-display bg-black text-white uppercase antialiased overflow-hidden;
}

.fade-enter-active,
.fade-leave-active {
  background: #000;
  transition: all 1.1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  background: #000;
  opacity: 0;
}
</style>
