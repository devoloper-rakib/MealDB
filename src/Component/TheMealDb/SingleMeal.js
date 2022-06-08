import React from 'react';

const SingleMeal = (item) => {
	const { strMealThumb, strMeal, idMeal } = item;

	return (
		<div key={idMeal} className='main_cart'>
			<img src={strMealThumb} alt='' />
			<h1>{strMeal}</h1>
			<h1>is not working</h1>
		</div>
	);
};

export default SingleMeal;
