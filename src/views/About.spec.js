import { describe, expect, it } from "vitest";
import wrapperFactory from "../utils/wrapperFactory";
import AboutVue from "./About.vue";
import TitleComponentVue from "../components/TitleComponent.vue";
import { useAppStore } from "../stores/appStore";

describe("Suite de testes do ABOUT", () => {
  it("Deve disparar o changeMessage quando o TitleComponent emitir o on-mounted", () => {
    const wrapper = wrapperFactory(AboutVue);

    const titleComponentWrapper = wrapper.findComponent(TitleComponentVue);

    const store = useAppStore();

    titleComponentWrapper.vm.$emit("on-mounted", "test");

    expect(store.changeMessage).toHaveBeenLastCalledWith("test");
  });
});
