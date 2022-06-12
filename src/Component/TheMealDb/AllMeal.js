import React from 'react';
import { NavLink } from 'react-router-dom';
import './Meal.css';
const SingleMeal = (props) => {
	const { strMealThumb, strMeal, idMeal } = props;

	return (
		<>
			<div className='main_cart_main' key={idMeal}>
				<div className='cart'>
					<img src={strMealThumb} alt={strMeal} />
					<NavLink to={idMeal}>
						<h1>{strMeal}</h1>
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default SingleMeal;
