import { it, expect, describe, vi } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import axios from "axios";
import HelloWorld from "./HelloWorld.vue";
import { createTestingPinia } from "@pinia/testing";
import { useAppStore } from "../stores/appStore";
import TitleComponent from "./TitleComponent.vue";

global.fetch = vi.fn();
vi.mock("axios");

describe("Suite de testes do componente HelloWorld", () => {
  // it("Deve renderizar a prop msg", () => {
  //   const wrapper = mount(HelloWorld, {
  //     props: {
  //       msg: "Primeiro teste",
  //     },
  //   });

  //   expect(wrapper.find("h1").text()).toBe("Primeiro teste");
  // });

  // it("Deve adicionar valor no contador quandoo método é chamado (withebox testing)", () => {
  //   // whitebox testing
  //   const wrapper = mount(HelloWorld);

  //   wrapper.vm.increment();

  //   expect(wrapper.vm.count).toBe(1);
  // });

  // it("Deve adicionar valor no contador e mostrar o valor atualizado (blackbox testing)", async () => {
  //   const wrapper = mount(HelloWorld);

  //   const button = wrapper.find("button");

  //   await button.trigger("click");

  //   expect(button.text()).toBe("count is 1");
  // });

  //  AULA 7, MOCK COM fetch
  // it("Deve fazer uma chamada api, usando a url correta dependendo da mensagem da prop", async () => {
  //   // Dado que o componente HelloWorld seja montado
  //   const wrapper = shallowMount(HelloWorld);

  //   // Quando a mensagem de prop muda
  //   // Devo utilizar o await para esperar ele atualizar o componente (nextTick)
  //   await wrapper.setProps({
  //     msg: "test",
  //   });

  //   // Então é esperdo que a função fetch seja chamada com a url correta
  //   expect(fetch).toHaveBeenCalledWith("https://example.com/test");
  // });

  // AULA 8, mock com axios
  // it("Deve chamar o axios.get função, com https://asdf.org/get, quando a mensagem de props mudar", async () => {
  //   const wrapper = shallowMount(HelloWorld);

  //   await wrapper.setProps({
  //     msg: "get",
  //   });

  //   expect(axios.get).toHaveBeenLastCalledWith("https://asdf.org/get");
  // });

  // AULA 9, mock com dispath em store
  it("Deve disparar o changeMessage com 'test' se a prop for mudada para 'test' ", async () => {
    const wrapper = shallowMount(HelloWorld, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const store = useAppStore();

    await wrapper.setProps({
      msg: "test",
    });

    expect(store.changeMessage).toHaveBeenNthCalledWith(1, "test");
  });

  // AULA 10
  it("Deve fazer o bind correto da msg prop para o TitleComponent", () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {
        msg: "Primeira seção",
      },
    });

    const titleComponent = wrapper.findComponent(TitleComponent);

    expect(titleComponent.props("value")).toBe("Meu título: Primeira seção");
  });

  it("Deve renderizar o TitleComponent se a prop msg for setada", () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {
        msg: "Primeira seção",
      },
    });

    const titleComponentWrapper = wrapper.findComponent(TitleComponent);

    expect(titleComponentWrapper.exists()).toBe(true);
  });

  // test.each([
  //   {
  //     msg: "Primeira seção",
  //     titleComponentExists: true,
  //   },
  //   {
  //     msg: undefined,
  //     titleComponentExists: false,
  //   },
  //   {
  //     msg: '',
  //     titleComponentExists: false,
  //   },
  // ])(
  //   "msg: $msg -> titleComponentExists: $titleComponentExists",
  //   ({ msg, titleComponentExists }) => {
  //     const wrapper = shallowMount(HelloWorld, {
  //       props: {
  //         msg,
  //       },
  //     });

  //     const titleComponentWrapper = wrapper.findComponent(TitleComponent);

  //     expect(titleComponentWrapper.exists()).toBe(titleComponentExists);
  //   }
  // );

    // UTILIZADO PARA O V-IF
    // test.each([
    //   {
    //     msg: "Primeira seção",
    //     successClassExists: false,
    //   },
    //   {
    //     msg: undefined,
    //     successClassExists: true,
    //   },
    //   {
    //     msg: '',
    //     successClassExists: true,
    //   },
    // ])(
    //   "msg: $msg -> successClassExists: $successClassExists",
    //   ({ msg, successClassExists }) => {
    //     const wrapper = shallowMount(HelloWorld, {
    //       props: {
    //         msg,
    //       },
    //     });
  
    //     const cardElementWrapper = wrapper.find('.card-success')
  
    //     expect(cardElementWrapper.exists()).toBe(successClassExists);
    //   }
    // );

  // UTILIZADO PARA O V-SHOW
  test.each([
    {
      msg: "Primeira seção",
      titleComponentStyle: undefined,
    },
    {
      msg: undefined,
      titleComponentStyle: 'display: none;',
    },
    {
      msg: '',
      titleComponentStyle: 'display: none;',
    },
  ])(
    "msg: $msg -> titleComponentStyle: $titleComponentStyle",
    ({ msg, titleComponentStyle }) => {
      const wrapper = shallowMount(HelloWorld, {
        props: {
          msg,
        },
      });

      const titleComponentWrapper = wrapper.findComponent(TitleComponent);

      expect(titleComponentWrapper.element.attributes.getNamedItem('style')?.value).toBe(titleComponentStyle);
    }
  );


  
});
