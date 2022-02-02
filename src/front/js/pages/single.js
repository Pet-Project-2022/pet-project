import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams, Button } from "react-router-dom";
import { Context } from "../store/appContext";

export const OnePet = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<div style={{ width: "800px", height: "600px", backgroundColor: "grey", float: "left" }} />
			<h1 className="display-4" />
			<p>This is a single page for a Lost Pets component. </p>

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
