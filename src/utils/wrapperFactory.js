import { createTestingPinia } from "@pinia/testing";
import { shallowMount } from "@vue/test-utils";

const wrapperFactory = (component) =>
  shallowMount(component, {
    global: {
      plugins: [createTestingPinia()],
    },
  });

  export default wrapperFactory
