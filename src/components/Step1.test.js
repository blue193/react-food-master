import React from "react";
import { shallow } from "enzyme";
import Step1 from "./Step1";

describe("<Step1 /> component", () => {
  let wrapper,
    props = {
      nextStep: jest.fn(),
      step: "1",
      handleChange: jest.fn(),
      meal: "lunch",
      numberOfPeople: "2"
    };

  let component;

  beforeEach(() => {
    wrapper = shallow(<Step1 {...props} />);
    component = wrapper.instance();
  });

  it("renders the Step1 component", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("continue function", () => {
    expect(props.nextStep).not.toHaveBeenCalled();
    component.continue({ preventDefault: () => {} });
    expect(props.nextStep).toHaveBeenCalled();
  });

  it("onBlur function", () => {
    let meal = "lunch";
    let numberOfPeople = 3;

    expect(component.state.touched.meal).toEqual(false);
    wrapper
      .find("input")
      .at(0)
      .simulate("blur", { target: { value: meal } });
    expect(component.state.touched.meal).toEqual(true);

    expect(component.state.touched.numberOfPeople).toEqual(false);
    wrapper
      .find("input")
      .at(1)
      .simulate("blur", { target: { value: numberOfPeople } });
    expect(component.state.touched.numberOfPeople).toEqual(true);
  });
});
