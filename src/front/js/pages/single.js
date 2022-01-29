import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron">
			<div style={{ width: "800px", height: "600px", backgroundColor: "greenyellow", float: "left" }} />
			<h1 className="display-4">{pets[params.theid]}</h1>
			<p>This is a single page for the Lost Pets application component.</p>
			<hr className="my-4" />

			<Link to="/pets">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};