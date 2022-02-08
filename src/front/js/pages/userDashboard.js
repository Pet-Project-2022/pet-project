import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../../styles/userDashboard.scss";
import useSWR from "swr";
import { useHistory } from "react-router";
import { useAuth } from "./register";

export const MyPosts = () => {
	const params = useParams();
	const [lostPet, setLostPet] = useState([]);
	const auth = useAuth();
	const history = useHistory();

	async function fetchMyPets(path) {
		const response = await fetch(process.env.BACKEND_URL + path, {
			headers: {
				Authorization: "Bearer " + auth.token
			}
		});
		if (response.status === 200) {
			const payload = await response.json();
			return payload;
		}
		throw new Error();
	}

	React.useEffect(
		() => {
			if (!auth.token) {
				history.push("/login");
			}
		},
		[auth.token]
	);
	const { data, isValidating } = useSWR("/api/pets", fetchMyPets);
	return (
		<Container>
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

			<div className="input">
				<input className="input" type="text" onChange={e => setTask(e.target.value)} />
				<ol id="horizontal-list">
					{data &&
						data.map((item, index) => {
							return (
								<li className="listItem" key={index}>
									{item.possible_name}
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
			</div>
		</Container>
	);
};
