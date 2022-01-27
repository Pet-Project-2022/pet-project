import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/createUser.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [first_name, setFirst_name] = useState("");
	const [last_name, setLast_name] = useState("");
	const [date, setDate] = useState("");
	const [error, setError] = useState(null);
	const [LoginStatus, setLoginStatus] = useState("");
	const history = useHistory();
	const [messageState, setMessageState] = useState({
		isActive: false,
		message: "hello"
	});

	const handleSubmit = e => {
		e.preventDefault();
		console.log(email, password, first_name, last_name, date);
		actions
			.signup(email, password, first_name, last_name, date, setMessageState)
			.then(data => history.push("/userDashboard"))
			.catch(error => {
				setError(error);
				console.log("This is an error", error);
			});
	};

	return (
		<div className="signupImage">
			<div className="signupBackground vh-100">
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-12 col-md-8 col-lg-6 col-xl-5">
							<div className="card signupCardBackground shadow-3-strong" style={{ borderRadius: "2rem" }}>
								<ul className="nav d-flex justify-content-center" id="myTab" role="tablist" />
								<div className="form input d-flex justify-content-center">
									<form className="login" onSubmit={handleSubmit}>
										<div>
											<h1 className="signupTitle">Sign Up</h1>
										</div>
										<div>
											<div className="input-group-prepend" />

											<div className="email form-outline mb-4">
												<input
													name="name"
													type="first name"
													id="typeFirstNameX"
													className="form-control form-control-lg"
													placeholder="First Name"
													onChange={e => setFirst_name(e.target.value)}
													value={first_name}
												/>
											</div>
										</div>
										<div>
											<div className="input-group-prepend" />

											<div className="email form-outline mb-4">
												<input
													type="last name"
													id="typeLastNameX"
													className="form-control form-control-lg"
													placeholder="Last Name"
													onChange={e => setLast_name(e.target.value)}
													value={last_name}
												/>
											</div>
										</div>
										<div>
											<div className="input-group-prepend" />

											<div className="email form-outline mb-4">
												<input
													type="date"
													id="typeLastNameX"
													className="form-control form-control-lg"
													onChange={e => setDate(e.target.value)}
													value={date}
												/>
											</div>
										</div>
										<div>
											<div className="email form-outline mb-4">
												<input
													type="email"
													id="typeEmailX"
													className="form-control form-control-lg"
													placeholder="Email"
													onChange={e => setEmail(e.target.value)}
													value={email}
												/>
											</div>
										</div>
										<div className="form input d-flex justify">
											<div className="input-group-prepend" />
											<div className="password form-outline mb-4">
												<input
													type="password"
													id="typePasswordX"
													className="form-control form-control-lg"
													placeholder="Password"
													onChange={e => setPassword(e.target.value)}
													value={password}
												/>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
