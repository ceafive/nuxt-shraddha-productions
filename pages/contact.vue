<template>
  <div class="contact">
    <ContactCard
      :mainheader="
        `Got something to say?<br />
            We’re all ears`
      "
      :subheader="
        ` For general enquires, <br />
              working with us and collaboration details, <br />
              or to open some boxes of ideas, <br />
              you can reach out to us at`
      "
      :showSocials="false"
    />

    <div class="section2">
      <div class="main">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out-cubic"
          data-aos-duration="1000"
          class="mainheader"
        >
          <p>INDIA</p>
          <p>&amp; WORLDWIDE</p>
          <p>ENQUIRIES</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-easing="ease-in-out-cubic"
          data-aos-duration="1000"
          class="subheader"
        >
          <p>
            If you have a potential<br />
            project to discuss<br />
            Please hit the number below<br />
            and get in touch<br />
            with our man behind the lens
          </p>
        </div>
      </div>
    </div>

    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out-cubic"
      data-aos-duration="1000"
      class="section3"
    >
      <div class="main">
        <img
          class="image"
          src="https://images.unsplash.com/photo-1533831930057-6aa5b6988581?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=881&q=80"
          alt="Ankit Jain"
        />
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="1000"
          class="mainheader"
        >
          <p>
            ANKIT<br />
            JAIN
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-easing="ease-in-out-cubic"
          data-aos-duration="1000"
          class="subheader"
        >
          <p class="text">+91 xxxxx xxxxx</p>
          <p class="subtext">
            Xxxx<br />
            xxxx<br />
            Surat - India
          </p>
          <img class="svg" src="../assets/svgs/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </div>

    <div class="section4">
      <div class="main">
        <h1
          v-for="item in links"
          :key="item.name"
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-easing="ease-in-out-cubic"
          data-aos-duration="1000"
          class="mainheader"
        >
          <a :href="item.link" target="_blank">{{ item.name }}</a>
          <p class="link">@shraddhaproductions</p>
        </h1>
      </div>
    </div>

    <div class="footer">
      <p>
        ALL RIGHTS RESERVED&copy;SHRADDHA/2020
      </p>
    </div>
  </div>
</template>

<script>
import ContactCard from '../components/ContactCard';
export default {
  components: { ContactCard },
  data() {
    return {
      links: [
        {
          name: 'INSTAGRAM',
          link: 'https://www.instagram.com/shraddhaproductions/'
        },
        {
          name: 'BEHANCE',
          link: 'https://www.behance.net/shraddhapr7cc7/moodboards'
        }
      ]
    };
  }
};
</script>

<style scoped>
.contact {
  @apply bg-appDarkGrey text-center overflow-hidden;
}
.section2 {
  @apply pt-12 pb-6;
}

@screen lg {
  .section2 {
    @apply pt-24;
  }
}
.section2 .main,
.section3 .main,
.section4 .main {
  @apply flex flex-col justify-between items-center font-body w-full;
}

.section2 .main .mainheader {
  @apply text-transparent text-3xl leading-none;
  -webkit-text-stroke: 1px rgba(219, 218, 212, 0.8);
}

@screen lg {
  .section2 .main .mainheader,
  .section3 .main .mainheader {
    @apply text-6xl;
  }
}

.section2 .main .subheader {
  @apply text-xs text-appTextMedGray my-10;
}

@screen lg {
  .section2 .main .subheader {
    @apply text-base;
  }
}

.section3 .main .image {
  @apply inline h-64;
}

.section3 .main .mainheader {
  @apply text-transparent text-5xl leading-none -mt-10;
  -webkit-text-stroke: 1px rgba(219, 218, 212, 0.8);
}

.section3 .main .subheader {
  @apply text-sm text-appTextMedGray my-8;
}

@screen lg {
  .section3 .main .subheader {
    @apply text-3xl my-10;
  }
}

.section3 .main .subheader .subtext {
  @apply font-mainheader text-3xl leading-none my-5;
}

@screen lg {
  .section3 .main .subheader .subtext {
    @apply text-6xl;
  }
}

.section3 .main .subheader .svg {
  @apply inline h-10;
}

@screen lg {
  .section3 .main .subheader .svg {
    @apply h-20;
  }
}

.section4 .main .mainheader {
  @apply text-xs my-4;
}

@screen lg {
  .section4 .main .mainheader {
    @apply text-lg;
  }
}

.section4 .main .mainheader a:hover {
  @apply text-appYellow cursor-pointer;
}

.section4 .main .link {
  @apply text-transparent text-xs leading-none;
  -webkit-text-stroke: 0.5px rgba(219, 218, 212, 0.8);
}
@screen lg {
  .section4 .main .link {
    @apply text-4xl;
  }
}

.footer p {
  @apply text-xxs text-gray-500;
}

@screen lg {
  .footer p {
    @apply text-xs;
  }
}
</style>
