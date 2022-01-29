import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Pet } from "./pages/pets";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { Amber } from "./pages/amber";
import { Petsform } from "./pages/form";
import { UploadImage } from "./component/UploadImage";

import injectContext from "./store/appContext";

import { NavBar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Userform } from "./pages/userform";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route exact path="/pets">
							<Pet />
						</Route>

						<Route exact path="/amber">
							<Amber />
						</Route>

						<Route exact path="/login">
							<Login />
						</Route>

						<Route exact path="/register">
							<Register />
						</Route>

						<Route exact path="/dashboard">
							<Dashboard />
						</Route>

						<Route exact path="/userform">
							<Userform />
						</Route>
						<Route exact path="/UploadImage">
							<UploadImage />
						</Route>

						<Route exact path="/form">
							<Petsform />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
