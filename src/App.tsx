import Game from './components/Game'
import Index from './components/Index'
import { useState } from 'react'

function App() {
	const [n, setN] = useState(12)
	const [m, setM] = useState(3)
	const [playerGoesFirst, setPlayerGoesFirst] = useState(true)

	const [currentPage, setCurrentPage] = useState('index')

	const handleStartGame = () => {
		console.log(
			`starting game with 2*${n}+1 matches, ${m} maxMatches & player is gonna go first: ${
				playerGoesFirst ? 'yes' : 'no'
			}`
		)

		setCurrentPage('game')
	}

	return (
		<div className="h-full bg-black text-neutral-200">

			{currentPage === 'index' && (
				<Index
					n={n}
					setN={setN}
					m={m}
					setM={setM}
					playerGoesFirst={playerGoesFirst}
					setPlayerGoesFirst={setPlayerGoesFirst}
					startGame={handleStartGame}
				/>
			)}

			{currentPage === 'game' && <Game playerGoesFirst={playerGoesFirst} n={n} m={m} />}
		</div>
	)
}

export default App
