<template>
  <v-carousel height="600" show-arrows="hover" cycle hide-delimiter-background>
    <v-carousel-item v-for="(slide, i) in carouselStore.slides" :key="i">
      <v-sheet height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <div class="flex-grow">
            <v-img
            :src="slide.logo"
            :lazy-src="slide.logo"
            class="w-full"
          ></v-img>
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script setup>
import { useCarouselStore } from "~/store/carousel";
const carouselStore = useCarouselStore();
await carouselStore.getSlides();
</script>
