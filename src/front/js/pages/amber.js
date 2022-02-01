import React from "react";
import "../../styles/amber.scss";
import Button from "react-bootstrap/Button";
import Google from "../component/imgs/gl.png";
import Facebook from "../component/imgs/fb.png";

export const Amber = () => {
	return (
		<div className="ambercontainer">
			<div className="topText">
				<h1>Pet Amber Alert Page</h1>
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
							<input type="text" placeholder="Username" />
							<input type="text" placeholder="Password" />
							<button className="submit">Login</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
