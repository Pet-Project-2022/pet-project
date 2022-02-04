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
		<Container className="text-center mt-5 bgmain">
			<div className="row">
				{data &&
					data.map((item, index) => {
						return <Petcard name={item.name} color={item.color} location={item.location} key={index} />;
					})}
			</div>
		</Container>
	);
};
