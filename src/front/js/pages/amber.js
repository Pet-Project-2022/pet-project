import React from "react";
import "../../styles/amber.scss";
import Button from "react-bootstrap/Button";
import Google from "../component/imgs/gl.png";
import Facebook from "../component/imgs/fb.png";

export const Amber = () => {
	return (
		<div className="container">
			<div className="row">
				<h1>Pet Amber Alert Page</h1>
				<h2>Start your Alet Now! It is Free!!</h2>
				<h3>Enter your pet information and spread the ad throughout our community.</h3>
				<div className="input-group">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<input type="radio" aria-label="Radio button for following text input" />
						</div>
					</div>
					<input type="text" className="form-control" aria-label="Text input with radio button" />
				</div>
				<div className="input-group">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<input type="radio" aria-label="Radio button for following text input" />
							<label className="radio1">Pet Lost</label>
						</div>
						<div>
							<input type="text" className="form-control" aria-label="Text input with radio button" />
							<label className="radio2">Pet Found</label>
						</div>
					</div>
				</div>
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
