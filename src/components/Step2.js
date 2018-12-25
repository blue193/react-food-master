import React, { Component } from "react";
import Steps from "./Steps";
import JSONData from "./../data/dishes.json";

export class Step2 extends Component {
  state = {
    restaurant: "",
    touched: {
      restaurant: false
    }
  };

  //Accessing all the restaurants from the JSON file
  availableRestaurants = JSONData.dishes.map(dish => {
    if (dish.availableMeals.includes(this.props.meal)) {
      return dish.restaurant;
    }
  });

  restaurants = this.availableRestaurants.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  // For validations
  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  validate = restaurant => {
    return {
      restaurant: !this.restaurants.includes(restaurant)
    };
  };

  render() {
    const { handleChange } = this.props;
    const { step } = this.props;
    const { restaurant } = this.props;

    // Validation as well
    const errors = this.validate(restaurant);
    const isEnabled = !Object.keys(errors).some(x => errors[x]);
    const shouldMarkError = field => {
      return errors[field] && this.state.touched[field];
    };

    return (
      <div>
        <Steps step={step} />
        <h3>Please Select a Restaurant</h3>
        <br />
        {shouldMarkError("restaurant") && (
          <p className="error">You didn't select a restaurant!</p>
        )}
        <input
          onBlur={this.handleBlur("restaurant")}
          onChange={handleChange("restaurant")}
          value={restaurant}
          placeholder="---"
          type="text"
          list="restaurant"
          name="restaurant"
        />
        <datalist id="restaurant">
          {this.restaurants.map((restaurant, index) => (
            <option key={index} value={restaurant} />
          ))}
        </datalist>
        <br />
        <div className="buttons">
          <button onClick={this.back} type="button">
            Previous
          </button>
          <button disabled={!isEnabled} onClick={this.continue} type="button">
            Next
          </button>
        </div>

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

export default Step2;
