<template>
    <section class="py-6">
        <v-container>
            <table class="w-full">
                <tr class=" text-lg bg-[#447c9d]">
                    <th>Published on</th>
                    <th>Subject</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="notice in noticeStore.notices" :key="notice.id"  >
                    <td>{{ notice.createdAt }}</td>
                    <td>{{ notice.subject }}</td>
                    <td>{{ notice.noticeCategory }}</td>
                    <td>
                        <a href="#" download="notice.file">Download</a>
                    </td>
                </tr>
            </table>
        </v-container>
    </section>
</template>

<script setup>
import { useNoticeStore } from '~/store/notice';
const noticeStore = useNoticeStore();
await noticeStore.getNotices();

const items = noticeStore.notices;
</script>

<style scoped>
th,td{
    padding: 3px 15px;
    text-align: left;
    border: 1px solid rgb(226, 223, 223);
}
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>