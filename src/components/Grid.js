import React from "react";
import WordRow from "./WordRow";

// Return a grid with a certain length and width
// Take props to style grid?

function Grid({ id, startingColumnIdx, columnCount, rowCount, colored }) {
	const gridRows = [];

	// print the number of rows needed in
	for (let index = 0; index < rowCount; index++) {
		// console.log(index);

		gridRows.push(
			<WordRow
				rowIndex={index}
				columnCount={columnCount}
				startingColumnIdx={startingColumnIdx}
				colored={colored}
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
