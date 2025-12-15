import React from "react";
import Grid from "./Grid";
import { renderGrid } from "../hooks/renderGrid";

// Setup Game Board
// 8x5 grid next to a 8x3 grid
function GameBoard() {
	const gridData = {
		guessGrid: {
			columns: 5,
			rows: 8,
			startingColIdx: 0,
			guessGrid: true,
		},
		resultsGrid: {
			columns: 3,
			rows: 8,
			startingColIdx: 5,
			guessGrid: false,
		},
	};

	const bgColors = {
		5: "bg-appGreen",
		6: "bg-appYellow",
		7: "bg-appRed",
	};

	const guessGrid = renderGrid(gridData.guessGrid, bgColors);
	const resultsGrid = renderGrid(gridData.resultsGrid, bgColors);

	return (
		<div className="flex flex-row content-center justify-center w-full gap-x-4">
			<Grid id="guessGrid">{guessGrid}</Grid>
			<Grid id="resultsGrid">{resultsGrid}</Grid>
		</div>
	);
}

export default GameBoard;
