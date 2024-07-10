<template>
  <section class="py-7">
    <v-container>
      <v-row>
        <!-- get in touch -->
        <v-col>
          <h1 class="text-4xl font-medium text-[#447c9d] mb-5 ">Get in Touch</h1>
          <address class="border-2 border-gray-100 flex flex-col gap-3 p-3 ">
            <h1 class="border-b-2">NAAST/Dharan Multiple Campus</h1>
            <div class="border-b-2"> 
              <v-icon icon="mdi-map-marker"></v-icon>
              {{ profileStore.school.street }}
            </div>
            <div class="border-b-2">
              <v-icon icon="mdi-phone"></v-icon>
              {{ profileStore.school.contactOne }}
            </div>
            <div>
              <v-icon icon="mdi-email"></v-icon>
              {{ profileStore.school.email }}
            </div>
            <div v-html="profileStore.school.map"></div>
          </address>
        </v-col>

        <!-- form -->
        <v-col>
          <h1 class="text-4xl text-[#447c9d] text-center mb-2">Message</h1>
          <form action="/action_page.php">
           <div class="flex flex-col gap-3">
            <div>
                <label for="fullname">Full Name</label>
                <input class="border w-full h-10" type="text" placeholder="Enter your name">
            </div>
            <div>
                <label for="fullname">Email</label>
                <input class="border h-10 w-full" type="text" placeholder="Enter your email">
            </div>
            <div>
                <label for="fullname">Subject</label>
                <input class="border h-10 w-full" type="text" placeholder="subject">
            </div>
            <div>
                <label for="fullname">Message</label>
                <input class="border w-full p-5 h-28" type="text" >
            </div>
            <div class="flex justify-center">
                <button class="bg-[#447c9d] text-white font-bold rounded-md">Submit</button>
            </div>
           </div>
           
          </form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { useProfileStore } from "~/store/profile";
const profileStore = useProfileStore();
</script>

<style scoped>
button{
    padding: 5px 10px;
}
</style>
