<template>
  <div
    class="contact-card"
    :style="{
      backgroundImage: `url('${require(`@/assets/images/contact.jpg`)}')`
    }"
  >
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out-cubic"
      data-aos-duration="1500"
      class="main"
    >
      <div class="mainheader">
        <p v-html="mainheader"></p>
      </div>

      <div class="subheader">
        <p class="text" v-html="subheader"></p>
        <p class="link">
          <a href="mailto:shraddhaproductions@gmail.com"
            >shraddhaproductions@gmail.com</a
          >
        </p>
      </div>

      <Socials v-if="showSocials" />

      <div v-if="showSocials" class="footer">
        <p>
          ALL RIGHTS RESERVED&copy;SHRADDHA/2020
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Socials from './Socials';
export default {
  components: { Socials },
  props: {
    mainheader: {
      type: String,
      default: `TO BRING IDEAS TO LIFE, <br />
          COME SAY HI`
    },
    subheader: {
      type: String,
      default: `For General Queries, Collaborations <br />
            Press Releases or just to share that script <br />
            you’ve been working on Drop us an email`
    },
    showSocials: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.contact-card {
  @apply h-screen overflow-hidden;
  background-size: cover;
  background-position: 45%;
}

@screen xl {
  .contact-card {
    background-position: center;
  }
}
.contact-card .main {
  @apply flex flex-col justify-between items-center text-center w-full h-full;
}

.contact-card .main .mainheader {
  @apply font-mainheader flex flex-col items-center text-12vw text-appYellow leading-none mt-56;
}

@screen md {
  .contact-card .main .mainheader {
    @apply mt-72;
  }
}
@screen lg {
  .contact-card .main .mainheader {
    @apply mt-80;
  }
}
@screen xl {
  .contact-card .main .mainheader {
    @apply text-10vw mt-48;
  }
}

.contact-card .main .subheader .text {
  @apply text-xxs;
}

@screen md {
  .contact-card .main .subheader .text {
    @apply text-xl;
  }
}

@screen xl {
  .contact-card .main .subheader .text {
    @apply text-xl;
  }
}

.contact-card .main .subheader .link {
  @apply text-xs text-appYellow my-5 cursor-pointer;
}

@screen md {
  .contact-card .main .subheader .link {
    @apply text-xl;
  }
}

@screen xl {
  .contact-card .main .subheader .link {
    @apply text-2xl;
  }
}

.footer {
  @apply font-body text-xxs text-gray-500;
}

@screen xl {
  .footer {
    @apply text-xs;
  }
}
</style>
