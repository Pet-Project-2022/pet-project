import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/DropdownItem";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Lost Pets</span>
				</Link>
				<div className="ml-auto d-inline-block">
					<Link to="/pets">
						<span className="navbar-brand mb-0 h1">Pets</span>
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
