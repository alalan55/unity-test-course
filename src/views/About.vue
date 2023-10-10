<script setup>
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import TitleComponent from "../components/TitleComponent.vue";
import { useAppStore } from "../stores/appStore";
const store = useAppStore();
const title = ref("ABOUT");
const isToShow = ref(true);

const emit = defineEmits(["new-message"]);

const { $myMessage } = storeToRefs(store);

watch($myMessage, (nv) => {
  if (!nv) {
    return;
  }

  emit("new-message", nv);
});
</script>

<template>
  <div>
    <TitleComponent
      v-if="isToShow"
      :value="title"
      @on-mounted="
        () => {
          store.changeMessage($event);
        }
      "
      @click="title = 'ABOUT!'"
    />
  </div>
  <button @click="isToShow = !isToShow">REMOVER COMPONENTE</button>
</template>

<style lang="scss" scoped></style>
