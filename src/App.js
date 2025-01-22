import GameBoard from "./components/GameBoard";
import Header from "./components/Header";

function App() {
	return (
		<div className="App flex flex-col gap-1">
			<Header />
			<GameBoard />
		</div>
	);
}

export default App;
