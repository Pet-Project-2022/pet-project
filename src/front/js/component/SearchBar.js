import React from "react";
import "../../styles/searchBar.scss";

export function SearchPets() {
	const [task, setTask] = React.useState("");

	return (
		<div className="container">
			<div>
				<h1 className="title">Search Lost Pets</h1>
			</div>
			<div>
				<input
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
				<input type="button" value=" Submit " id="SubmitButton" />
				<br />
				<a href="/amber/" className="amberLink">
					Start your Alert Now! Its Free!!
				</a>
			</div>
		</div>
	);
}
