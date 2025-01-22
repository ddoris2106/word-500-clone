import React from "react";
import Grid from "./Grid";

// Setup Game Board
// 8x5 grid next to a 8x3 grid
function GameBoard() {
	return (
		<div className="flex flex-row content-center justify-center w-full gap-x-4">
			<Grid
				id="guessGrid"
				columnCount="5"
				rowCount="8"
			/>
			<Grid
				id="resultsGrid"
				columnCount="3"
				rowCount="8"
			/>
		</div>
	);
}

export default GameBoard;
