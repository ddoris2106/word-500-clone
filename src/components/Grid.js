import React from "react";
import WordRow from "./WordRow";

// Return a grid with a certain length and width
// Take props to style grid?

function Grid({ id, children }) {
	return (
		<div id={id} className="flex flex-col gap-1">
			{children}
		</div>
	);
}

export default Grid;
