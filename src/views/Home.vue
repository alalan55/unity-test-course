<script setup>
import { storeToRefs } from "pinia";
import { watch } from "vue";
import { useRouter } from "vue-router";
import TitleComponent from "../components/TitleComponent.vue";
import { useAppStore } from "../stores/appStore";

const store = useAppStore();
const router = useRouter();

const { $myMessage } = storeToRefs(store);

watch($myMessage, () => {
  store.changeMessage("test");
});

const goToAbout = () => router.push("/about");
</script>

<template>
  <div>
    <TitleComponent v-if="store.$myMessage" :value="store.myMessage">
      Teste para preencher slot
    </TitleComponent>
    <button @click="goToAbout">Ir para sobre</button>
  </div>
</template>

<style lang="scss" scoped></style>
