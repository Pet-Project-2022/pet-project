import React from "react";
import "../../styles/createUser.scss";
import Button from "react-bootstrap/Button";

export const Userform = () => {
	return (
		<div className="createPage">
			<form id="createUserForm">
				<div className="row">
					<div className="form-group col-xs-6">
						<label htmlFor="firstname">First Name</label>
						<input type="text" className="form-control" id="firstName" placeholder="first name" />
					</div>
					<div className="form-group col-xs-6">
						<label htmlFor="lastname">Last Name</label>
						<input type="text" clasName="form-control" id="lastName" placeholder="last name" />
					</div>
				</div>
				<div className="row">
					<div className="form-group">
						<label htmlFor="exampleFormControlInput1">Email</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="email"
						/>
					</div>
				</div>
				<div className="row">
					<div className="form-group">
						<label htmlFor="exampleFormControlInput1">Zip Code</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="zip code"
						/>
					</div>
				</div>
				<div className="row">
					<div className="form-group">
						<label htmlFor="exampleFormControlInput1">Username</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="username"
						/>
					</div>
				</div>
				<div className="row">
					<div className="form-group">
						<label htmlFor="exampleFormControlInput1">Password</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="password"
						/>
					</div>
				</div>
				<div className="input-group">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<input type="radio" aria-label="Radio button for following text input" />
						</div>
					</div>
					<input type="text" className="form-control" aria-label="Text input with radio button" />
					<label className="radio3">
						{" "}
						I Agree with the Privacy Policy and the Terms of Service (Agreement Policy)
					</label>
				</div>
				<button className="btn btn-primary" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};
