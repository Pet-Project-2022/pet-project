import React from "react";
import "../../styles/createUser.scss";
import Button from "react-bootstrap/Button";
import create from "zustand";
import { persist } from "zustand/middleware";
import "../../styles/createUser.scss";

export const useAuth = create(
	persist(
		set => ({
			error: false,
			success: false,
			token: null,

			register: async (email, password) => {
				const response = await fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ email, password })
				});

				if (response.status === 204) {
					set({ success: true });
				} else {
					set({ error: true });
				}
			},

			login: async (email, password) => {
				const response = await fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ email, password })
				});

				if (response.status === 200) {
					const payload = await response.json();
					set({ token: payload.token });
				} else {
					set({ error: true });
				}
			},

			logout: () => set({ token: null })
		}),
		{
			name: "auth-app",
			getStorage: () => sessionStorage
		}
	)
);

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [full_name, setFull_name] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [error, setError] = useState(null);
	const [LoginStatus, setLoginStatus] = useState("");
	const [messageState, setMessageState] = useState({
		isActive: false,
		message: "hello"
	});

	const handleSubmit = e => {
		e.preventDefault();
		console.log(email, password, full_name, zipcode);
		actions
			.signup(email, password, full_name, zipcode, setMessageState)
			.then(data => history.push("/userDashboard"))
			.catch(error => {
				setError(error);
				console.log("This is an error", error);
			});
	};

	return (
		<div className="createPage">
			<form id="createUserForm">
				<div className="row">
					<div className="form-group col-xs-6">
						<label htmlFor="fullname">Full Name</label>
						<input type="text" className="form-control" id="name" placeholder="full name" />
					</div>
				</div>
				<div className="row">
					<div className="form-group">
						<label htmlFor="exampleFormControlInput1">Email</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="email"
						/>
					</div>
				</div>
				<div className="row">
					<div className="form-group">
						<label htmlFor="exampleFormControlInput1">Zip Code</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="zip code"
						/>
					</div>
				</div>
				<div className="row">
					<div className="form-group">
						<label htmlFor="exampleFormControlInput1">Username</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="username"
						/>
					</div>
				</div>
				<div className="row">
					<div className="form-group">
						<label htmlFor="exampleFormControlInput1">Password</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="password"
						/>
					</div>
				</div>
				<div className="checkagreement">
					<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />

					<label className="agretext">
						I Agree with the Privacy Policy and the Terms of Service (Agreement Policy)
					</label>
				</div>
				<button className="btn btn-primary" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};
