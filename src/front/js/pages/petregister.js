import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "../../styles/petregister.scss";
import { UploadImage } from "../component/UploadImage";

export const Registerpet = () => {
	const [values, setValues] = React.useState({ name: "" });
	const handleChange = event => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};
	const handleImageChange = image => {
		setValues({
			...values,
			image
		});
	};
	const handleFormSubmit = e => {
		setValues(
			values.name,
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
		<div className="petregis">
			<Card className="row2 d-flex justify-content-center text-center">
				<Card.Body className="bcard">
					<div className="form-group">
						<div className="form-group col-xs-6">
							<label htmlFor="name">Possible Pet Name</label>
							<input
								type="text"
								className="form-control"
								id="exampleFormControlInput1"
								placeholder="Possible Pet Name"
								name="name"
								value={values.name}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="form-group">
							<label htmlFor="defaultGender" name="gender" value={values.size} onChange={handleChange}>
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
							<label htmlFor="defaultInjured" name="injured" value={values.size} onChange={handleChange}>
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
					<UploadImage value={values.image} onChange={handleImageChange} />
					<p />
					<button className="btn btn-primary" type="submit" onClick={handleFormSubmit}>
						SUBMIT AND SPREAD THE AD
					</button>
				</Card.Body>
			</Card>
		</div>
	);
};
