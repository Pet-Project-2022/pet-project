import React from "react";
import { SearchPets } from "../component/SearchBar";
import { Container } from "react-bootstrap";
import useSWR from "swr";
import { Pet } from "./pets";

export const Home = () => {
	return (
		<div className="mainpage">
			<Container className="text-center mt-5 bgmain">
				<SearchPets />

				<Pet />
			</Container>
		</div>
	);
};
