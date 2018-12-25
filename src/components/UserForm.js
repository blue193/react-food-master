import React, { Component } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Review from "./Review";
import Submit from "./Submit";

export class UserForm extends Component {
  state = {
    step: 1,
    meal: "",
    numberOfPeople: "",
    restaurant: "",
    dishes: [{ dish: "", servings: ""}]
  };

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to the prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle field change
  handleChange = input => e => {
    if (["dish", "servings"].includes(e.target.className)) {
      let dishes = [...this.state.dishes];
      dishes[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ dishes });
    } else {
      this.setState({ [input]: e.target.value });
    }
  };

  addDish = e => {
    if (this.state.dishes.length < 10) {
      this.setState(prevState => ({
        dishes: [...prevState.dishes, { dish: "", servings: "" }]
      }));
    }
  };

  removeDish = (index) => {
    let dishes = [...this.state.dishes];
    dishes.splice(index, 1);
    this.setState({ dishes });
  };

  render() {
    const { step } = this.state;
    const { meal, numberOfPeople, restaurant, dishes } = this.state;

    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={this.nextStep}
            step={step}
            handleChange={this.handleChange}
            meal={meal}
            numberOfPeople={numberOfPeople}
          />
        );
      case 2:
        return (
          <Step2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            step={step}
            handleChange={this.handleChange}
            meal={meal}
            restaurant={restaurant}
          />
        );
      case 3:
        return (
          <div>
            <Step3
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              step={step}
              handleChange={this.handleChange}
              addDish={this.addDish}
              removeDish={this.removeDish}
              restaurant={restaurant}
              numberOfPeople={numberOfPeople}
              dishes={dishes}
            />
          </div>
        );
      case 4:
        return (
          <Review
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            step={step}
            meal={meal}
            numberOfPeople={numberOfPeople}
            restaurant={restaurant}
            dishes={dishes}
          />
        );
      case 5:
        return (
          <Submit
            meal={meal}
            numberOfPeople={numberOfPeople}
            restaurant={restaurant}
            dishes={dishes}
          />
        );
      default:
        return <p>Error 404!</p>;
    }
  }
}

export default UserForm;
