import React, { useEffect } from "react";
import "../../styles/amber.scss";
import Button from "react-bootstrap/Button";
import Google from "../component/imgs/gl.png";
import Facebook from "../component/imgs/fb.png";
import { useHistory } from "react-router";
import { useAuth } from "./register";

export const Amber = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const history = useHistory();
	const login = useAuth();
	useEffect(
		() => {
			if (login.token) {
				history.push("/userDashboard");
			}
		},
		[login.token]
	);

	return (
		<div className="ambercontainer">
			<div className="loginArea">
				<div className="inputArea">
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={email}
						onChange={ev => setEmail(ev.target.value)}
						placeholder="Username"
					/>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						value={password}
						onChange={ev => setPassword(ev.target.value)}
						placeholder="Password"
					/>
					<button type="button" className="btn btn-primary" onClick={() => login.login(email, password)}>
						Login button
					</button>
					<br />
				</div>
			</div>
		</div>
	);
};
