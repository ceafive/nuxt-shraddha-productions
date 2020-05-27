<template>
  <div class="socials">
    <div class="links">
      <p
        data-aos="fade-left"
        data-aos-offset="-100"
        data-aos-easing="ease-in-out-cubic"
        data-aos-duration="1500"
      >
        <a href="https://www.instagram.com/shraddhaproductions/" target="_blank"
          >INSTAGRAM</a
        >
      </p>
      <p
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-offset="-100"
        data-aos-easing="ease-in-out-cubic"
        data-aos-duration="1500"
      >
        <a
          href="https://www.behance.net/shraddhapr7cc7/moodboards"
          target="_blank"
        >
          BEHANCE</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.socials {
  @apply flex justify-center items-center w-full text-xxs;
}
@screen md {
  .socials {
    @apply text-xs;
  }
}
.socials .links {
  @apply flex justify-between w-1/4;
}

@screen xl {
  .socials .links {
    @apply w-1/6;
  }
}
.socials p:hover {
  @apply text-appYellow cursor-pointer;
}
</style>
