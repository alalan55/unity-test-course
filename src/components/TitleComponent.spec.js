import { describe, expect } from "vitest";
import TitleComponent from "./TitleComponent.vue";
import { shallowMount } from "@vue/test-utils";

describe("Suite de teste do TitleComponent", () => {
  it("Deve renderizar o valor do título", () => {
    const wrapper = shallowMount(TitleComponent, {
      props: {
        value: "Meu título",
      },
    });

    expect(wrapper.text()).toBe('Meu título')
  });
});
