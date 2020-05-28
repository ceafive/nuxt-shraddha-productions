<template>
  <div class="press">
    <div
      class="header"
      :style="{
        backgroundImage: `url('${require(`@/assets/images/press.jpg`)}')`
      }"
    ></div>
    <div class="main container">
      <div
        class="image"
        :style="{
          backgroundImage: `url('${require(`@/assets/images/press.jpg`)}')`
        }"
      ></div>
      <div v-for="article in articles" :key="article.id" class="content">
        <h1 v-html="article.title"></h1>
        <p v-html="article.content"></p>
        <button
          v-show="!article.isReadMore"
          @click="triggerReadMore(article.id)"
        >
          Read More
        </button>
      </div>
    </div>
    <div
      class="footer"
      :style="{
        backgroundImage: `url('${require(`@/assets/images/press.jpg`)}')`
      }"
    ></div>
  </div>
</template>

<script>
import { pressArticles } from '../plugins/articles';
export default {
  data() {
    return {
      pressArticles,
      maxChars: 750
    };
  },
  computed: {
    articles() {
      const returned = [];
      for (const article of this.pressArticles) {
        let content = article.content;
        if (!article.isReadMore && article.content.length > this.maxChars) {
          content = content.substring(0, this.maxChars) + '...';
          returned.push({ ...article, content });
        } else {
          returned.push(article);
        }
      }
      return returned;
    }
  },
  methods: {
    triggerReadMore(articleId) {
      const newArray = [];
      for (const article of pressArticles) {
        if (article.id === articleId)
          newArray.push({ ...article, isReadMore: true });
        else newArray.push(article);
      }
      this.pressArticles = newArray;
    }
  },
  head() {
    return {
      title: 'Press & Media - Shraddha Productions'
    };
  }
};
</script>

<style scoped>
.press {
  @apply flex flex-col justify-between bg-white text-black;
}

.press .header,
.press .main .image,
.press .footer {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.press .header {
  height: 150px;
}

@screen md {
  .press .header {
    height: 250px;
  }
}

@screen xl {
  .press .header {
    height: 250px;
  }
}

.press .main {
  @apply py-6 px-3;
}

@screen md {
  .press .main {
    @apply p-10;
  }
}

.press .main .image {
  @apply w-3/5;
  height: 100px;
}

@screen md {
  .press .main .image {
    height: 150px;
  }
}

@screen lg {
  .press .main .image {
    height: 250px;
  }
}

@screen xl {
  .press .main .image {
    @apply w-2/5;
  }
}

.press .main .content {
  @apply w-full text-sm;
}

@screen lg {
  .press .main .content {
    @apply text-2xl;
  }
}

.press .main .content h1 {
  @apply font-body py-3;
}

.press .main .content p {
  @apply normal-case text-justify tracking-tighter;
}

.press .main .content button {
  @apply flex justify-center  bg-black uppercase text-xs text-white px-2 py-1 my-1 mx-auto;
}

@screen lg {
  .press .main .content button {
    @apply text-xl;
  }
}

.press .main .content button:focus {
  @apply outline-none;
}

.press .footer {
  height: 150px;
}

@screen md {
  .press .footer {
    height: 250px;
  }
}

@screen xl {
  .press .footer {
    height: 250px;
  }
}
</style>
