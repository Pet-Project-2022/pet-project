import React from "react";
import "../../styles/home.scss";
import { Pet } from "./pets";
import { SearchPets } from "../component/SearchBar";
import { Amber } from "./amber";
import useSWR from "swr";

export async function petFetch(path) {
	const response = await fetch(process.env.BACKEND_URL + path);
	if (response.status === 200) {
		const payload = await response.json();

		return payload;
	}
	throw new Error();
}

export const Home = () => {
	const { data, isValidating } = useSWR("/api/pet", petFetch);
	return (
		<div className="text-center mt-5 bgmain">
			<SearchPets />
			<div className="row">
				{data &&
					data.map((item, index) => {
						return <Pet name={item.name} color={item.color} location={item.location} key={index} />;
					})}
			</div>
		</div>
	);
};
