<template>
     <section class="py-10">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="text-4xl font-semibold text-[#447c9d] mb-4">{{ faq.data.title }}</h1>
            <div v-html="faq.data.description" class="text-lg flex flex-col gap-4">
            </div>
          </v-col>
        </v-row>
      </v-container>
     </section>
</template>

<script setup>
const {data:faq} = await useFetch("https://dmcdharan.com/api/faq");
</script>

<style lang="scss" scoped>

</style>