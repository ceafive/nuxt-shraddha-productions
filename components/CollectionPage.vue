<template>
  <div class="collection-page">
    <div class="hero" :style="heroImage">
      <p class="mainheader">
        {{ mainheader }}
      </p>
    </div>

    <div class="subtext">
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
        v-html="subtext"
      ></p>
    </div>

    <div class="slider" :style="sliderBackground">
      <carousel
        class="carousel"
        :easing="'ease-in-out'"
        :loop="true"
        :speed="1000"
        :per-page="1"
        :pagination-enabled="false"
        :pagination-active-color="'#fffd13'"
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
        @page-change="handlePageChange"
      >
        <slide
          v-for="(img, index) in numberOfImages[currentCollection]"
          :key="currentCollection[index]"
          class="slide"
        >
          <img
            v-if="currentCollection === 'diva'"
            class="mx-auto"
            :src="require(`../assets/images/diva/diva-${index + 1}-fp.jpg`)"
            alt=""
          />
        </slide>
      </carousel>
    </div>

    <div class="tiles">
      <div class="mainheader">
        <p>
          More Collections
        </p>
      </div>
      <carousel
        data-aos="slide-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
        :pagination-enabled="false"
        :per-page-custom="[
          [320, 2],
          [768, 2]
        ]"
        class="carousel"
      >
        <slide
          v-for="collection in filteredCollections"
          :key="collection.mainheader"
          :data-name="collection.mainheader"
          class="slide"
          @slideclick="handleSlideClick"
        >
          <p class="title">
            {{ collection.mainheader }}
          </p>
          <img
            class="image"
            :src="require(`../assets/images/${collection.mainheader}.jpg`)"
            :alt="collection.mainheader"
          />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { collectioncards } from '../data/cardsdata';
export default {
  props: {
    mainheader: {
      type: String
    },
    subtext: {
      type: String
    }
  },
  data() {
    return {
      currentIndex: 0,
      currentCollection: this.$route.params.name,
      numberOfImages: {
        bandhini: 5,
        baroque: 5,
        diva: 5,
        grace: 6,
        navika: 6
      }
    };
  },
  computed: {
    heroImage() {
      const collection = collectioncards.find(
        (collection) => collection.mainheader === this.currentCollection
      );
      return {
        backgroundImage: `url('${require(`@/assets/images/${collection.mainheader}.jpg`)}')`,
        backgroundPosition: collection.backgroundPosition
      };
    },
    sliderBackground() {
      return {
        backgroundImage: `url(${require(`@/assets/images/${
          this.currentCollection
        }/${this.currentCollection}-${this.currentIndex + 1}.jpg`)})`
      };
    },
    filteredCollections() {
      const collections = collectioncards.filter(
        (collection) => collection.mainheader !== this.currentCollection
      );
      return collections;
    }
  },
  methods: {
    handlePageChange(index) {
      this.currentIndex = index;
    },
    handleSlideClick(dataset) {
      const paramName = dataset.name;
      this.$router.push({ name: 'collection', params: { name: paramName } });
    }
  }
};
</script>

<style scoped>
.collection-page {
  @apply cursor-default;
}

.collection-page .hero {
  @apply flex flex-col justify-center items-center h-screen;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

.collection-page .hero .mainheader {
  @apply font-mainheader text-appYellow text-15vw;
}

@screen md {
  .collection-page .hero .mainheader {
    @apply text-10vw;
  }
}

.collection-page .subtext {
  @apply w-full bg-appGrey pt-12 text-sm text-appTextGray text-center leading-tight;
}

@screen md {
  .collection-page .subtext {
    @apply py-12 text-2xl;
  }
}

.collection-page .slider {
  @apply relative flex w-full justify-center items-center bg-appGrey h-50vh px-6 transition-all duration-1000 ease-out;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 350px;
}

@screen md {
  .collection-page .slider {
    background-size: cover;
  }
}

@screen xl {
  .collection-page .slider {
    @apply h-95vh;
  }
}

.collection-page .slider .carousel {
  @apply flex w-9/12 h-full justify-center p-6;
}

@screen md {
  .collection-page .slider .carousel {
    @apply flex w-11/12 h-full justify-center p-6;
  }
}

.collection-page .tiles {
  @apply flex flex-col justify-center items-center bg-appDarkGrey h-screen;
}

.collection-page .tiles .mainheader {
  @apply font-mainheader text-12vw;
}

@screen md {
  .collection-page .tiles .mainheader {
    @apply text-10vw;
  }
}

.collection-page .tiles .carousel {
  @apply w-full;
}

@screen md {
  .collection-page .tiles .carousel {
    @apply ml-32;
  }
}

@screen xl {
  .collection-page .tiles .carousel {
    @apply ml-64;
  }
}

.collection-page .tiles .carousel .slide {
  @apply flex flex-col transform transition-transform duration-1000 ease-in-out cursor-pointer px-1;
}

.collection-page .tiles .carousel .slide:hover {
  @apply scale-95;
}

.collection-page .tiles .carousel .slide .title {
  @apply flex items-end bg-appLightGray text-black font-body tracking-wide text-sm pt-32;
}

@screen md {
  .collection-page .tiles .carousel .slide .title {
    @apply text-2xl pt-64;
  }
}

@screen lg {
  .collection-page .tiles .carousel .slide .image {
    @apply h-80;
  }
}
</style>
