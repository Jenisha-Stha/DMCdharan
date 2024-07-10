<template>
    <div>
        <h1 class="text-2xl text-[#406f8a]">Location</h1>
        <div class="py-3" v-html="profileStore.school.map"></div>
    </div>
</template>

<script setup>
import { useProfileStore } from "~/store/profile";
const profileStore = useProfileStore();
</script>

<style lang="scss" scoped>

</style>