<template>
    <div class="items-center flex gap-2">
         <a :href="profileStore.school.facebook"><v-icon class="text-white" icon="mdi-facebook"></v-icon></a>
         <a :href="profileStore.school.youtube"><v-icon class="text-white" icon="mdi-youtube"></v-icon></a>
         <a :href="profileStore.school.linkedin"><v-icon class="text-white" icon="mdi-linkedin"></v-icon></a>
    </div>
</template>

<script setup>
import { useProfileStore } from '~/store/profile';
const profileStore = useProfileStore();
</script>

<style lang="scss" scoped>

</style>