<template>
  <div class="navbar hidden">
    <div class="navlinks">
      <div v-for="navLink in navLinks" :key="navLink.name">
        <nuxt-link class="link" :to="navLink.route"
          >{{ navLink.name }}<span class="slider"></span>
        </nuxt-link>
      </div>
    </div>

    <div class="logo"><img src="../assets/images/logo.png" alt="logo" /></div>

    <div class="contact">
      <div>
        <nuxt-link class="link" to="/contact"
          >Contact Us<span class="slider"></span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      route: this.$route.name,
      navLinks: [
        { name: 'Home', route: '/' },
        {
          name: 'Collections',
          route: '/collections/bandhini'
        },
        { name: 'Campaign', route: '/campaign' },
        { name: 'About Us', route: '/about' },
        { name: 'Press & Media', route: '/press-media' },
        { name: 'Galleries', route: '/galleries' }
      ]
    };
  }
};
</script>

<style scoped>
.navbar {
  @apply absolute flex w-full font-hairline leading-none text-sm px-6 fixed z-40 hidden;
}

@screen xl {
  .navbar {
    @apply flex;
  }
}

.navlinks {
  @apply flex flex-col w-1/4 py-4;
}

.navlinks div {
  @apply w-full;
}

.link {
  position: relative;
}

.slider {
  @apply bg-appYellow;
  position: absolute;
  left: 0;
  top: 90%;
  height: 2px;
  width: 0%;
  transition: width 1s;
}

.link:hover > .slider {
  width: 100%;
}

.logo {
  @apply flex w-1/2 justify-center h-16;
}

.logo img {
  @apply h-16;
}

.contact {
  @apply flex w-1/4 justify-end py-4 cursor-pointer;
}

a.nuxt-link-exact-active {
  @apply text-appYellow;
}
</style>
