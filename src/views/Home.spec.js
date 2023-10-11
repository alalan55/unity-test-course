import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HomeVue from "./Home.vue";
import TitleComponent from "../components/TitleComponent.vue";
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
    const store = useAppStore();

    await store.$patch({ myMessage: "Novo valor" });

    expect(store.changeMessage);

    expect(store.changeMessage).toHaveBeenCalledOnce();
    expect(store.changeMessage).toHaveBeenCalledWith("test");
  });

  // AULA 20
  it("Deve fazer o bind correto do stado myMessage com o valor da propriedade do TitleComponent", async () => {
    const store = useAppStore();

    await store.$patch({ myMessage: "Novo título" });

    const titleComponentWrapper = wrapper.findComponent(TitleComponent);

    expect(titleComponentWrapper.props("value")).toBe("Novo título");
  });

  // AULA 21
  test.each([
    {
      isToHaveTitleComponent: false,
      message: "",
    },
    {
      isToHaveTitleComponent: true,
      message: "test",
    },
  ])(
    "message: $message -> titleComponent existe: $isToHaveTitleComponent",
    async ({ message, isToHaveTitleComponent }) => {
      const store = useAppStore();
      await store.$patch({ myMessage: message });

      const titleComponentWrapper = wrapper.findComponent(TitleComponent);
      expect(titleComponentWrapper.exists()).toBe(isToHaveTitleComponent);
    }
  );

  // AULA 22
  it("Deve preencher o slot default do TitleComponent", async () => {
    wrapper = wrapperFactory(HomeVue, {
      global: {
        // stub: {
        //   TitleComponent,
        // },
        renderStubDefaultSlot: true
      },
    });
    const store = useAppStore();

    await store.$patch({ myMessage: "Novo título" });

    console.log(wrapper.html())

    expect(wrapper.text()).toContain('Teste para preencher slot')
  });

  // it("Deve preencher o slot default do TitleComponent", async () => {
  //   wrapper = wrapperFactory(HomeVue, {
  //     global: {
  //       stub: {
  //         TitleComponent,
  //       },
  //     },
  //   });
  //   const store = useAppStore();

  //   await store.$patch({ myMessage: "Novo título" });

  //   console.log(wrapper.html())

  //   expect(wrapper.text()).toContain('Teste para preencher slot')
  // });
});
