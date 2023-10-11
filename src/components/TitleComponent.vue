<script setup>
import { onMounted } from "vue";

const props = defineProps({
  value: "",
});

const emit = defineEmits(["on-mounted"]);

onMounted(() => {
  emit("on-mounted");
});
</script>

<template>
  <div>
    <h1>{{ value }}</h1>
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
