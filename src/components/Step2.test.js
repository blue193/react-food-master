import React from "react";
import { shallow } from "enzyme";
import Step2 from "./Step2";

describe("<Step2 /> component", () => {
  let wrapper,
    props = {
      handleChange: jest.fn(),
      meal: "lunch",
      nextStep: jest.fn(),
      prevStep: jest.fn(),
      restaurant: "",
      step: "2"
    };

  let component;

  beforeEach(() => {
    wrapper = shallow(<Step2 {...props} />);
    component = wrapper.instance();
  });

  it("renders the Step2 component", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("continue function", () => {
    expect(props.nextStep).not.toHaveBeenCalled();
    component.continue({ preventDefault: () => {} });
    expect(props.nextStep).toHaveBeenCalled();
  });

  it("back function", () => {
    expect(props.prevStep).not.toHaveBeenCalled();
    component.back({ preventDefault: () => {} });
    expect(props.prevStep).toHaveBeenCalled();
  });

  it("handleBlur function", () => {
    expect(component.state.touched.restaurant).toEqual(false);
    wrapper.find("input").simulate("blur", { target: { value: "Mc Donalds" } });
    expect(component.state.touched.restaurant).toEqual(true);
  });

  describe("onClick `previous` and `next`", () => {
    it("onClick previous button", () => {
      const btn = wrapper.find("button");
      expect(btn).toHaveLength(2);
      btn.at(0).simulate("click", { preventDefault: jest.fn() });
      expect(props.prevStep).toHaveBeenCalled();
    });

    it("onClick next button", () => {
      const btn = wrapper.find("button");
      expect(btn).toHaveLength(2);
      btn.at(1).simulate("click", { preventDefault: jest.fn() });
      expect(props.nextStep).toHaveBeenCalled();
    });
  });
});
