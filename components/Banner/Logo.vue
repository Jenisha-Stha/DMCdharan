<template>
    <div>
       <img :src="profileStore.school.logo" class="w-40" />
    </div>
</template>

<script setup>
import { useProfileStore } from '~/store/profile';
const profileStore = useProfileStore();
</script>

<style lang="scss" scoped>

</style>