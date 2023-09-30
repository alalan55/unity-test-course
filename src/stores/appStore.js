import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => ({
    myMessage: "",
  }),
  actions: {
    changeMessage(message) {
      this.myMessage = message;
    },
  },
  getters: {
    $myMessage: (state) => `essa é a mensagem: ${state.myMessage}`,
  },
});
