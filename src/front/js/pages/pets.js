import React, { useState, useEffect, useContext } from "react";
import "../../styles/pets.scss";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export const Pet = props => {
	return (
		<div className="row">
			<div className="card w-25 p-3">
				<img
					className="card-img-top"
					src={"https://cloudfront-us-east-1.images.arcpublishing.com/gmg/BN6CBRWE4RBOPC3KT5DVP4KFZI.jpg"}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.species}</h5>
					<a href="#" className="card-text">
						About Me!
					</a>
				</div>
				<Button />
				<ul className="post-details list-group list-group-flush">
					<li className="list-group-item">{props.name}</li>
					<li className="list-group-item">{props.color}</li>
					<li className="list-group-item">{props.location}</li>
				</ul>

				<div className="card-body">
					<button className="btn btn-primary" type="submit" onClick="">
						This Is My Pet!
					</button>
				</div>
			</div>
		</div>
	);
};

Pet.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string,
	location: PropTypes.string,
	species: PropTypes.string
};
