import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, Button } from "react-router-dom";
import { Context } from "../store/appContext";

export const OnePet = () => {
	return (
		<div className="jumbotron">
			<div style={{ width: "800px", height: "600px", backgroundColor: "grey", float: "left" }} />
			<h1 className="display-4" />
			<p>Name: {}</p>
			<p>Gender: {}</p>
			<p>Microchip: {}</p>
			<p>Found Date: {}</p>
			<p>Injured: {}</p>
			<p>Color: {}</p>
			<p>Size: {}</p>
			<p>Weight: {}</p>
			<p>Zipcode: {}</p>

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
