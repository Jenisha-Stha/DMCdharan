<template>
  <section class="pt-2 pb-10">
    <v-container>
      <div class=" w-1/2 border-b-2 border-l-2 pl-5 pb-5">
        <h1 class="text-2xl text-[#447c9d] font-bold pb-3">
          Notice (Campus Notice)
        </h1>
        <ul class="flex flex-col gap-4">
          <li v-for="(notice, index) in noticeStore.notices" :key="index">
            <div class="text-gray-800">{{ notice.subject }}</div>
            <div class="text-gray-600">{{ notice.createdAt }}</div>
          </li>
        </ul>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { useNoticeStore } from "~/store/notice";
const noticeStore = useNoticeStore();
await noticeStore.getNotices();
</script>

<style lang="scss" scoped></style>
