# React Assignment

The app isn't finished yet but here is a sum up of what has been done so far, [check the Deployed App here!](http://Nourcode.github.io/react-food).

## Requirements

### Must

* Use `React` (Available)
* Use ES6 + (Available)
* Write Unit Tests (any testing library, but preferred `jest`) (Available)

### Bonus

* Some CSS just for better visuals

## What has been done

### Step 1

* Users select Meal Category (breakfast, lunch or dinner).
* They also need to input number of people (maximum 10)

Both of these should be required field.

### Step 2

* Users select appropriate restaurants that provides meals based on selection in first step.

This is also a required field.

### Step 3 (70%)

* User selects dishes they want to pre order based on the meal and restaurant they selected in first two steps.

* They first choose a dish
* They can also add number of servings of the dish (defaulted to 1)

### Step 4

On the final step, users should be able to review all their previous choices
and click submit.

### Notes (70%)

* User can't proceed to next step unless they have valid inputs on the current step (yes in Step 1, 2).
* if their inputs are not valid, show appropriate validation errors (yes in Step 1, 2).
* At any step user can go back and change their preference on any previous step.

## What is left

### Step 3 (30%)

The total number of dishes (i.e Number of dishes \* respective serving) should be greater or equal to the number of person selected in first step and a maximum of 10 is allowed.

### Notes (30%)

* User can't proceed to next step unless they have valid inputs on the current step (in Step 3).
* if their inputs are not valid, show appropriate validation errors (in Step 3).

