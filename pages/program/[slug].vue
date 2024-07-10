<template>
    <section class="py-10">
       <v-container>
        <v-row>
            <v-col>
                <div v-html="program.content"></div>
            </v-col>
            <v-col>
                <v-img :src="program.image" :lazy-src="program.image"></v-img>
            </v-col>
        </v-row>
       </v-container>
    </section>
</template>

<script setup>
import { useProgramStore } from '~/store/programs';
const programStore = useProgramStore();
const route = useRoute();

const program = programStore.programs.find((p) => p.slug == route.params.slug);
</script>

<style lang="scss" scoped>

</style>