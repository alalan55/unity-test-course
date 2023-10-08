import { beforeEach, describe, expect } from "vitest";
import TitleComponent from "./TitleComponent.vue";
import { shallowMount } from "@vue/test-utils";

const createWrapper = (props) => shallowMount(TitleComponent, { props });

let wrapper = createWrapper();

describe("Suite de teste do TitleComponent", () => {
  beforeEach(() => {
    wrapper = createWrapper();
  });

  it("Deve renderizar o valor do título", () => {
    const wrapper = shallowMount(TitleComponent, {
      props: {
        value: "Meu título",
      },
    });

    expect(wrapper.text()).toBe("Meu título");
  });
  it("Deve emitir o evento on-mounted quando o componente for montado", () => {
    expect(wrapper.emitted("on-mounted")).toBeTruthy();
  });
});
