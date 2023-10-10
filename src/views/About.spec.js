import { beforeEach, describe, expect, it, vi } from "vitest";
import wrapperFactory from "../utils/wrapperFactory";
import AboutVue from "./About.vue";
import TitleComponentVue from "../components/TitleComponent.vue";
import { useAppStore } from "../stores/appStore";

let wrapper = wrapperFactory(AboutVue);

describe("Suite de testes do ABOUT", () => {
  beforeEach(() => {
    wrapper = wrapperFactory(AboutVue);
  });

  // it("Deve disparar o changeMessage quando o TitleComponent emitir o on-mounted", () => {
  //   const wrapper = wrapperFactory(AboutVue);

  //   const titleComponentWrapper = wrapper.findComponent(TitleComponentVue);

  //   const store = useAppStore();

  //   titleComponentWrapper.vm.$emit("on-mounted", "test");

  //   expect(store.changeMessage).toHaveBeenLastCalledWith("test");
  // });

  // AULA 15
  it("Deve mudar o titulo quando o TiTleComponent emitir o evento de click", async () => {
    const titleComponentWrapper = wrapper.findComponent(TitleComponentVue);

    // usar o vm.$emit para eventos customizados
    //  await titleComponentWrapper.vm.$emit('click')

    // usar o trigger para eventos nativos
    await titleComponentWrapper.trigger("click");

    expect(titleComponentWrapper.props("value")).toBe("ABOUT!");
  });

  //AULA 16
  it("Deve fazer um toogle no TitleComponent quando o botão for clicado", async () => {
    const button = wrapper.find("button");

    let titleComponentWrapper = wrapper.findComponent(TitleComponentVue);
    await button.trigger("click");
    expect(titleComponentWrapper.exists()).toBe(false);

    await button.trigger("click");
    titleComponentWrapper = wrapper.findComponent(TitleComponentVue);
    expect(titleComponentWrapper.exists()).toBe(true);
  });

  // AULA 17
  it("Deve emitir uma nova mensagem quando o getter $myMessage for alterado", async () => {
    const store = useAppStore();

    store.myMessage = "Nova mensagem";

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("new-message")).toBeTruthy();
    expect(wrapper.emitted("new-message")?.[0][0]).toBe(
      "Nova mensagem"
    );
    expect(wrapper.emitted("new-message")).toHaveLength(1);
  });

  // AULA 18
  it("Deve chamar a api na rota http://server.com/user com o payload {id: 123}, quando o getter mudar", async () => {
    const store = useAppStore();

    await store.$patch({ myMessage: "Nova mensagem" });

    expect(fetch).toHaveBeenCalledWith("http://server.com/user", {
      method: "POST",
      body: '{"id":123}',
    });
  });
});
