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
  <div>{{ value }}</div>
</template>

<style lang="scss" scoped></style>
