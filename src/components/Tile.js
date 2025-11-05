import React from "react";

// Standard Tile in the Grid


// Change to take in initial color
// Add state for tile color
function Tile({ idx, gridType, value, row, columnCount }) {
	// console.log(idx);

	// console.log({
	// 	index: idx,
	// 	row: row,
	// 	column: columnCount,
	// });

	/*
	CONCAT IDX TO GET COLUMN INSTEAD OF PASSING COLUMN COUNT
	*/

	// const bgColors = {
	// 	5: "bg-appGreen",
	// 	6: "bg-appYellow",
	// 	7: "bg-appRed",
	// };

	return (
		<div
			id={idx}
			className={`w-14 h-14 p-1 text-xl text-appGrey border border-solid rounded-md border-appGrey ${
				gridType === "guessGrid"
					? "change on click"
					: bgColors[columnCount]
			}`}
		>{value}</div>
	);
}

export default Tile;
