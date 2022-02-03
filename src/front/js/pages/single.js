import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, Button } from "react-router-dom";
import { Context } from "../store/appContext";

export const OnePet = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron">
			<div style={{ width: "800px", height: "600px", backgroundColor: "grey", float: "left" }} />
			<h1 className="display-4" />
			<div className="singlepet">
				<img
					src="https://www.humanesociety.org/sites/default/files/styles/768x326/public/2020-07/dog-509745.jpg?h=e22bf01e&itok=MGmnQnfa"
					alt=""
					className="petimage"
				/>
				<h1 className="petTitle">Title Test</h1>
				<p className="petName">Name</p>
				<p className="petMicrochip">Microchip</p>
				<p className="foundDate">Found Date</p>
				<p className="injured">Injured</p>
				<p className="color">Color</p>
				<p className="size">Size</p>
				<p className="weight">weight</p>
				<p className="zipcode">Zipcode</p>
			</div>

			<hr className="my-4" />
			<Button>
				<p>Alert owner</p>
			</Button>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
