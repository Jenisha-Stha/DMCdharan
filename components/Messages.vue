<template>
    <section class="py-10">
          <v-container>
            <v-row>
                <v-col v-for="(message,index) in messageStore.messages" :key="index" class="flex flex-col gap-4">
                    <div>
                       <img :src="message.photo" alt="message.photo" width="200" height="200">
                    </div>
                    <div class="flex flex-col gap-4">
                        <h1 class="text-xl">{{ message.name }}</h1>
                        <div v-html="message.message"></div>
                        <v-btn class="w-1/4">Read More</v-btn>
                    </div>
                </v-col>
            </v-row>
          </v-container>
    </section>
</template>

<script setup>
import { useMessageStore } from '~/store/message';
const messageStore = useMessageStore();
await messageStore.getMessages();

</script>

<style lang="scss" scoped>

</style>