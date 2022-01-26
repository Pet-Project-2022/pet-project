import React from "react";
import "../../styles/amber.scss";
import Button from "react-bootstrap/Button";

export const Amber = () => {
	return (
		<div className="container">
			<div className="row">
				<h1>Pet Amber Alert Page</h1>
				<h2>Start your Alet Now! It is Free!!</h2>
				<h3>Enter your pet information and spread the ad throughout our community.</h3>
				<div className="input-group">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<input type="radio" aria-label="Radio button for following text input" />
						</div>
					</div>
					<input type="text" className="form-control" aria-label="Text input with radio button" />
				</div>
				<div className="input-group">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<input type="radio" aria-label="Radio button for following text input" />
							<label className="radio1">Pet Lost</label>
						</div>
						<div>
							<input type="text" className="form-control" aria-label="Text input with radio button" />
							<label className="radio2">Pet Found</label>
						</div>
					</div>
				</div>
				<>
					<a href={"/createUser/"} className="btn btn-primary btn-lg">
						Sign Up
					</a>
					<a href={"/login/"} className="btn btn-primary btn-lg">
						Log In
					</a>
					<button type="button" className="btn btn-primary btn-lg">
						Login With Facebook
					</button>
					<button type="button" className="btn btn-primary btn-lg">
						Login With Gmail
					</button>
				</>
			</div>
		</div>
	);
};
