<!-- <template>
  <section>
    <v-container>
      <h1>members profile</h1>
      <h2>{{ members.data.title }}</h2>
     <div v-for="member in members.data" :key="member.id">
        <v-img :src="member.members.photo" :lazy-src="member.members.photo"></v-img>
     </div>
    </v-container>
  </section>
</template>

<script setup>
const {data:members} = await useFetch("https://dmcdharan.com/api/members");
</script> -->

<template>
  <section class="py-20 bg-[#F8F9FA]">
    <v-container>
      <div v-for="teacher in teacher.data" :key="teacher.id">
        <div v-if="teacher.id % 2 !== 0">
          <h1 class="text-center text-5xl font-semibold">
            {{ teacher.title }}
          </h1>
          <div class="grid grid-cols-4 gap-7 py-14 items-center">
            <div
              v-for="members in teacher.members"
              :key="members.id"
              class="w-52"
            >
              <div>
                <v-img :src="members.photo" :lazy-src="members.photo"></v-img>
              </div>
              <div class="text-center font-semibold capitalize">
                {{ members.name }}
              </div>

              <div class="py-4">
                <div class="px-5 font-semibold text-blue-800">
                  {{ members.title }}
                </div>
                <div>
                  <v-icon icon="mdi-account-box"></v-icon
                  >{{ members.designation }}
                </div>
                <div>
                  <v-icon icon="mdi-file-phone"></v-icon>{{ members.phone }}
                </div>

                <div><v-icon icon="mdi-email"></v-icon>{{ members.email }}</div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center text-5xl font-semibold text-blue-800">
          <h1>{{ teacher.title }}</h1>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const { data: teacher } = await useFetch("https://dmcdharan.com/api/members");
</script>

<style lang="scss" scoped></style>
