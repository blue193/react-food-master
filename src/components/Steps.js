import React, { Component } from "react";

export class Steps extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className={this.props.step === 1 ? "card current-step" : "card"}>
            Step 1
          </div>
          <div className={this.props.step === 2 ? "card current-step" : "card"}>
            Step 2
          </div>
          <div className={this.props.step === 3 ? "card current-step" : "card"}>
            Step 3
          </div>
          <div className={this.props.step === 4 ? "card current-step" : "card"}>
            Review
          </div>
        </div>
      </div>
    );
  }
}

export default Steps;
