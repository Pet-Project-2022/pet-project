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
			<div className="topText">
				<h1>Pet Amber Alert</h1>
				<h2>Start your Alet Now! It is Free!!</h2>
				<h3>Spread the ad throughout our community and help us to save our Pets.</h3>
			</div>
			<div className="loginF">
				<div className="login">
					<h1 className="loginTitle">Choose a Login Method</h1>
					<div className="loginArea">
						<div className="left">
							<div className="loginButton google">
								<img src={Google} alt="" className="icon" />
								Google
							</div>
							<div className="loginButton facebook">
								<img src={Facebook} alt="" className="icon" />
								Facebook
							</div>
						</div>
						<div className="center">
							<div className="line" />
							<div className="or">OR</div>
						</div>
						<div className="right">
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
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => login.login(email, password)}>
								Login button
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
