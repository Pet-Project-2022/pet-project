import React from "react";
import { SearchPets } from "../component/SearchBar";
import { Container } from "react-bootstrap";
import { Pet } from "./pets";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="container">
			<Container className="text-center mt-5 bgmain">
				<SearchPets />

				<Pet />
			</Container>
		</div>
	);
};
