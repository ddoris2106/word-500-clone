import { atom, selector } from "recoil";

const currentRow = atom({
	key: "CurrentRowIndex",
	default: 0,
});

const currentTileIndex = atom({
	key: "CurrentTileIndex",
	default: 0,
});

// Store the current user submitted guess
const currentGuess = atom({
	key: "UserGuess",
	default: "",
});

// Record the guesses the user submitted
const guessHistory = atom({
	key: "UserGuessHistory",
	default: [],
});

export { currentRow, currentTileIndex, currentGuess, guessHistory };
