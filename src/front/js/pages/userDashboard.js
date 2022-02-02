import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context, Row, Col, Card, Image } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/userDashboard.scss";
import Button from "react-bootstrap/Button";

export const MyPosts = props => {
	const params = useParams();
	const [lostPet, setLostPet] = useState([]);

	return (
		<div className="name justify-content-center">
			<ol id="horizontal-list">
				<li className="listItem">
					<input className="input" type="text" placeholder="pet title" />
					<button className="removeBtn">Remove</button>
				</li>
			</ol>
		</div>
		/*<div className="input">
			<input
					className="input"
					type="text"
					onChange={e => setTask(e.target.value)}
					value={task}
				/>
			<ol id="horizontal-list">
				{lostPet.map((item, index) => {
					return (
						<li className="listItem" key={index}>
							{item}
							<button
								className="removeBtn"
								onClick={() => {
									const list = lostPet.filter((e, i) => {
										return i !== index;
									});
									setLostPet(list);
								}}>
								{" "}
								Remove
							</button>
						</li>
					);
				})}
			</ol>
		</div>*/
	);
};
