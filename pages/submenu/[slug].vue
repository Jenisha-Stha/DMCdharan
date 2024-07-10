<template>
    <div>
           <v-container>
            <v-row>
                
                <v-col>
                    <div v-html="post.content" class="text-3xl flex flex-col gap-3"></div>
                </v-col>
                <v-col>
                    <v-img :src="post.image" :lazy-src="post.image"></v-img>
                </v-col>
            </v-row>
           </v-container>
    </div>
</template>

<script setup>
import { useMenuStore } from '~/store/menus';
const menuStore = useMenuStore();
await menuStore.getMenus();

const route = useRoute();

const posts = menuStore.menus.map((m) =>
m.posts.find((p) => p.slug == route.params.slug)
);
const post = posts.find((p) => p != null);
</script>

<style lang="scss" scoped>

</style>