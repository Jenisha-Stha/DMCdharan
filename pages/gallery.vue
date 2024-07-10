<template>
  <section class="py-20">
   <v-container>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="gallery in galleryStore.galleries" :key="gallery.id" class="border-2 border-gray-100 p-6 hover:shadow-lg cursor-pointer"
      @click="openGallery(gallery.url)">
      <img :src="gallery.featuredImage" alt="gallery.title" width="500">
      <p> {{ gallery.title }}</p>
     </div>
     </div>
   </v-container>
  </section>
</template>

<script setup>
import { useGalleryStore } from '~/store/galleries';
const galleryStore = useGalleryStore();

function openGallery(url) {
  window.open(url, '_blank');
}
</script>

<style lang="scss" scoped>

</style>