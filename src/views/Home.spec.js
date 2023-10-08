import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HomeVue from "./Home.vue";

const push = vi.fn();

vi.mock("vue-router", () => ({
  useRouter: () => ({
    push,
  }),
}));

describe("Suite de teste do Home view", () => {
  // AULA 13
  it("Deve navegar para a página ABOUT, quando eu clicar no botão de navegação", async () => {
    const wrapper = shallowMount(HomeVue);

    const button = wrapper.find("button");
    await button.trigger("click");

    expect(push).toHaveBeenCalledWith("/about");
  });
});
