<template>
  <div
    class="collection-card"
    :style="{
      backgroundImage: `url('${require(`@/assets/images/${mainheader}.jpg`)}')`,
      backgroundPosition: backgroundPosition
    }"
  >
    <div
      data-aos="fade"
      data-aos-offset="400"
      data-aos-duration="1000"
      class="mainheader"
    >
      <p>
        <nuxt-link :to="'/collections/' + mainheader">
          {{ mainheader }}</nuxt-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainheader: {
      type: String,
      required: true
    },
    backgroundPosition: {
      type: String,
      default: 'center'
    }
  }
};
</script>

<style scoped>
.collection-card {
  @apply bg-fixed bg-cover h-screen;
}

.collection-card .mainheader {
  @apply font-mainheader flex flex-col justify-center items-center text-15vw leading-none transition-colors ease-in w-full h-full;
}

@screen md {
  .collection-card .mainheader {
    @apply text-10vw;
  }
}

.collection-card .mainheader p:hover {
  @apply text-appYellow cursor-pointer;
}
</style>
