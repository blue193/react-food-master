import React from "react";
import { mount } from "enzyme";
import Userform from "./UserForm";

describe("<UserForm /> component", () => {
  let wrapper;
  let component;

  beforeEach(() => {
    wrapper = mount(<Userform />);
    component = wrapper.instance();
  });

  it("nextStep function", () => {
    expect(wrapper.state().step).toBe(1);
    component.nextStep();
    expect(component.state.step).toBe(2);
  });

  it("prevStep function", () => {
    expect(wrapper.state().step).toBe(1);
    component.nextStep();
    expect(component.state.step).toBe(2);
    component.prevStep();
    expect(component.state.step).toBe(1);
  });

  describe("handleChange with `argument` and without `arugement`", () => {
    it("handleChange without argument", () => {
      let meal = "dinner";
      let numberOfPeople = 2;
      wrapper
        .find("input")
        .at(0)
        .simulate("change", { target: { value: meal } });
      expect(component.state.meal).toEqual(meal);
      wrapper
        .find("input")
        .at(1)
        .simulate("change", { target: { value: numberOfPeople } });
      expect(component.state.numberOfPeople).toEqual(numberOfPeople);
    });

    it("handleChange with argument", () => {
      component.nextStep();
      wrapper.update();
      component.nextStep();
      wrapper.update();
      expect(wrapper.find("Step3")).toHaveLength(1);
      wrapper
        .find("button")
        .at(1)
        .simulate("click");
      expect(wrapper.instance().state.dishes.length).toEqual(2);
    });
  });

  it("addDish function", () => {
    expect(component.state.dishes.length).toEqual(1);
    component.addDish();
    expect(component.state.dishes.length).toEqual(2);
  });

  it("removeDish function", () => {
    expect(component.state.dishes.length).toEqual(1);
    component.removeDish();
    expect(component.state.dishes.length).toEqual(0);
  });

  it("component by state", () => {
    expect(wrapper.find("Step1")).toHaveLength(1);
    component.nextStep();
    wrapper.update();
    expect(wrapper.find("Step2")).toHaveLength(1);
    component.nextStep();
    wrapper.update();
    expect(wrapper.find("Step3")).toHaveLength(1);
    component.nextStep();
    wrapper.update();
    expect(wrapper.find("Review")).toHaveLength(1);
    component.nextStep();
    wrapper.update();
    expect(wrapper.find("Submit")).toHaveLength(1);

    component.nextStep();
    wrapper.update();
    expect(wrapper.find("p")).toHaveLength(1);
  });
});
