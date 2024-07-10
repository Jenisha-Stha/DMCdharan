<template>
    
    <v-dialog v-model="noticeStore.dialog" width="400">
        <v-card>
            <v-img :src="noticeStore.notice.file">

              <v-card-actions>
              <v-btn icon="mdi-close" @click="noticeStore.close()"></v-btn>
            </v-card-actions>
            </v-img>
          
        </v-card>
    </v-dialog>

    <div>
      <!-- Carousel -->
       <Carousel/>
       <!-- message section -->
        <Messages/>
        <!-- notice -->
         <Notice/>
         <!-- Programs -->
          <Program/>
         <!-- Gallery -->
         <v-container>
          <Gallery/>
         </v-container>
         <!-- Members profile -->
          <Membersprofile/>

    </div>
</template>d

<script setup>
import { useNoticeStore } from "~/store/notice";
const noticeStore = useNoticeStore();
// await noticeStore.getLatestNotice();
</script>

<style lang="scss" scoped>

</style>