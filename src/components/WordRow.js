import React from "react";
import Tile from "./Tile";

// Contains the row of x amount of tiles
function WordRow({ rowIndex, columnCount }) {
	const rowTiles = [];

	// const poulateRow = (rowIndex, columnCount) => {
	for (let colIdx = 0; colIdx < columnCount; colIdx++) {
		let idx = rowIndex + colIdx;

		rowTiles.push(
			<Tile
				index={idx}
				row={rowIndex}
				columnCount={colIdx}
			/>
		);
	}
	// };

	// poulateRow();

	console.log(rowTiles);

	return (
		<div className="flex flex-row gap-1 w-full h-auto bg-transparent">
			{rowTiles}
		</div>
	);
}

export default WordRow;
