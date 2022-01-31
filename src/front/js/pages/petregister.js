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
				<Card.Body className="bcard">
					<form id="petForm">
						<div className="form-group">
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
						<div className="form-group">
							<div className="form-group">
								<label
									htmlFor="defaultGender"
									name="gender"
									value={values.size}
									onChange={handleChange}>
									Gender
								</label>

								<select id="defaultGender">
									<option value="">--Please choose an option--</option>
									<option value="female">Female</option>
									<option value="male">Male</option>
								</select>
							</div>
						</div>
						<p />
						<div className="form-group">
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Michrochip</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="michrochip"
									name="michrochip"
									value={values.michrochip}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Found Date</label>
								<input
									type="date"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="found date"
									name="founddate"
									value={values.found_date}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="form-group">
								<label
									htmlFor="defaultInjured"
									name="injured"
									value={values.size}
									onChange={handleChange}>
									Injured
								</label>

								<select id="defaultInjured">
									<option value="">--Please choose an option--</option>
									<option value="yes">Yes</option>
									<option value="no">No</option>
								</select>
							</div>
						</div>
						<p />
						<div className="form-group">
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
						<div className="form-group">
							<div className="form-group">
								<label htmlFor="defaultSizes" name="size" value={values.size} onChange={handleChange}>
									Size
								</label>

								<select id="defaultSizes">
									<option value="">--Please choose an option--</option>
									<option value="small">Small</option>
									<option value="medium">Medium</option>
									<option value="big">Big</option>
								</select>
							</div>
						</div>
						<p />
						<div className="form-group">
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Weight</label>
								<input
									type="number"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="1.0"
									step="0.01"
									min="0"
									max="20"
									name="weight"
									value={values.weight}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Zipcode</label>
								<input
									type="number"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="Zipcode"
									name="zipcode"
									value={values.zipcode}
									onChange={handleChange}
								/>
							</div>
						</div>
						<button className="btn btn-primary" type="file" onClick="">
							Upload Picture
						</button>
						<p />
						<button className="btn btn-primary" type="submit" onClick={handleFormSubmit}>
							SUBMIT AND SPREAD THE AD
						</button>
					</form>
				</Card.Body>
			</Card>
		</div>
	);
};
