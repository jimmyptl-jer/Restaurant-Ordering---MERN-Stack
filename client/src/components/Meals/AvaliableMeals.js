import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./Avaliablemeals.css";
import MealItem from "./MealsItem/MealItem";
// import useHttp from "../../hooks/use-http";


const url = 'http://localhost:5001/menu';

const AvaliableMeals = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Something went wrong 404');
      }

      const data = await response.json()

      setData(data)
      setIsLoading(false)
    } catch (error) {
      setError('Could not load data', error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // const httpData = useHttp();

  // const { isLoading, error, sendRequest:fetchData } = httpData;

  // useEffect(() => {
  //   fetchData({ url: url }, setData);
  //   console.log(data);
  // }, [httpData]);

  const mealsList = data.map((meal) => {
    return (
      <MealItem
        key={meal._id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className="meals">
      <Card>
        {isLoading && <ul>{mealsList}</ul>}
        {error && <p>{error}</p>}
      </Card>
    </section>
  );
};

export default AvaliableMeals;
