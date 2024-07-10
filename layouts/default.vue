<template>
  <NuxtLoadingIndicator />

  <div>
    <header>
      <Topbar />
      <!-- Navbar -->
      <Banner />
      <v-container>
        <Navbar />
      </v-container>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <Footer />
      <Bottombar />
    </footer>
  </div>
</template>

<script setup>
import { useNoticeStore } from "~/store/notice";
const noticeStore = useNoticeStore();
import { useMenuStore } from "~/store/menus";
const menuStore = useMenuStore();
import { onMounted } from "vue";
import { useFlowbite } from "~/composables/useFlowbite";
// import { initFlowbite } from 'flowbite'
import { useProfileStore } from "~/store/profile";
const profileStore = useProfileStore();

await noticeStore.getLatestNotice();

// // initialize components based on data attribute selectors
onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});
await profileStore.getSchoolProfile();
await menuStore.getMenus();
</script>

<style lang="scss" scoped></style>
