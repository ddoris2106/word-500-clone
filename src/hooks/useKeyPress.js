import { useEffect } from "react";

/*
Add handlers to modify current Guess State
 - also updates currentTileIndex state
Add handler to add to guessHistory state 
 - also updates current Row  
*/

// Check if guess is5 letters long
// if less, add to current guess
// If 5, allow enter button

export function useKeyPress(targetKeys, handler, deps = []) {
	useEffect(() => {
		// Keys to listen for (all letters, backspace, underscore, and enter keys )
		// On enter, submit guess to recoil state
		const keys = Array.isArray(targetKeys) ? targetKeys : [targetKeys];

		// Check if key pressed is a letter key, add to currentGuess state
		// If key pressed is a backspace, remove last letter from state
		// Check if key pressed is an underscore
		// --do not submit if enter is pressed
		// If enter is pressed: update guessHistory state by adding currentGuess state

		// --check if guess is in word list; if not, change color to red and strike through
		function onKeyUp(e) {
			if (keys.includes(e.key)) handler(e);
		}

		window.addEventListener("keyup", onKeyUp);
		return () => window.removeEventListener("keyup", onKeyUp);
	}, deps);
}
