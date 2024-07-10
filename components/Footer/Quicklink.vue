<template>
  <div class="flex flex-col gap-1">
    <h1 class="text-xl text-[#406f8a]">Quick Links</h1>
    <div><NuxtLink :to="`/notices`">Notice</NuxtLink></div>
    <div><NuxtLink :to="`/gallery`">Photo Gallery</NuxtLink></div>
  </div>
</template>

<script setup>
import { useNoticeStore } from '~/store/notice';
const noticeStore = useNoticeStore();
</script>

<style lang="scss" scoped></style>
