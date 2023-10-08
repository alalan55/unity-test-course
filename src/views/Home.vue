<script setup>
import { useRouter } from "vue-router";
import TitleComponent from "../components/TitleComponent.vue";

const router = useRouter();

const goToAbout = () => router.push("/about");
</script>

<template>
  <div>
    <TitleComponent value="HOME" />
    <button @click="goToAbout">Ir para sobre</button>
  </div>
</template>

<style lang="scss" scoped></style>
