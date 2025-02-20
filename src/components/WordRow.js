import React from "react";
import Tile from "./Tile";

// Contains the row of x amount of tiles
function WordRow({ gridType, rowIndex, columnCount, startingColumnIdx }) {
	const rowTiles = [];

	let limit = parseInt(startingColumnIdx) + parseInt(columnCount);

	// const poulateRow = (rowIndex, columnCount) => {
	for (let colIdx = parseInt(startingColumnIdx); colIdx < limit; colIdx++) {
		let idx = `${rowIndex}-${colIdx}`;

		// console.log(idx);

		rowTiles.push(
			<Tile
				idx={idx}
				gridType={gridType}
				row={rowIndex}
				columnCount={colIdx}
			/>
		);
	}
	// };

	// poulateRow();

	// console.log(rowTiles);

	return (
		<div className="flex flex-row gap-1 w-full h-auto bg-transparent">
			{rowTiles}
		</div>
	);
}

export default WordRow;
