import { shallowMount } from "@vue/test-utils";
import { render } from "@vue/server-test-utils";
import { VLayout, VImg } from "vuetify/lib";

import Hero from "./Hero.vue";

describe("Hero.vue", () => {
  it("renders VImg when passed :src", () => {
    const src = "testimage.jpg";
    const wrapper = shallowMount(Hero, {
      propsData: {src}
    });

    expect(wrapper.contains(VImg)).toBe(true)
  });

  it("sets VImg src when passed :src", () => {
    const src = "testimage.jpg";
    const wrapper = shallowMount(Hero, {
      propsData: {src}
    });

    expect(wrapper.find(VImg).attributes('src')).toEqual(src)
  });

  it("sets VImg :aspect-ratio when passed :size", () => {
    const wrapper = shallowMount(Hero, {
      propsData: {size: "medium"}
    });

    expect(wrapper.find(VImg).attributes('aspectratio')).toEqual((458/375).toString());
  });
 
  describe("Computed: justifyClass", () => {
    it("sets default justification when not passed :alignment", () => {
      const localThis = {alignment: null};
      expect(Hero.computed.justifyClass.call(localThis)).toBe("justify-end");
    });

    it("sets justification when passed :alignment", () => {
      const localThis = {alignment: "top"};
      expect(Hero.computed.justifyClass.call(localThis)).toBe("justify-start");
    });
  });

  describe("Computed: aspectRatio", () => {
    it("sets default aspect-ratio when not passed :size", () => {
      const localThis = {size: null};
      expect(Hero.computed.aspectRatio.call(localThis)).toBe(16/9);
    });

    it("sets aspect-ratio when passed :size", () => {
      const localThis = {size: "large"};
      expect(Hero.computed.aspectRatio.call(localThis)).toBe(375/502);
    });
  });

  describe("Computed: styles", () => {
    it("sets default padding when not passed :size", () => {
      const localThis = {size: null};
      expect(Hero.computed.styles.call(localThis)).toEqual({});
    });

    it("sets padding when passed :size", () => {
      const localThis = {size: "large"};
      expect(Hero.computed.styles.call(localThis)).toEqual({ padding: '120px 40px' });
    });
  });
});
