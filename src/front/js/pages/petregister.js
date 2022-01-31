import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

export const Registerpet = () => {
	const [values, setValues] = React.useState({ petname: "" });
	const handleChange = event => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};
	const handleFormSubmit = e => {
		e.preventDefault();
		auth.register(
			values.petname,
			values.gender,
			values.michrochip,
			values.found_date,
			values.injured,
			values.color,
			values.size,
			values.weight,
			values.zipcode,
			values.picture
		);
	};

	return (
		<div className="createPage">
			<Card className="row d-flex justify-content-center text-center">
				<Card.Body>
					<form id="petForm">
						<div className="row">
							<div className="form-group col-xs-6">
								<label htmlFor="petname">Possible Pet Name</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="Possible Pet Name"
									name="petname"
									value={values.petname}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="row">
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Gender</label>
								<input
									type="Gender"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="gender"
									name="gender"
									value={values.gender}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="row">
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Michrochip</label>
								<input
									type="michrochip"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="michrochip"
									name="michrochip"
									value={values.michrochip}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="row">
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Found Date</label>
								<input
									type="founddate"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="found date"
									name="founddate"
									value={values.found_date}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="row">
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Injured</label>
								<input
									type="injured"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="Injured"
									name="injured"
									value={values.injured}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="row">
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Color</label>
								<input
									type="color"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="Color"
									name="color"
									value={values.color}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="row">
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Size</label>
								<input
									type="size"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="Size"
									name="size"
									value={values.size}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="row">
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Weight</label>
								<input
									type="weight"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="Weight"
									name="weight"
									value={values.weight}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="row">
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Zipcode</label>
								<input
									type="zipcode"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="Zipcode"
									name="zipcode"
									value={values.zipcode}
									onChange={handleChange}
								/>
							</div>
						</div>

						<button className="btn btn-primary" type="submit" onClick={handleFormSubmit}>
							SUBMIT AND SPREAD THE AD
						</button>
					</form>
				</Card.Body>
			</Card>
		</div>
	);
};
