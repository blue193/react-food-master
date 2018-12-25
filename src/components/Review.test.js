import React from "react";
import { shallow } from "enzyme";
import Review from "./Review";

describe("<Review /> component", () => {
  let wrapper,
    props = {
      nextStep: jest.fn(),
      prevStep: jest.fn(),
      step: 4,
      meal: "lunch",
      numberOfPeople: "2",
      restaurant: "Mc Donalds",
      dishes: [
        { dish: "Chicken Burger", servings: 3 },
        { dish: "Ham Burger", servings: 2 }
      ]
    };

  let component;

  beforeEach(() => {
    wrapper = shallow(<Review {...props} />);
    component = wrapper.instance();
  });

  it("renders the Review component", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("continue function", () => {
    component.continue({ preventDefault: jest.fn() });
    expect(props.nextStep).toHaveBeenCalled();
  });

  it("back function", () => {
    component.back({ preventDefault: jest.fn() });
    expect(props.prevStep).toHaveBeenCalled();
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

  it("renders everything", () => {
    expect(wrapper.find("Steps").props().step).toEqual(props.step);
    expect(
      wrapper
        .find("p")
        .at(1)
        .text()
    ).toEqual(props.meal);
    expect(
      wrapper
        .find("p")
        .at(3)
        .text()
    ).toEqual(props.numberOfPeople);
    expect(
      wrapper
        .find("p")
        .at(5)
        .text()
    ).toEqual(props.restaurant);
    expect(wrapper.find("h3").text()).toEqual("Dishes");

    for (let i = 6; i < props.dishes.length; i++) {
      expect(
        wrapper
          .find("p")
          .at(i)
          .text()
      ).toEqual(
        `${props.dishes[i - 6].dish} - ${props.dishes[i - 6].servings}`
      );
    }
  });
});
