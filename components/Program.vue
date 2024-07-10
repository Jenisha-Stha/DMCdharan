<template>
    <section class="py-20 bg-gray-100">
        <h1 class="text-center text-4xl text-[#447c9d] font-bold">Our Programs</h1>
         <v-container>
            <div class="grid grid-cols-4 text-center">
                <div v-for="program in programStore.programs" :key="program.id">
                <NuxtLink :to="`/program/${program.slug}`">
                    <v-card :title="program.title" width="250" class="hover:shadow-xl" ></v-card>
                </NuxtLink>
            </div>
            </div>
         </v-container>
    </section>
</template>

<script setup>

import { useProgramStore } from '~/store/programs';
const programStore = useProgramStore();

await programStore.getPrograms();
</script>

<style lang="scss" scoped>

</style>
