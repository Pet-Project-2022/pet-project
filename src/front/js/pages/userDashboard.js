import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context, Row, Col, Card, Image } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/userDashboard.scss";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import { useAuth } from "./register";

export const MyPosts = props => {
	const params = useParams();
	const [lostPet, setLostPet] = useState([]);
	const auth = useAuth();
	const history = useHistory();

	React.useEffect(
		() => {
			if (!auth.token) {
				history.push("/login");
			}
		},
		[auth.token]
	);

	return (
		<div className="dash">
			<div className="name justify-content-center">
				<ol id="horizontal-list">
					<li className="listItem">
						<input className="input" type="text" placeholder="pet title" />
						<button className="btn btn-primary removeBtn">Remove</button>
					</li>
				</ol>
			</div>
			<div className="buttons">
				<a className="btn btn-primary" href="/petregister" role="button">
					Submint New Pet Info
				</a>
				<button className="btn btn-primary" onClick={() => auth.logout()}>
					Logout
				</button>
			</div>
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
