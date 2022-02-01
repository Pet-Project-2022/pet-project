import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, Button } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	console.log(params);

	console.log(store);

	return (
		<div className="jumbotron">
			<div style={{ width: "800px", height: "600px", backgroundColor: "grey", float: "left" }} />
			<h1 className="display-4">{params.theid}</h1>
			<p>
				Name: {}
			</p>
			<p>
				Color: {}
			</p>
			<p>
				Location: {}
			</p>
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

Single.propTypes = {
	match: PropTypes.object
};
