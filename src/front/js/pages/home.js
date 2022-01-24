import React from "react";
import "../../styles/home.scss";
import { Pet } from "./pets";
import { SearchPets } from "../component/SearchBar";

export const Home = () => (
	<div className="text-center mt-5 bgmain">
		<SearchPets />
		<Pet />
	</div>
);
