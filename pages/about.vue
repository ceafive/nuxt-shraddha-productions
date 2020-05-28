<template>
  <div class="about">
    <div class="section1">
      <div class="hero">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out-cubic"
          data-aos-duration="1000"
          class="mainheader"
        >
          <p>
            WE ARE SHRADDHA<br />
            WE SPEAK THROUGH FRAMES
          </p>
        </div>
      </div>

      <div class="subsection">
        <div class="mainheader">
          <p>Shraddha Productions is a collaborative network of creators.</p>
          <br />
          <p>
            Born in 2014, we are a one-stop solution for all brands- with
            versatile offerings.
          </p>
          <br />
          <p>
            We find passion in capturing fleeting moments and assuring the
            sustenance of memories.
          </p>
          <br />
        </div>

        <div class="subheader">
          <p
            data-aos="fade-up"
            data-aos-easing="ease-in-out-cubic"
            data-aos-duration="1000"
          >
            We are based in<br />
            Surat &amp; we assist <br />
            brands all around <br />
            the world! <br />
          </p>
        </div>
      </div>
    </div>

    <div class="section2">
      <div class="image">
        <img
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          src="@/assets/images/around-the-world.jpg"
          alt="building"
        />
      </div>
      <div class="svg">
        <img src="@/assets/svgs/camera.svg" alt="camera" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out-cubic"
        data-aos-duration="1000"
        class="mainheader"
      >
        <p>WHAT</p>
        <p>DRIVES US?</p>
        <p class="text-white text-9vw md:text-7vw">YOUR BRAND, YOUR STORY</p>
        <p class="text-9vw md:text-7vw">&amp;</p>
        <p class="text-white text-9vw md:text-7vw">OUR PASSION</p>
      </div>

      <div class="subheader">
        <p>
          Shraddha Productions is an all inclusive production agency, providing
          you with a holistic visual experience.
        </p>
        <br />
        <p>
          For us very thread in your work matters and every stitch of your work
          counts.
        </p>
        <br />
        <p>
          Our foremost aim is to ensure visuals of the highest quality, in turn
          insuring a profitable business.
        </p>
        <br />
      </div>
    </div>

    <ContactCard />
  </div>
</template>

<script>
import ContactCard from '@/components/ContactCard';
export default {
  components: { ContactCard }
};
</script>

<style scoped>
.about {
  @apply text-center;
}
.section1 {
  background-image: url('../assets/images/about.jpg');
  background-position: 57%;
  background-size: cover;
}
.section1 .hero,
.section1 .subsection {
  @apply h-screen;
}

.section1 .hero .mainheader {
  @apply font-mainheader flex flex-col justify-center items-center text-11vw text-appYellow leading-none h-full w-full;
}

@screen md {
  .section1 .hero .mainheader {
    @apply text-10vw;
  }
}

.section1 .subsection {
  @apply flex flex-col justify-around items-center text-xs w-full h-full -mt-10;
}

@screen md {
  .section1 .subsection {
    @apply text-xl -mt-20;
  }
}

@screen xl {
  .section1 .subsection {
    @apply text-base -mt-20;
  }
}

.section1 .subsection .mainheader {
  @apply w-2/3;
}

@screen md {
  .section1 .subsection .mainheader {
    @apply w-1/2;
  }
}

@screen xl {
  .section1 .subsection .mainheader {
    @apply w-1/4;
  }
}

.section1 .subsection .subheader {
  @apply font-mainheader text-14vw leading-none mt-6 z-10;
}

@screen md {
  .section1 .subsection .subheader {
    @apply text-10vw mt-24;
  }
}

.section2 {
  @apply flex flex-col justify-between bg-appGrey items-center w-full;
}

.section2 .image {
  @apply w-5/6 inline opacity-95 -mt-20 z-0;
}

@screen md {
  .section2 .image {
    @apply w-11/12 opacity-80 -mt-40;
  }
}

@screen xl {
  .section2 .image {
    @apply w-3/4 -mt-64;
  }
}

.section2 .svg {
  @apply my-6 h-6 w-6;
}

@screen lg {
  .section2 .svg {
    @apply my-24 h-12 w-12;
  }
}

@screen xl {
  .section2 .svg {
    @apply my-32;
  }
}

.section2 .mainheader {
  @apply font-mainheader flex flex-col justify-center items-center text-15vw text-appYellow leading-none h-full w-full;
}

@screen md {
  .section2 .mainheader {
    @apply text-10vw;
  }
}

.section2 .subheader {
  @apply w-2/3 text-xs text-appTextGray my-5;
}

@screen md {
  .section2 .subheader {
    @apply w-1/2 text-xl my-5;
  }
}

@screen xl {
  .section2 .subheader {
    @apply w-1/3 my-10;
  }
}
</style>
