<template>
  <section class="py-10">
    <h1 class="text-4xl text-[#447c9d] text-center font-bold pb-5">
      Photo Gallery
    </h1>
    <v-row>
      <v-col
        v-for="(gallery, index) in galleryStore.galleries"
        :key="index"
        class="child-flex cursor-pointer"
        cols="4"
        @click="openGallery(gallery.url)"
      >
        <v-img
          :lazy-src="gallery.featuredImage"
          :src="gallery.featuredImage"
          aspect-ratio="1"
          class="bg-grey-lighten-2"
          cover
        >
          <template v-slot:placeholder>
            <v-row align="center" class="fill-height ma-0" justify="center">
              <v-progress-circular
                color="grey-lighten-5"
                indeterminate
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <p>{{ gallery.title }}</p>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import { useGalleryStore } from "~/store/galleries";
const galleryStore = useGalleryStore();
await galleryStore.getGallery();

function openGallery(url) {
  window.open(url, "_blank");
}
</script>
