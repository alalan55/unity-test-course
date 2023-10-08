<script setup>
import { ref } from "vue";
import TitleComponent from "../components/TitleComponent.vue";
import { useAppStore } from "../stores/appStore";
const store = useAppStore();
const title = ref("ABOUT");
const isToShow = ref(true);
</script>

<template>
  <div>
    <TitleComponent
      v-if="isToShow"
      :value="title"
      @on-mounted="store.changeMessage($event)"
      @click="title = 'ABOUT!'"
    />
  </div>
  <button @click="isToShow = !isToShow">REMOVER COMPONENTE</button>
</template>

<style lang="scss" scoped></style>
