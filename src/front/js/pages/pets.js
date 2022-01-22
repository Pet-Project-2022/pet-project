import React, { useState, useEffect, useContext } from "react";
import "../../styles/pets.scss";
import Button from "react-bootstrap/Button";

export const Pet = () => {
	return (
		<div className="card w-25 p-3">
			<img
				className="card-img-top"
				src="https://cloudfront-us-east-1.images.arcpublishing.com/gmg/BN6CBRWE4RBOPC3KT5DVP4KFZI.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
			</div>
			<Button />
			<ul className="post-details list-group list-group-flush">
				<li className="list-group-item">Name: </li>
				<li className="list-group-item">Color: </li>
				<li className="list-group-item">Location: </li>
			</ul>

			<div className="card-body">
				<a href="#" className="card-link">
					Card link
				</a>
				<a href="#" className="card-link">
					Another link
				</a>
			</div>
		</div>
	);
};
