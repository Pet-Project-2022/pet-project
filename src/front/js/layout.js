import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Pet } from "./pages/pets";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { Amber } from "./pages/amber";
import { Registerpet } from "./pages/petregister";
import injectContext from "./store/appContext";

import { NavBar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Ppolicy } from "./pages/ppolicy";

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

						<Route exact path="/ppolicy">
							<Ppolicy />
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

						<Route exact path="/petregister">
							<Registerpet />
						</Route>

						<Route exact path="/userDashboard">
							<Dashboard />
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
