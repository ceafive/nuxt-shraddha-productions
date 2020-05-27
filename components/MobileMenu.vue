<template>
  <div class="mobile-menu">
    <div id="myNav" class="overlay">
      <p class="closebtn" @click="closeNav">X</p>
      <div class="overlay-content">
        <p
          v-for="navLink in navLinks"
          :key="navLink.name"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          @click="closeNav"
        >
          <router-link :to="navLink.route">{{ navLink.name }}</router-link>
        </p>
      </div>
    </div>

    <div class="hamburger">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="logo" />
      </div>
      <div class="icon" @click="openNav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#fff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="0" y1="8" x2="40" y2="8" />
          <line x1="0" y1="16" x2="40" y2="16" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    navLinks: [
      { name: 'Home', route: '/' },
      {
        name: 'Collections',
        route: '/collections/bandhini'
      },
      { name: 'Campaign', route: '/campaign' },
      { name: 'About Us', route: '/about' },
      { name: 'Press & Media', route: '/press-media' },
      { name: 'Galleries', route: '/galleries' },
      { name: 'Contact Us', route: '/contact' }
    ]
  }),
  methods: {
    closeNav() {
      document.getElementById('myNav').style.height = '0%';
    },
    openNav() {
      document.getElementById('myNav').style.height = '100%';
    }
  }
};
</script>

<style scoped>
.mobile-menu {
  @apply block fixed w-full p-4 z-40;
}

@screen xl {
  .mobile-menu {
    @apply hidden;
  }
}
.overlay {
  @apply relative fixed bg-appDarkGrey font-body top-0 left-0 overflow-hidden transition-all duration-500 ease-in-out h-0 w-full;
}

.overlay .closebtn {
  @apply absolute text-2xl cursor-pointer;
  top: 5%;
  right: 5%;
}

@screen md {
  .overlay .closebtn {
    @apply text-4xl;
  }
}

.overlay-content {
  @apply w-full h-full flex flex-col justify-center items-center text-xs;
}

@screen md {
  .overlay-content {
    @apply text-2xl;
  }
}

@screen lg {
  .overlay-content {
    @apply text-4xl;
  }
}

.overlay-content a {
  @apply no-underline block py-1;
}

.hamburger {
  @apply flex w-full justify-between items-center;
}

.hamburger .logo img {
  @apply h-8;
}

@screen md {
  .hamburger .logo img {
    @apply h-12;
  }
}

.hamburger .icon {
  @apply cursor-pointer;
}

a.router-link-exact-active {
  @apply text-appYellow;
}
</style>
