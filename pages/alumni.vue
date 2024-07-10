<template>
  <section class="py-10">
    <v-container>
      <h1 class="text-3xl font-semibold text-[#447c9d] mb-2">{{ alumni.data.title }}</h1>
      <div v-html="alumni.data.description" class="text-xl"></div>
    </v-container>
  </section>

  <section>
    <v-container>
      <v-row v-for="batch in batches.data" :key="batch.id" class="pb-8">
        <v-col cols="12">
          <h1 class="text-3xl text-[#447c9d] font-bold">{{ batch.title }}</h1>
          <v-row class="pt-6">
            <v-col v-for="student in batch.students" :key="student.id" 
            cols="12" :md="12" :lg="6" >
             <div class="flex gap-3 border-2 border-gray-200 h-64">
                <v-img :src="student.photo" :lazy-src="student.photo" width="200" height="200"></v-img>
               <div>
                <h1 >{{ student.name }}</h1>
                <div v-html="student.description"></div>
               </div>
             </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const { data: alumni } = await useFetch("https://dmcdharan.com/api/alumni");
const { data: batches } = await useFetch("https://dmcdharan.com/api/batches");
</script>

<style lang="scss" scoped></style>
