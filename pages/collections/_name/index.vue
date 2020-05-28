<template>
  <CollectionPage
    :key="collection.id"
    :mainheader="collection.mainheader"
    :subtext="collection.subtext"
  />
</template>

<script>
import CollectionPage from '@/components/CollectionPage';
import { collectioncards } from '@/plugins/cardsdata';

export default {
  components: { CollectionPage },
  computed: {
    collection() {
      const paramName = this.$route.params.name;
      const collection = collectioncards.find(
        (collection) => collection.mainheader === paramName
      );
      return collection;
    }
  }
};
</script>
