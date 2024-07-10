<template>
    <div class="flex flex-col gap-3">
         <h1 class="text-4xl text-[#275875]">{{ profileStore.school.name }}</h1>
         <p class="text-xl text-red-500 font-sans">{{ profileStore.school.slogan }}</p>
    </div>
</template>

<script setup>
import { useProfileStore } from '~/store/profile';
const profileStore = useProfileStore();
</script>

<style lang="scss" scoped>

</style>