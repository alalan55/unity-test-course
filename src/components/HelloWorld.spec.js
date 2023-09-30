import { it, expect, describe, vi } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import axios from "axios";
import HelloWorld from "./HelloWorld.vue";

global.fetch = vi.fn();
vi.mock("axios");

describe("Suite de testes do componente HelloWorld", () => {
  it("Deve renderizar a prop msg", () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: "Primeiro teste",
      },
    });

    expect(wrapper.find("h1").text()).toBe("Primeiro teste");
  });

  it("Deve adicionar valor no contador quandoo método é chamado (withebox testing)", () => {
    // whitebox testing
    const wrapper = mount(HelloWorld);

    wrapper.vm.increment();

    expect(wrapper.vm.count).toBe(1);
  });

  it("Deve adicionar valor no contador e mostrar o valor atualizado (blackbox testing)", async () => {
    const wrapper = mount(HelloWorld);

    const button = wrapper.find("button");

    await button.trigger("click");

    expect(button.text()).toBe("count is 1");
  });

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
  it("Deve chamar o axios.get função, com https://asdf.org/get, quando a mensagem de props mudar", async () => {
    const wrapper = shallowMount(HelloWorld);

    await wrapper.setProps({
      msg: "get",
    });

    expect(axios.get).toHaveBeenLastCalledWith("https://asdf.org/get");
  });
});
