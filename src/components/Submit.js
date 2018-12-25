import React, { Component } from 'react'

export class Submit extends Component {

  render() {
    const { meal, numberOfPeople, restaurant, dishes } = this.props;

    return (
      <div>
        {console.log(meal)}
        {console.log(numberOfPeople)}
        {console.log(restaurant)}
        {
          dishes.map(dish => console.log(dish))
        }
        <h1 className="final-text">Thank You For Your Submission!</h1>
        <p>You will get an email and an SMS with furthur instructions</p>
        <div className="image">
            <img src="zenport_logo.png" alt="zenport_logo" width="370" height="100"></img>
        </div>
      </div>
    )
  }
}

export default Submit;
