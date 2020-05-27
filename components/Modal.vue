<template>
  <div v-show="value" class="modal">
    <div
      class="image"
      :style="{
        backgroundImage: `url(${require(`@/assets/images/galleries/${currentCollection}/${clickedImageDetails}.jpg`)})`
      }"
    >
      <button class="btn" @click="close">
        X Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    value: {
      required: true
    },
    clickedImageDetails: String
  },
  data() {
    return {
      currentCollection: this.$route.params.name
    };
  },
  methods: {
    close() {
      this.$emit('input', !this.value);
    }
  }
};
</script>

<style scoped>
.modal {
  @apply absolute top-0 left-0 h-full w-full transition-all duration-1000 ease-in-out z-40;
  background-color: rgba(0, 0, 0, 0.9);
}
.modal .image {
  @apply bg-center bg-contain bg-fixed h-full w-full;
  background-repeat: no-repeat;
}

.modal .image .btn {
  @apply font-body absolute top-1 left-1;
}
.modal .image .btn:hover {
  @apply text-red-500;
}
.modal .image .btn:focus {
  @apply outline-none;
}
</style>
