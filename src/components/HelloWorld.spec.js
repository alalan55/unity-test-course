import { it } from "vitest";
import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

it("Deve renderizar a prop msg", () => {
  const wrapper = mount(HelloWorld);

  console.log(wrapper.html())
});
