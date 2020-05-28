<template>
  <div class="galleries">
    <div class="main">
      <div>
        <h1 class="mainheader">Galleries</h1>
        <h2 class="subheader">
          Browse our collections
        </h2>
      </div>
    </div>

    <div class="slider">
      <h1 class="title">Hover to pause | Click to view &#10230;</h1>
      <carousel
        :pagination-enabled="false"
        :easing="'ease-in-out'"
        :loop="true"
        :speed="1000"
        :autoplay="true"
        :per-page-custom="[
          [320, 1],
          [1280, 3]
        ]"
        :navigation-enabled="true"
        :navigation-prev-label="
          `<svg class='stroke-current text-white hover:text-appYellow h-8 w-8 sm:h-12 sm:w-12 block xl:hidden' xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
          <title>ionicons-v5-a</title>
          <polyline points='328 112 184 256 328 400' style='fill:transparent;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px'/>
          </svg>`
        "
        :navigation-next-label="
          `<svg class='stroke-current text-white hover:text-appYellow h-8 w-8 sm:h-12 sm:w-12 block xl:hidden' xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
          <title>ionicons-v5-a</title>
          <polyline points='184 112 328 256 184 400' style='fill:transparent;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px'/>
          </svg>`
        "
        class="carousel"
      >
        <slide
          v-for="imageTitle in imageTitles"
          :key="imageTitle.name"
          :data-name="imageTitle.name"
          class="slide"
          :style="{
            backgroundImage: `url('${require(`../../assets/images/galleries/${imageTitle.name}/${imageTitle.name}-1.jpg`)}')`
          }"
          @slideclick="handleSlideClick"
        >
          <p class="inner-text">{{ imageTitle.name }}</p>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageTitles: [
        { name: 'aza' },
        { name: 'coral' },
        { name: 'istella' },
        { name: 'leona' },
        { name: 'melange' },
        { name: 'navika' },
        { name: 'nazia' },
        { name: 'niharika' },
        { name: 'nitra' },
        { name: 'nizam' }
      ]
    };
  },
  methods: {
    handleSlideClick(dataset) {
      const clicked = dataset.name;
      this.$router.push({ name: 'gallery', params: { name: clicked } });
    }
  },
  head() {
    return {
      title: 'Galleries',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'Galleries page listing images of all collectinos and models in a carousel view'
        }
      ]
    };
  }
};
</script>

<style scoped>
.galleries {
  @apply flex flex-col justify-center items-center bg-black overflow-hidden h-screen;
  background-image: url('../../assets/images/galleries.jpeg');
  background-position: 50%;
  background-size: cover;
}

@screen sm {
  .galleries {
    @apply justify-between;
  }
}

@screen md {
  .galleries {
    @apply justify-center;
  }
}

@screen xl {
  .galleries {
    @apply justify-between items-start;
  }
}

.galleries .main {
  @apply flex text-center leading-none mt-20 pl-2;
}

@screen xl {
  .galleries .main {
    @apply text-left mt-40 pl-5;
  }
}

.galleries .main .mainheader {
  @apply font-mainheader text-15vw;
}

@screen sm {
  .galleries .main .mainheader {
    @apply text-10vw;
  }
}

@screen xl {
  .galleries .main .mainheader {
    @apply text-10vw;
  }
}

.galleries .main .subheader {
  @apply font-body text-xxs text-appYellow leading-none;
}

@screen md {
  .galleries .main .subheader {
    @apply text-sm;
  }
}

@screen xl {
  .galleries .main .subheader {
    @apply text-base pl-5;
  }
}

.galleries .slider {
  @apply flex justify-center items-center w-full p-5;
}

@screen xl {
  .galleries .slider {
    @apply justify-between;
  }
}

.galleries .slider .title {
  @apply hidden;
}

@screen xl {
  .galleries .slider .title {
    @apply w-1/3 flex justify-center items-center font-body text-sm;
  }
}

.galleries .slider .carousel {
  @apply w-2/3 flex justify-between items-center;
}

@screen xl {
  .galleries .slider .carousel {
    @apply w-2/3;
  }
}

.galleries .slider .slide {
  @apply relative text-center w-full;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 400px auto;
  height: 400px;
}

@screen md {
  .galleries .slider .slide {
    @apply bg-cover cursor-pointer;
    height: 500px;
  }
}

@screen xl {
  .galleries .slider .slide {
    @apply mr-1;
  }
}

.galleries .slider .slide:hover {
  @apply opacity-80;
}

.galleries .slider .slide:hover .inner-text {
  @apply text-appYellow opacity-100;
}

.galleries .slider .slide .inner-text {
  @apply absolute font-mainheader text-4xl leading-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
}

@screen md {
  .galleries .slider .slide .inner-text {
    @apply text-7vw;
  }
}

@screen xl {
  .galleries .slider .slide .inner-text {
    @apply text-6xl;
  }
}
</style>
