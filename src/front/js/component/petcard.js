import React, { useState, useEffect, useContext } from "react";
import "../../styles/pets.scss";
import PropTypes from "prop-types";

export const Petcard = props => {
	return (
		<div className="row">
			<div className="row">
				<div className="card width: 3rem;">
					<img
						className="card-img-top"
						src={"https://cloudfront-us-east-1.images.arcpublishing.com/gmg/BN6CBRWE4RBOPC3KT5DVP4KFZI.jpg"}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">{props.gender}</h5>
						<a href="#" className="card-text">
							About Me!
						</a>
					</div>
					<ul className="post-details list-group list-group-flush">
						<li className="list-group-item">
							Name:
							{props.name}
						</li>
						<li className="list-group-item">Color: {props.color}</li>
						<li className="list-group-item">
							Zipcode:
							{props.location}
						</li>
					</ul>

					<div className="card-body">
						<button className="btn btn-primary" type="submit" onClick="">
							This Is My Pet!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Petcard.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string,
	location: PropTypes.string,
	gender: PropTypes.string
};
