import React, { useState, useEffect, useContext } from "react";
import useSWR from "swr";
import { Container } from "react-bootstrap";
import { Petcard } from "../component/petcard";

export async function petFetch(path) {
	const response = await fetch("https://3001-diegomarteens-petproject-a7mk5aii0zh.ws-us30.gitpod.io" + path);
	if (response.status === 200) {
		const payload = await response.json();

		return payload;
	}
	throw new Error();
}

export const Pet = () => {
	const { data, isValidating } = useSWR("/api/pet", petFetch);
	return (
		<Container className="text mt-5 bgmain">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{data &&
					data.map((item, index) => {
						return (
							<Petcard name={item.possible_name} color={item.color} location={item.zipcode} key={index} />
						);
					})}
			</div>
		</Container>
	);
};
