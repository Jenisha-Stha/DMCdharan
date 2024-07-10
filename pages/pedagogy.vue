<template>
    <section class="py-10">
        <v-container>
            <v-row>
                <v-col>
                    <h1 class="text-4xl mb-3 font-semibold text-[#447c9d]">{{ pedagogy.data.title }}</h1>
                    <div v-html="pedagogy.data.description" class="text-lg flex flex-col gap-3">
                    </div>
                    <v-img :src="pedagogy.data.photo" :lazy-src="pedagogy.data.photo"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup>
const {data:pedagogy} = await useFetch("https://dmcdharan.com/api/pedagogy");
</script>

<style lang="scss" scoped>

</style>