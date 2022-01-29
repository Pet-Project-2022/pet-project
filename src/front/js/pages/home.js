import React from "react";
import "../../styles/home.scss";
import { Pet } from "./pets";
import { SearchPets } from "../component/SearchBar";
import { Amber } from "./amber";

export async function PetFetch(path) {
	const response = await fetch("/api/pet" + path);
	if (response.status === 200) {
		const payload = await response.json();

		return payload;
	}
	throw new Error();
}

export const Home = () => (
	<div className="text-center mt-5 bgmain">
		<SearchPets />
		<div className="row">
			<Pet name={"blackie"} color={"black"} location={"Miami"} />
			<Pet name={"red"} color={"red"} location={"Fort Lauderdale"} />
			<Pet name={"whitie"} color={"white"} location={"Homestead"} />
			<Pet name={"pumpkin"} color={"orange"} location={"Hiajeliah"} />
		</div>
	</div>
);
