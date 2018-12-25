import React, { Component } from "react";
import Steps from "./Steps";
import JSONData from "./../data/dishes.json";

export class Step1 extends Component {
  state = {
    meal: "",
    numberOfPeople: "",
    touched: {
      meal: false,
      numberOfPeople: false
    }
  };

  // Accessing all the meals from the JSON file
  availableMeals = JSONData.dishes.map(dish => dish.availableMeals[0]);
  meals = this.availableMeals.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  // For validations
  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  validate = (meal, numberOfPeople) => {
    return {
      meal: !this.meals.includes(meal),
      numberOfPeople: !numberOfPeople >= 1
    };
  };

  render() {
    const { handleChange } = this.props;
    const { step } = this.props;
    const { meal, numberOfPeople } = this.props;

    // Validation as well
    const errors = this.validate(meal, numberOfPeople);
    const isEnabled = !Object.keys(errors).some(x => errors[x]);
    const shouldMarkError = field => {
      return errors[field] && this.state.touched[field];
    };

    return (
      <div>
        <Steps step={step} />
        <br />
        <h3>Please Select a meal</h3>
        <br />
        {shouldMarkError("meal") && (
          <p className="error">You didn't select a meal!</p>
        )}
        <input
          onBlur={this.handleBlur("meal")}
          onChange={handleChange("meal")}
          value={meal}
          placeholder="---"
          type="text"
          list="meal"
          name="meal"
        />
        <datalist id="meal">
          {this.meals.map((meal, index) => (
            <option key={index} value={meal} />
          ))}
        </datalist>
        <br />
        <h3>Please Enter Number of people</h3>
        <br />
        {shouldMarkError("numberOfPeople") && (
          <p className="error">You didn't choose a number!</p>
        )}
        <input
          onBlur={this.handleBlur("numberOfPeople")}
          onChange={handleChange("numberOfPeople")}
          value={numberOfPeople}
          placeholder="1"
          type="number"
          id="numberOfPeople"
          name="numberOfPeople"
          min="1"
          max="10"
          step="1"
        />
        <br />
        <button disabled={!isEnabled} onClick={this.continue} type="button">
          Next
        </button>
        <br />
        <div className="image">
          <img
            src="zenport_logo.png"
            alt="zenport_logo"
            width="370"
            height="100"
          />
        </div>
      </div>
    );
  }
}

export default Step1;
