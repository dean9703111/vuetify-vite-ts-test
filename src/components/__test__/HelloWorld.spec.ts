import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";
import vuetify from '@/plugins/vuetify';
describe("HelloWorld", () => {
  it("將 props msg 完成渲染", () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [vuetify],
      },
      props: {
        msg: "Hello Vitest"
      }
    });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
