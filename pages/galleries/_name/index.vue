<template>
  <div class="gallery">
    <div class="main">
      <Modal v-model="modalOpen" :clicked-image-details="clickedImageDetails" />

      <div class="mainheader">
        <p @click="$router.go(-1)">
          &#9665; Back to Galleries
        </p>
      </div>
      <div class="subheader">
        <p>
          {{ currentCollection }}
        </p>
      </div>

      <carousel
        :easing="'ease-in-out'"
        :loop="true"
        :speed="1000"
        :per-page="1"
        :pagination-active-color="'#fffd13'"
        :pagination-size="5"
        :pagination-padding="1"
        :pagination-enabled="true"
        :navigation-enabled="true"
        :navigation-prev-label="
          `<svg class='stroke-current text-white hover:text-appYellow h-8 w-8 sm:h-12 sm:w-12' xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
          <title>ionicons-v5-a</title>
          <polyline points='328 112 184 256 328 400' style='fill:transparent;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px'/>
          </svg>`
        "
        :navigation-next-label="
          `<svg class='stroke-current text-white hover:text-appYellow h-8 w-8 sm:h-12 sm:w-12' xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
          <title>ionicons-v5-a</title>
          <polyline points='184 112 328 256 184 400' style='fill:transparent;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px'/>
          </svg>`
        "
        class="carousel"
      >
        <slide
          v-for="number in numberOfImages"
          :key="`${currentCollection}-${number}`"
          :data-index="`${currentCollection}-${number}`"
          class="slide"
          :style="{
            backgroundImage: `url('${require(`@/assets/images/galleries/${currentCollection}/${currentCollection}-${number}.jpg`)}')`
          }"
          @slideclick="openModal"
        >
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { gallerycards } from '@/plugins/cardsdata';
import Modal from '@/components/Modal';
export default {
  components: {
    Modal
  },
  data() {
    return {
      currentCollection: this.$route.params.name,
      modalOpen: false,
      clickedImageDetails: `${this.$route.params.name}-1`
    };
  },
  computed: {
    numberOfImages() {
      const found = gallerycards.find(
        (gallerycard) => gallerycard.name === this.currentCollection
      );
      return found.numberOfImages;
    }
  },
  methods: {
    openModal(dataset) {
      const imageNo = dataset.index;
      this.clickedImageDetails = imageNo;
      this.modalOpen = !this.modalOpen;
    }
  },
  head() {
    return {
      title: 'Gallery - Shraddha Productions'
    };
  }
};
</script>

<style scoped>
.gallery {
  @apply relative h-screen bg-black;
}
.gallery .main {
  @apply absolute top-0 left-0 flex flex-col justify-center items-center h-full w-full pl-3 pt-10;
}
.gallery .main .mainheader {
  @apply flex w-full justify-center font-body text-xxs leading-none mt-16;
}

.gallery .main .mainheader p:hover {
  @apply text-appYellow cursor-pointer;
}

@screen md {
  .gallery .main .mainheader {
    @apply text-base mt-0;
  }
}

@screen lg {
  .gallery .main .mainheader {
    @apply mt-12;
  }
}

@screen xl {
  .gallery .main .mainheader {
    @apply justify-start text-base;
  }
}

.gallery .main .subheader {
  @apply flex justify-center font-mainheader leading-none tracking-wide text-20vw py-1;
}
@screen md {
  .gallery .main .subheader {
    @apply text-15vw;
  }
}

@screen md {
  .gallery .main .subheader {
    @apply text-9vw;
  }
}

@screen xl {
  .gallery .main .subheader {
    @apply text-7vw;
  }
}

.gallery .main .carousel {
  @apply w-1/2 flex justify-center items-center;
}

.gallery .main .slide {
  @apply cursor-pointer transform transition-transform duration-500 ease-in-out;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 250px auto;
  height: 300px;
}

@screen md {
  .gallery .main .slide {
    background-position: center center;
    background-size: 450px auto;
    height: 600px;
  }
}

@screen lg {
  .gallery .main .slide {
    background-size: 400px auto;
    height: 600px;
  }
}
@screen xl {
  .gallery .main .slide {
    background-position: center top;
    background-size: 550px auto;
    height: 550px;
  }
}
.gallery .main .slide:hover {
  @apply opacity-90 scale-95;
}
.gallery .main .slide:focus {
  @apply scale-100;
}
</style>
