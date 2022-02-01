import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context, Row, Col, Card, Image, Button } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/userDashboard.scss";
import Button from "react-bootstrap/Button";

export const MyPosts = props => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [lostPet, setLostPet] = useState(null);
  
  return (
    <ol id="horizontal-list">
					{list.map((item, index) => {
						return (
							<li className="listItem" key={index}>
								{item}
								<button
									className="removeBtn"
									onClick={() => {
										const newList = list.filter((e, i) => {
											return i !== index;
										});
										setList(newList);
									}}>
									{" "}
									Remove
								</button>
							</li>
						);
					})}
					<p className="paper">{`There are ${list.length} items left`}</p>
				</ol>
  );
};