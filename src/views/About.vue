<script setup>
import { ref } from "vue";
import TitleComponent from "../components/TitleComponent.vue";
import { useAppStore } from "../stores/appStore";
const store = useAppStore();
const title = ref('ABOUT')
</script>

<template>
  <div>
    <TitleComponent
      :value="title"
      @on-mounted="store.changeMessage($event)"
      @click="title = 'ABOUT!'"
    />
  </div>
</template>

<style lang="scss" scoped></style>
