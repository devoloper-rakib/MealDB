import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
	AxiosProvider,
	Request,
	Get,
	Delete,
	Head,
	Post,
	Put,
	Patch,
	withAxios,
} from 'react-axios';

import './Meal.css';
import SingleMeals from './SingleMeal';
export const Meal = () => {
	const [data, setData] = useState([]);
	const [timer, setTimer] = useState(new Date());
	const [search, setSearch] = useState('');

	useEffect(() => {
		setInterval(TimerRunning, 1000);
	});

	const TimerRunning = () => {
		setTimer(new Date());
	};

	useEffect(() => {
		axios
			.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
			.then((res) => {
				console.log(res.data.meals);
				setData(res.data.meals);
			})
			.catch((error) =>
				console.log(error.message, 'there is some problem with the api'),
			);
	}, [search]);

	const changeHandler = (event) => {
		setSearch(event.target.value);
		// ? setSearch(event.target.value)
		// : alert('nothing found');
	};

	return (
		<div>
			<div className='main_header'>
				<div className='leftLogo'>
					<h2>The Meal DB</h2>
				</div>
				<div className='rightSection'>
					<form action='#'>
						<input
							onChange={changeHandler}
							type='text'
							name='search'
							id='search'
							placeholder='Enter Your Food...'
						/>

						<span>{timer.toLocaleTimeString()}</span>
					</form>
				</div>
			</div>

			{data.map((item) => (
				// <SingleMeals key={item.idMeal} item={item} />

				<div className='main_cart_main' key={item.idMeal}>
					<div className='main_cart_div'>
						<img src={item.strMealThumb} alt='' />
						<h1>{item.strMeal}</h1>
					</div>
				</div>
			))}

			{/* {meal.map((item) => {
				return <SingleMeals item={item} />;
			})} */}
		</div>
	);
};
