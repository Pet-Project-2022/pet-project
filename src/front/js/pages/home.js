import React from "react";
import "../../styles/home.scss";
import { Pet } from "./pets";
import { SearchPets } from "../component/SearchBar";
import { Amber } from "./amber";

export const Home = () => (
	<div className="text-center mt-5 bgmain">
		<SearchPets />
		<Pet />
	</div>
);
