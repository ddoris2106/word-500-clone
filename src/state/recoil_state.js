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
const currentGuessState = atom({
	key: "UserGuess",
	default: "",
});

// Checks if guess is 5 letters long and has no special chacracters
const validGuess = atom({
	key: "validGuessState",
	default: true,
});

const validWord = atom({
	key: "validWordState",
	default: true,
});

// Record the guesses the user submitted
const guessHistory = atom({
	key: "UserGuessHistory",
	default: [],
});

export { currentRow, currentTileIndex, currentGuessState, validGuess, validWord, guessHistory };
