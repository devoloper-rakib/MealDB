import React from 'react';
import './Meal.css';
const SingleMeal = (props) => {
	const { strMealThumb, strMeal, idMeal } = props;

	return (
		<>
			<div className='main_cart_main' key={idMeal}>
				<div className='cart'>
					<img src={strMealThumb} alt={strMeal} />
					<h1>{strMeal}</h1>
				</div>
			</div>
		</>
	);
};

export default SingleMeal;
