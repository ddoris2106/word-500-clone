import React from "react";
import Grid from "./Grid";
import Tile from "./Tile";
import WordRow from "./WordRow";

// Setup Game Board
// 8x5 grid next to a 8x3 grid
function GameBoard() {

	const gridData = {
		"guessGrid": {
			"columns": 5,
			"rows": 8,
			"startingColIdx": 0,
			"guessGrid": True
		},
		"resultsGrid": {
			"columns": 3,
			"rows": 8,
			"startingColIdx": 5,
			"guessGrid": False
		}
	}

	// Render a guess or result grid based on inputted specifications
	const renderGrid = (gridData) => {
		

		const { columns, rows, startingColIdx: startingColumnIndex, guessGrid} = gridData

		const grid = []

		// Loop through all the rows to be made
		for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
			const row = []

			// Loop through all the columns in that row
			for (let colIndex = startingColumnIndex; colIndex < (startingColumnIndex + columns); colIndex++) {

				let currentIndex = `${rowIndex}-${colIndex}`;

				const onclick;

				// Check if the value shown in the tile will be the user input or the results
				if(guessGrid){
					// Pass onclick listener if it is a guess tile
					onclick = null

					// Add logic for inserting tile value to correct tile
					// Put logic to fetch current tile value in state and use effect with the guess idx as dependency -- so it can update in case of backspace

					// Test with randon tile value to see if working
					let tileValue = ""
					

					// Check if the current tile is to be populated with the users letter input
					if (rowIndex == currentGuessRow) {
						if(colIndex == currentGuessCol){
							tileValue = currentGuess
						}
					}

				}

				const bgColors = {
					5: "bg-appGreen",
					6: "bg-appYellow",
					7: "bg-appRed",
				};
				

				row.push(
					<Tile 
						idx={currentIndex}
						value={tileValue}
						initialColor={guessGrid ? "bg-transparent": bgColors[colIndex]}
						onclick={onclick}
					/>
				)
				
			}

			grid.push(
				<WordRow
					rowIndex={rowIndex}
				> 
					{row}
				</WordRow>
			)
			
		}

		return grid
	}

	const guessGrid = renderGrid(gridData.guessGrid)

	




	return (
		<div className="flex flex-row content-center justify-center w-full gap-x-4">
			<Grid id="guessGrid">
				{guessGrid}
			</Grid>
			<Grid id="resultsGrid">
				{}
			</Grid>


			<Grid
				id="guessGrid"
				gridType="guessGrid"
				columnCount="5"
				startingColumnIdx="0"
				rowCount="8"
			/>
			<Grid
				id="resultsGrid"
				gridType="resultsGrid"
				columnCount="3"
				startingColumnIdx="5"
				rowCount="8"
			/>
		</div>
	);


	// return (
	// 	<div className="flex flex-row content-center justify-center w-full gap-x-4">
	// 		<Grid
	// 			id="guessGrid"
	// 			gridType="guessGrid"
	// 			columnCount="5"
	// 			startingColumnIdx="0"
	// 			rowCount="8"
	// 		/>
	// 		<Grid
	// 			id="resultsGrid"
	// 			gridType="resultsGrid"
	// 			columnCount="3"
	// 			startingColumnIdx="5"
	// 			rowCount="8"
	// 		/>
	// 	</div>
	// );
}

export default GameBoard;
