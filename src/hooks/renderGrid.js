import Tile from "../components/Tile";
import WordRow from "../components/WordRow";

// Render a guess or result grid based on inputted specifications
export function renderGrid(gridData, bgColors) {
	const { columns, rows, startingColIdx: startingColumnIndex, guessGrid } = gridData;

	const grid = [];

	// Loop through all the rows to be made
	for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
		// console.log(`Current row: ${rowIndex}`);
		const row = [];

		// Loop through all the columns in that row
		for (let colIndex = startingColumnIndex; colIndex < startingColumnIndex + columns; colIndex++) {
			// console.log(`Current column: ${colIndex}`);
			let currentIndex = `${rowIndex}-${colIndex}`;

			const handleClick = (count) => {
				const bgColors = {
					0: "bg-transparent",
					1: "bg-appGreen",
					2: "bg-appYellow",
					3: "bg-appRed",
				};

				let currentColor = bgColors[count % 4];

				return currentColor;
			};

			// Check if the value shown in the tile will be the user input or the results

			// Add logic for inserting tile value to correct tile
			// Put logic to fetch current tile value in state and use effect with the guess idx as dependency -- so it can update in case of backspace

			// Test with randon tile value to see if working
			let tileValue = "";

			// Check if the current tile is to be populated with the users letter input
			// if (rowIndex == currentGuessRow) {
			// 	if (colIndex == currentGuessCol) {
			// 		tileValue = currentGuess;
			// 	}
			// }

			row.push(
				<Tile
					idx={currentIndex}
					value={tileValue}
					initialColor={guessGrid === true ? "bg-transparent" : bgColors[colIndex]}
					{...(guessGrid === true && { onClick: handleClick })}
				/>
			);
		}

		// console.log(row);

		grid.push(<WordRow rowIndex={rowIndex}>{row}</WordRow>);
	}

	// console.log(grid);

	return grid;
}
