<template>
    <div class="flex gap-4">
        <div>
            <v-icon class="text-white" icon="mdi-map-marker"></v-icon>
            <span class="text-white">{{ profileStore.school.street }}</span>
        </div>
        <div>
            <v-icon class="text-white" icon="mdi-email"></v-icon>
            <span class="text-white">{{ profileStore.school.email }}</span>
        </div>
    </div>
</template>

<script setup>
import { useProfileStore } from '~/store/profile';
const profileStore = useProfileStore();
</script>

<style lang="scss" scoped>

</style>