import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import create from "zustand";
import { persist } from "zustand/middleware";
import "../../styles/register.scss";
import { Card } from "react-bootstrap";

export const useAuth = create(
	persist(
		(set, get) => ({
			error: false,
			success: false,
			token: null,
			isLogged: () => {
				return !!get().token;
			},
			register: async (name, email, password, zipcode) => {
				const response = await fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ email, password, name, zipcode })
				});
				if (response.status === 204) {
					set({ success: true });
				} else {
					set({ error: true });
				}
				console.log(response);
			},
			login: async (email, password) => {
				const response = await fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ email, password })
				});
				if (response.status === 200) {
					const payload = await response.json();
					set({ token: payload.token });
				} else {
					set({ error: true });
				}
			},
			logout: () => set({ token: null })
		}),
		{
			name: "auth-app",
			getStorage: () => sessionStorage
		}
	)
);

export const Register = () => {
	const [values, setValues] = React.useState({ fullname: "" });
	const [errors, setErrors] = React.useState({ errors: "" });
	const auth = useAuth();
	const history = useHistory();

	const handleChange = event => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};
	const handleFormSubmit = e => {
		e.preventDefault();
		auth.register(values.fullname, values.email, values.password, values.zipcode);

		history.push("/userDashboard");
	};
	return (
		<div className="createPage justify-content-center">
			<Card className="row2 d-flex justify-content-center text-center”">
				<Card.Body>
					<form id="“createUserForm”">
						<div className="row3">
							<div className="form-group">
								<div className="form-group col-xs-6">
									<label htmlFor="fullname">Full Name</label>
									<input
										type="text"
										className="form-control"
										id="name"
										placeholder="full name"
										name="fullname"
										value={values.fullname}
										onChange={handleChange}
									/>
									{errors.fullname && <p className="error">{errors.fullname}</p>}
								</div>
							</div>
							<div className="form-group">
								<div className="form-group">
									<label htmlFor="exampleFormControlInput1">Email</label>
									<input
										type="email"
										className="form-control"
										id="exampleFormControlInput1"
										placeholder="email"
										name="email"
										value={values.email}
										onChange={handleChange}
									/>
									{errors.email && <p className="error">{errors.email}</p>}
								</div>
							</div>
							<div className="form-group">
								<div className="form-group">
									<label htmlFor="exampleFormControlInput1">Zip Code</label>
									<input
										type="zipcode"
										className="form-control"
										id="exampleFormControlInput1"
										placeholder="zip code"
										name="zipcode"
										value={values.zipcode}
										onChange={handleChange}
									/>
									{errors.zipcode && <p className="error">{errors.zipcode}</p>}
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Password</label>
								<input
									type="password"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="password"
									name="password"
									value={values.password}
									onChange={handleChange}
								/>
								{errors.password && <p className="error">{errors.password}</p>}
							</div>

							<div className="checkagreement">
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox1"
									value="option1"
								/>
								<label className="checkbox">
									I Agree with the Privacy Policy and the Terms of Service (Agreement Policy)
								</label>
							</div>
							<button className="btn btn-primary" type="submit" onClick={handleFormSubmit}>
								SIGN UP
							</button>
						</div>
					</form>
				</Card.Body>
			</Card>
		</div>
	);
};
