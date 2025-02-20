import React from "react";
import WordRow from "./WordRow";

// Return a grid with a certain length and width
// Take props to style grid?

function Grid({ id, gridType, startingColumnIdx, columnCount, rowCount }) {
	const gridRows = [];

	// print the number of rows needed in
	for (let index = 0; index < rowCount; index++) {
		// console.log(index);

		gridRows.push(
			<WordRow
				gridType={gridType}
				rowIndex={index}
				columnCount={columnCount}
				startingColumnIdx={startingColumnIdx}
			/>
		);
	}

	return (
		<div
			id={id}
			className="flex flex-col gap-1"
		>
			{gridRows}
		</div>
	);
}

export default Grid;
