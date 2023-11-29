import React, { Fragment } from "react";
import AvaliableMeals from "./AvaliableMeals";
import MealsSummary from "./MealsSummary";
import AddMenuItem from "./MealsItem/AddMealItem";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaliableMeals />
      <AddMenuItem/>
    </Fragment>
  );
};

export default Meals;
