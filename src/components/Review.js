import React, { Component } from "react";
import Steps from "./Steps";

export class Review extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { step } = this.props;
    const { meal, numberOfPeople, restaurant, dishes } = this.props;

    return (
      <div>
        <Steps step={step} />
        <div className="review">
          <ul>
            <li className="titles">
              <p>Meal</p> <p>{meal}</p>
            </li>

            <li className="titles">
              <p>No. of. People</p> <p>{numberOfPeople}</p>
            </li>
            <li className="titles">
              <p>Restaurant</p> <p>{restaurant}</p>
            </li>

            <h3>Dishes</h3>
            <div className="dishes">
              {dishes.map((dish, index) => (
                <li key={index}>
                  <p>{`${dish.dish} - ${dish.servings}`}</p>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <br />
        <div className="buttons">
          <button onClick={this.back} type="button">
            Previous
          </button>
          <button onClick={this.continue} type="button">
            Submit
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

export default Review;
