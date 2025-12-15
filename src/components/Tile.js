import React, { useEffect, useState } from "react";

// Standard Tile in the Grid

// Change to take in initial color
// Add state for tile color
function Tile({ idx, value, initialColor, onClick = undefined }) {
	const [currentColor, setCurrentColor] = useState(initialColor);
	const [clickcount, setClickCount] = useState(0);

	// Change the background color when the tile is clicked
	const handleClick = () => {
		if (onClick !== undefined) {
			let newCount = clickcount + 1;
			setClickCount(newCount);

			// Call the function to get the new color
			setCurrentColor(onClick(newCount));
		}
	};

	return (
		<div
			id={idx}
			className={`w-14 h-14 p-1 text-xl text-appGrey border border-solid rounded-md border-appGrey ${currentColor}`}
			onClick={handleClick}
		>
			{value}
		</div>
	);
}

export default Tile;
