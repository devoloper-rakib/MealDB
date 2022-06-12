import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Meal } from './Component/TheMealDb/Meal';
import Home from './Component/Route/Home';
import About from './Component/Route/About';
import ContactUs from './Component/Route/ContactUs';
import SingleMeal from './Component/Route/SingleMeal';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contactUs' element={<ContactUs />} />
				<Route path='/foods' element={<Meal />} />
				<Route path='/foods/:foodId' element={<SingleMeal />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
