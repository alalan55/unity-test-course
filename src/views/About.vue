<script setup>
import TitleComponent from "../components/TitleComponent.vue";
import { useAppStore } from "../stores/appStore";
const store = useAppStore();
</script>

<template>
  <div>
    <TitleComponent
      value="ABOUT"
      @on-mounted="store.changeMessage($event)"
    />
  </div>
</template>

<style lang="scss" scoped></style>
