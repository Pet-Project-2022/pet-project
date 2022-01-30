import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Logo from "../component/imgs/logo.png";
import "../../styles/navbar.scss";

export const NavBar = () => {
	const { store } = useContext(Context);
	const history = useHistory();

	const handleLogOut = () => {
		localStorage.clear();
		history.push("/");
		location.reload();
	};

	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">
					<Nav.Link href="/">
						<img
							src={Logo}
							width="60"
							height="30"
							className="d-inline-block align-top"
							alt="Lost Pets logo"
						/>
					</Nav.Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="/login">Login</Nav.Link>
						<Nav.Link href="/signup">Sign up</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
