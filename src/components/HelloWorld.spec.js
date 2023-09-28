import { it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

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
