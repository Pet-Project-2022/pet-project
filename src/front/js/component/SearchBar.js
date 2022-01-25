import React from "react";

export function SearchPets() {
	const [task, setTask] = React.useState("");

	return (
		<div className="container">
			<div>
				<h1 className="title">Search Lost Pets</h1>
			</div>
			<div className="app">
				<input
					className="input"
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
			</div>
		</div>
	);
}
