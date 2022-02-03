import React from "react";
import "../../styles/searchBar.scss";

export function SearchPets() {
	const [task, setTask] = React.useState("");

	return (
		<div className="containerSearchbar">
			<div>
				<h1 className="title">Community of Lost and Found Pets</h1>
			</div>
			<div className="searchbar">
				<input
					placeholder="Start Search Your Pet Here!"
					className="input"
					style={{ width: "300px" }}
					type="text"
					onChange={e => setTask(e.target.value)}
					value={task}
					onKeyDown={e => {
						if (e.key === "Enter") {
							const newList = list.concat([task]);
							setList(newList);
							setTask("");
						}
					}}
				/>
				<input type="button" value=" Filter " id="FilterButton" />
				<button type="input" value=" Submit " id="SubmitButton">
					Search Pet
				</button>
				<br />
				<a href="/amber/" className="amberLink">
					Start your Alert Now! Its Free!!
				</a>
			</div>
		</div>
	);
}
