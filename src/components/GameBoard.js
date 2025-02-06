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
				startingColumnIdx="0"
				rowCount="8"
				colored="no"
			/>
			<Grid
				id="resultsGrid"
				columnCount="3"
				startingColumnIdx="5"
				rowCount="8"
				colored="yes"
			/>
		</div>
	);
}

export default GameBoard;
