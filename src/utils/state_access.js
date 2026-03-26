// Functions to access the state

import { useRecoilState } from "recoil";
import { currentGuessState, validWord, guessHistory, validGuess } from "../state/recoil_state";

export function useStateAccess() {
	const [currentGuess, setCurrentGuess] = useRecoilState(currentGuessState);
	const [validGuess, setIsValidGuess] = useRecoilState(validGuess);
	const [currentGuessHistory, setCurrentGuessHistory] = useRecoilState(guessHistory);

	// Add a letter to the current guess
	const addToCurrentGuess = (currentKey) => {
		console.log(currentGuess);

		// Check if guess curerntly has 5 letters
		if (currentGuess.length === 5) {
			console.log("Guess already contains 5 letters");
			return;
		}
		// Add key to current Guess
		else {
			setCurrentGuess((prevGuess) => prevGuess + currentKey);
			console.log("Added key to guess");
		}

		console.log(currentGuess);

		// check for is valid guess
		isValidGuess();

		return "200";
	};

	// Remove the last letter from the current guess
	const removeFromCurrentGuess = () => {
		console.log(currentGuess);
		setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));

		console.log(currentGuess);
	};

	const isValidGuess = () => {
		// Check if guess is 5 letters long
		if (currentGuess.length === 5) {
			console.log("Guess contains 5 letters");

			// Check if guess has underscore
			if (currentGuess.includes("_")) {
				console.log("Includes Underscore, guess not submitted");

				// Do not color
				setIsValidGuess(false);
			} else {
				setIsValidGuess(true);
			}
		} else {
			console.log("Guess not complete");
		}
	};

	const isValidSubmission = () => {
		// Check if it is a valid guess
		if (validGuess === false) {
			console.log("Not a valid guess");
			return;
		} else {
			// Check if word is in word list
			// if in word list, add to guess History
		}
	};

	return {
		addToCurrentGuess,
		removeFromCurrentGuess,
		isValidSubmission,
	};
}
