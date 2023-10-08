import { beforeEach, describe, expect, it } from "vitest";
import wrapperFactory from "../utils/wrapperFactory";
import AboutVue from "./About.vue";
import TitleComponentVue from "../components/TitleComponent.vue";
import { useAppStore } from "../stores/appStore";

let wrapper = wrapperFactory(AboutVue);

describe("Suite de testes do ABOUT", () => {
  beforeEach(() => {
    wrapper = wrapperFactory(AboutVue);
  });

  it("Deve disparar o changeMessage quando o TitleComponent emitir o on-mounted", () => {
    const wrapper = wrapperFactory(AboutVue);

    const titleComponentWrapper = wrapper.findComponent(TitleComponentVue);

    const store = useAppStore();

    titleComponentWrapper.vm.$emit("on-mounted", "test");

    expect(store.changeMessage).toHaveBeenLastCalledWith("test");
  });

  // AULA 15
  it("Deve mudar o titulo quando o TiTleComponent emitir o evento de click", async () => {
    const titleComponentWrapper = wrapper.findComponent(TitleComponentVue);

    // usar o vm.$emit para eventos customizados
    //  await titleComponentWrapper.vm.$emit('click')

    // usar o trigger para eventos nativos
    await titleComponentWrapper.trigger("click");

    expect(titleComponentWrapper.props("value")).toBe("ABOUT!");
  });
});
