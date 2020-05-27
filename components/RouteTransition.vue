<template>
  <div>
    <transition name="overlay-up-down" mode="out-in">
      <slot></slot>
    </transition>
    <div class="overlay-top"></div>
    <div class="overlay-bottom"></div>
  </div>
</template>

<style scoped>
.overlay-up-down-enter ~ .overlay-bottom,
.overlay-up-down-enter ~ .overlay-top {
  height: 0;
}
.overlay-up-down-leave-active ~ .overlay-bottom,
.overlay-up-down-leave-to ~ .overlay-bottom,
.overlay-up-down-leave-to ~ .overlay-top {
  height: 51vh;
}
.overlay-up-down-enter-active ~ .overlay-bottom,
.overlay-up-down-enter-active ~ .overlay-top {
  transition-timing-function: ease;
}
.overlay-up-down-leave-active ~ .overlay-bottom,
.overlay-up-down-leave-active ~ .overlay-top {
  transition-timing-function: ease;
}
.overlay-up-down-enter-active,
.overlay-up-down-leave-active {
  transition-duration: var(--transition-duration);
}

.overlay-top {
  position: fixed;
  top: 0;
  left: 0;
  height: 0;
  width: 100vw;
  background: var(--overlay-bg);
  transition-duration: var(--transition-duration);
}

.overlay-down-enter ~ .overlay-top,
.overlay-down-leave-to ~ .overlay-top {
  height: 0;
}

.overlay-down-enter-active ~ .overlay-top,
.overlay-down-leave-active ~ .overlay-top {
  height: 100vh;
}

.overlay-down-enter-active ~ .overlay-top {
  transition-timing-function: ease-in;
}

.overlay-down-leave-active ~ .overlay-top {
  transition-timing-function: ease-out;
}

.overlay-down-enter-active,
.overlay-down-leave-active {
  transition-duration: var(--transition-duration);
}

.overlay-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 0;
  width: 100vw;
  background: var(--overlay-bg);
  transition-duration: var(--transition-duration);
}

.overlay-up-enter ~ .overlay-bottom,
.overlay-up-leave-to ~ .overlay-bottom {
  height: 0;
}

.overlay-up-enter-active ~ .overlay-bottom,
.overlay-up-leave-active ~ .overlay-bottom {
  height: 100vh;
}

.overlay-up-enter-active ~ .overlay-bottom {
  transition-timing-function: ease-in;
}

.overlay-up-leave-active ~ .overlay-bottom {
  transition-timing-function: ease-out;
}

.overlay-up-enter-active,
.overlay-up-leave-active {
  transition-duration: var(--transition-duration);
}
</style>
