import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../TheMealDb/Meal.css';
import Navbar from './Navbar';
const SingleMeal = () => {
	const [singleMeal, setSingleMeal] = useState([]);
	const { foodId } = useParams();

	useEffect(() => {
		axios
			.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
			.then((res) => {
				console.log(res);
				setSingleMeal(res.data.meals[0]);
			})
			.catch((error) => {
				alert(error.message);
			});
	}, []);

	console.log(singleMeal);

	const {
		strMealThumb,
		strArea,
		strMeal,
		strIngredient1,
		strIngredient2,
		strIngredient3,
		strIngredient4,
		strIngredient5,
		strIngredient6,
		strIngredient7,
		strIngredient8,
		strInstructions,
	} = singleMeal;

	return (
		<section>
			<Navbar />

			<div className='single_meal'>
				<img src={strMealThumb} alt={strMeal} />
				<h1> Area : {strArea}</h1>
				<h1>Meal Name : {strMeal}</h1>
				<ul>
					<li>Ingredient 1 : {strIngredient1}</li>
					<li>Ingredient 2 : {strIngredient2}</li>
					<li>Ingredient 3 : {strIngredient3}</li>
					<li>Ingredient 4 : {strIngredient4}</li>
					<li>Ingredient 5 : {strIngredient5}</li>
					<li>Ingredient 6 : {strIngredient6}</li>
					<li>Ingredient 7 : {strIngredient7}</li>
					<li>Ingredient 8 : {strIngredient8}</li>
				</ul>

				<p>{strInstructions}</p>
			</div>
		</section>
	);
};

export default SingleMeal;
