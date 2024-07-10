<template>
  <div class="flex flex-col gap-1">
    <h1 class="text-xl text-[#406f8a]">Contact us</h1>
    <div>{{ profileStore.school.name }}</div>
    <div>
      <v-icon class="" icon="mdi-map-marker"></v-icon>
      {{ profileStore.school.street }}
    </div>
    <div>
      <v-icon class="" icon="mdi-email"></v-icon>
      {{ profileStore.school.email }}
    </div>
    <div>
      <v-icon icon="mdi-email"></v-icon>
      {{ profileStore.school.contactOne }}
    </div>
     <div>
        <h4 class="font-bold">Office Hour</h4>
    6:30 AM - 5:30 PM
     </div>
  </div>
</template>

<script setup>
import { useProfileStore } from "~/store/profile";
const profileStore = useProfileStore();

</script>

<style lang="scss" scoped></style>
