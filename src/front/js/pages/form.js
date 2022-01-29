import React from "react";
import "../../styles/petform.scss";

export const Petsform = () => {
	return (
		<div className="container">
			<div className="pets-wrapper">
				<div className=" topforminfo">
					<h2>Start Your Alert Now! Its Free!!</h2>
					<p className="maintext">Enter your PET information and spread the add throughout our community</p>
				</div>
				<div className="row">
					<div className="radiobutton">
						<div className="form-check">
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio1"
									value="option1"
								/>
								<label className="form-check-label">Pet Missed</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio2"
									value="option2"
								/>
								<label className="form-check-label">Pet Found</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="form-group col-xs-6">
					<label htmlFor="name">Name</label>
					<input type="text" className="petname" id="name" placeholder="Name" />
				</div>
				<div className="form-group col-xs-6">
					<label htmlFor="color">Color</label>
					<input type="text" clasName="petcolor" id="color" placeholder="Color" />
				</div>
				<div className="form-group col-xs-6">
					<label htmlFor="height">Height</label>
					<input type="text" clasName="petheight" id="height" placeholder="Height" />
				</div>
				<div className="form-group col-xs-6">
					<label htmlFor="weight">Weight</label>
					<input type="text" clasName="petweight" id="weight" placeholder="Weight" />
				</div>
				<div className="form-group col-xs-6">
					<label htmlFor="Zipcode">Zipcode</label>
					<input type="text" clasName="petzipcode" id="zipcode" placeholder="Zipcode" />
				</div>
				<div className="form-group col-xs-6">
					<label htmlFor="species">Species</label>
					<input type="text" clasName="petspecies" id="species" placeholder="Species" />
				</div>
			</div>
			<div className="uploadbutton">
				<button className="btn btn-primary" type="submit" href="/Uploadimage">
					Upload Picture
				</button>
			</div>
			<div className="submitbutton">
				<button className="btn btn-primary" type="submit">
					Submit
				</button>
			</div>
		</div>
	);
};
