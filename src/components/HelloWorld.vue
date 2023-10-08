<script setup>
import axios from "axios";
import { computed, ref, watch } from "vue";
// import { useAppStore } from "@/stores/appStore";
import { useAppStore } from "../stores/appStore";
import TitleComponent from "./TitleComponent.vue";

const emit = defineEmits(["up"]);
const props = defineProps({
  msg: String,
});

const count = ref(0);
const prefixedMsg = computed(() => `Meu título: ${props.msg}`);

const handleTitleMounted = () => emit("up", count.value);

const increment = () => count.value++;

const store = useAppStore();
// const { changeMessage } = useAppStore();

watch(
  () => props.msg,
  (nv) => {
    // let URL = `https://example.com/` + nv;
    // fetch(URL);
    // axios.get("https://asdf.org/get");
    // changeMessage(nv)

    store.changeMessage(nv);
  }
);
</script>

<template>
  <h1>{{ msg }}</h1>

  <TitleComponent v-show="msg" :value="prefixedMsg" @on-mounted="handleTitleMounted" />

  <div class="card" :class="{ 'card-success': !msg }" @click="$emit('card-clicked')">
    <button type="button" @click="increment">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
