import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar'>
			<ul>
				<li>
					<a href='http://localhost:3000/home'>Home</a>
				</li>
				<li>
					<a href='http://localhost:3000/about'>About</a>
				</li>
				<li>
					<a href='http://localhost:3000/contactUs'>Contact</a>
				</li>
				<li>
					<a href='http://localhost:3000/foods'>Foods</a>
				</li>
			</ul>

			<h1>React Nav link</h1>

			<ul>
				<li>
					<NavLink
						to='/home'
						className={(navInfo) => (navInfo.isActive ? 'active' : null)}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/about'
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/contactUs'
						className={(nav) => (nav.isActive ? 'active' : undefined)}
					>
						Contact
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/foods'
						className={({ isActive }) => (isActive ? 'active' : undefined)}
					>
						Foods
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
