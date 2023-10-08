import { shallowMount, mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import App from "./App.vue";

it("Deve rendrerizar o conteúdo de helloworld (MOUNT)", () => {
  const wrapper = mount(App, {
    global: {
      plugins: [createTestingPinia()],
    },
  });

  expect(wrapper.html()).toContain("official Vue");
});

// it("Deve rendrerizar o conteúdo de helloworld (SHALLOWMOUNT)", () => {
//   const wrapper = shallowMount(App);

//   expect(wrapper.html()).toContain("official Vue");
// });
