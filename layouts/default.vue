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
  transition: 'intro',
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
        if (this.$route.fullPath === '/') return !this.isLoadingValue;
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

.intro-enter-active,
.intro-leave-active {
  transition-duration: 1600ms;
}
.intro-enter-active::before,
.intro-leave-active::before,
.intro-enter-active::after,
.intro-leave-active::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: block;
  width: 100%;
  height: 50%;
  transition-property: opacity, transform;
  transition-timing-function: ease-in-out;
}
.intro-enter-active::before,
.intro-leave-active::before {
  background-color: #191919;
}
.intro-enter-active::after,
.intro-leave-active::after {
  top: 50%;
  background-color: #191919;
}
.intro-leave::before,
.intro-leave::after {
  transform: scaleX(0);
}
.intro-leave-active::before {
  transition-duration: 800ms;
}
.intro-leave-active::after {
  transition-duration: 500ms;
  transition-delay: 300ms;
}
.intro-leave-to::before,
.intro-leave-to::after {
  transform: scale(1);
  transform-origin: left;
}
.intro-enter::before,
.intro-enter::after {
  transform: scaleX(1);
}
.intro-enter-active::before {
  transition-duration: 800ms;
}
.intro-enter-active::after {
  transition-duration: 500ms;
  transition-delay: 300ms;
}
.intro-enter-to::before,
.intro-enter-to::after {
  transform: scaleX(0);
  transform-origin: right;
}
</style>
