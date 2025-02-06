import React from "react";

// Standard Tile in the Grid

function Tile({ idx, row, columnCount, colored }) {
	// console.log(idx);

	console.log({
		index: idx,
		row: row,
		column: columnCount,
	});

	const bgColors = {
		5: "bg-appGreen",
		6: "bg-appYellow",
		7: "bg-appRed",
	};

	return (
		<div
			id={idx}
			className={`w-14 h-14 p-1 text-xl text-appGrey border border-solid rounded-md border-appGrey ${
				colored === "yes" ? bgColors[columnCount] : "bg-transparent"
			}`}
		></div>
	);
}

export default Tile;
