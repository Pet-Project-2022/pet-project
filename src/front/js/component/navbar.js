import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/DropdownItem";

export const Navbar = () => {
	const favorites = useFavorites();

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Lost Pets App</span>
			</Link>
			<div className="ml-auto d-inline-block">
				<Link to="/pet">
					<span className="navbar-brand mb-0 h1">Pet</span>
				</Link>
			</div>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-bs-toggle="dropdown"
						aria-expanded="false">
						Dropdown
					</button>
				</div>
			</div>
		</nav>
	);
};