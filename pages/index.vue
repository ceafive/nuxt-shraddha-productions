<template>
  <div>
    <div class="progress-bar">
      <div class="current-progress" :style="{ height: height }"></div>
    </div>
    <VideoCard
      v-for="videocard in videocards"
      :key="videocard.id"
      :mainheader="videocard.mainheader"
      :mainheader-color="videocard.mainheaderColor"
      :subheader="videocard.subheader"
      :video="videocard.video"
    >
      <template v-slot:mainheader>
        <div class="hero-mainheader" v-html="videocard.slotMainheader"></div>
      </template>
      <template v-slot:subheader
        ><div
          class="hero-subheader"
          v-html="videocard.slotSubheader"
        ></div></template
    ></VideoCard>

    <CollectionCard
      v-for="collection in collectioncards"
      :key="collection.id"
      :mainheader="collection.mainheader"
      :background-position="collection.backgroundPosition"
    />

    <InfoCard
      v-for="infocard in infocards"
      :key="infocard.id"
      :animation-name="infocard.animationName"
      :mainheader="infocard.mainheader"
      :mainheader-color="infocard.mainheaderColor"
      :subheader="infocard.subheader"
      :route-link="infocard.routeLink"
      :video="infocard.video"
      :image="infocard.image"
    />

    <ContactCard />
  </div>
</template>

<script>
import { videocards, collectioncards, infocards } from '@/data/cardsdata';

import VideoCard from '@/components/VideoCard';
import CollectionCard from '@/components/CollectionCard';
import InfoCard from '@/components/InfoCard';
import ContactCard from '@/components/ContactCard';

export default {
  components: {
    VideoCard,
    CollectionCard,
    InfoCard,
    ContactCard
  },
  data() {
    return {
      height: '0%',
      videocards,
      collectioncards,
      infocards
    };
  },
  mounted() {
    const progressBar = document.querySelector('.progress-bar');
    const style = getComputedStyle(progressBar);
    const currentDisplay = style.display;
    if (currentDisplay === 'block')
      window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollHeight = window.scrollY;
      if (currentScrollHeight < 2000)
        this.height = `${currentScrollHeight / 100}%`;
      if (currentScrollHeight > 2000)
        this.height = `${(currentScrollHeight - 100) / 100}%`;
      if (currentScrollHeight > 3000)
        this.height = `${(currentScrollHeight - 200) / 100}%`;
      if (currentScrollHeight > 4000)
        this.height = `${(currentScrollHeight - 300) / 100}%`;
      if (currentScrollHeight > 5000)
        this.height = `${(currentScrollHeight - 400) / 100}%`;
      if (currentScrollHeight > 6000)
        this.height = `${(currentScrollHeight - 500) / 100}%`;
      if (currentScrollHeight > 7000)
        this.height = `${(currentScrollHeight - 600) / 100}%`;
      if (currentScrollHeight > 8000)
        this.height = `${(currentScrollHeight - 700) / 100}%`;
      if (currentScrollHeight > 9000)
        this.height = `${(currentScrollHeight - 800) / 100}%`;
      if (currentScrollHeight > 10000)
        this.height = `${(currentScrollHeight - 430) / 100}%`;
    }
  }
};
</script>

<style scoped>
.progress-bar {
  @apply hidden;
}

@screen xl {
  .progress-bar {
    @apply block absolute top-0 left-0 h-full z-40;
  }
}
.current-progress {
  width: 4px;
  background: #fffd13;
  transition: 1s;
}
</style>
