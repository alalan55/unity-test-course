import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HomeVue from "./Home.vue";
import wrapperFactory from "../utils/wrapperFactory";
import { useAppStore } from "../stores/appStore";


const push = vi.fn();

vi.mock("vue-router", () => ({
  useRouter: () => ({
    push,
  }),
}));

let wrapper = wrapperFactory(HomeVue);

describe("Suite de teste do Home view", () => {
  beforeEach(() => {
    wrapper = wrapperFactory(HomeVue);
  });

  // AULA 13
  it("Deve navegar para a página ABOUT, quando eu clicar no botão de navegação", async () => {
    const wrapper = shallowMount(HomeVue);

    const button = wrapper.find("button");
    await button.trigger("click");

    expect(push).toHaveBeenCalledWith("/about");
  });

  // AULA 19
  it("Deve disparar o changeMessage quando o $myMessage mudar", async () => {
    const store = useAppStore()

    await store.$patch({myMessage: 'Novo valor'})

    expect(store.changeMessage)

    expect(store.changeMessage).toHaveBeenCalledOnce()
    expect(store.changeMessage).toHaveBeenCalledWith('test')

  });
});
