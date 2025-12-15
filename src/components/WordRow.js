import React, { useState } from "react";

// import handleLockStatus from "../utils/handleLockStatus";

// import { currentRow, currentTileIndex } from "./recoil_state";

// Restructure to pass {children} as props and render {children}

// Contains the row of x amount of tiles
function WordRow({ rowIndex, children }) {
	// const rowTiles = [];

	// const userGuess = useState([]);
	// rowLock = handleLockStatus({ rowIndex, currentRow });

	/*************** 
	ADD KEYPRESS FUNCTIONALITY
	UPDATE GUESS
		PUSH INPUT TO GUESS ARRAY

	****************/

	// Index limit??
	// let limit = parseInt(startingColumnIdx) + parseInt(columnCount);

	// // const poulateRow = (rowIndex, columnCount) => {
	// for (let colIdx = parseInt(startingColumnIdx); colIdx < limit; colIdx++) {
	// 	let idx = `${rowIndex}-${colIdx}`;

	// 	// ADD ROW LOCK AROUND THIS SECTION BELOW

	// 	let tileValue = "";
	// 	if (gridType == "guessGrid") {
	// 		tileValue = userGuess[colIdx];
	// 	} else if (gridType == "guessGrid") {
	// 		tileValue = "";
	// 	}

	// 	rowTiles.push(<Tile idx={idx} gridType={gridType} value={tileValue} row={rowIndex} columnCount={colIdx} />);
	// }
	// // };

	// poulateRow();

	// console.log(rowTiles);

	return (
		<div id={rowIndex} className="flex flex-row gap-1 w-full h-auto bg-transparent">
			{children}
		</div>
	);
}

export default WordRow;
