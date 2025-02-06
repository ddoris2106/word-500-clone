import React from "react";

// Standard Tile in the Grid

function Tile({ idx, row, columnCount }) {
	console.log({
		index: idx,
		row: row,
		column: columnCount,
	});

	return (
		<div
			className="w-14 h-14 p-1 text-xl text-appGrey bg-transparent 
					border-2 border-solid rounded-md border-appGrey"
		></div>
	);
}

export default Tile;
