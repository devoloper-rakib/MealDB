import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../Route/Navbar';

import './Meal.css';
import AllMeal from './AllMeal';
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
							value={search}
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

			<br />
			<br />
			<br />
			<br />
			<br />
			<Navbar />

			<div className='main_container'>
				{data == null ? (
					<h1 className='not_found'>No Food Found !!!</h1>
				) : (
					data.map((item) => {
						return <AllMeal key={item.idMeal} {...item} />;
					})
				)}
			</div>

			{/* {meal.map((item) => {
				return <SingleMeals item={item} />;
			})} */}
		</div>
	);
};
