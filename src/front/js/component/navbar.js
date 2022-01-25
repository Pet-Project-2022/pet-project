import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
						className="btn btn-primary btn-sm"
						type="button"
						id="login"
						data-bs-toggle="dropdown"
						aria-bs-toggle="dropdown"
						aria-expanded="false">
						Login
					</button>
					<button
						className="btn btn-primary btn-sm"
						type="button"
						id="signUp"
						data-bs-toggle="dropdown"
						aria-bs-toggle="dropdown"
						aria-expanded="false">
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
};
