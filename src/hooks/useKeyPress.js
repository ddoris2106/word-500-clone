import { useEffect } from "react";
import { useStateAccess } from "../utils/state_access";

/*
Add handlers to modify current Guess State
 - also updates currentTileIndex state
Add handler to add to guessHistory state 
 - also updates current Row  
*/

export function useKeyPress(targetKeys, deps = []) {
	const data = useStateAccess();
	const { addToCurrentGuess, removeFromCurrentGuess, isValidSubmission } = useStateAccess();
	// 	currentGuess;

	// Functions to access state
	// modify current guess (get and set)
	// submit guess to guess History

	useEffect(() => {
		const letterKeys = Array.isArray(targetKeys) ? targetKeys : [targetKeys];

		// If enter is pressed: update guessHistory state by adding currentGuess state

		function onKeyUp(e) {
			let currentKey = e.key.toUpperCase();

			console.log(`Key pressed for | ${currentKey} | key`);

			// If invalid word without underscore, strike through

			// Check if key pressed is a letter key, call fucntion to add to currentGuess state
			if (letterKeys.includes(currentKey)) {
				addToCurrentGuess(currentKey);
			}

			// If key pressed is a backspace, call fucntion to remove last letter from state
			else if (currentKey === "Backspace") {
				removeFromCurrentGuess();
				console.log(`Backspace pressed and registered`);
			}

			// check if key pressed is enter; make sure guess is 5 letters long
			else if (currentKey === "Enter") {
				isValidSubmission();
			}
		}

		window.addEventListener("keyup", onKeyUp);
		return () => window.removeEventListener("keyup", onKeyUp);
	}, deps);
}
