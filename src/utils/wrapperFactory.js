import { createTestingPinia } from "@pinia/testing";
import { shallowMount } from "@vue/test-utils";
import { merge } from "lodash";

const wrapperFactory = (component, options) => {
  
  const defaultOptions = {
    global: {
      plugins: [createTestingPinia()],
    },
  };

  return shallowMount(component, merge(options ?? {}, defaultOptions));
};

export default wrapperFactory;
