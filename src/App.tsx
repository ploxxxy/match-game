import Game from './components/Game'
import Header from './components/Header'
import Index from './components/Index'
import { useState } from 'react'

function App() {
	const [n, setN] = useState(12)
	const [m, setM] = useState(3)
	const [playerGoesFirst, setPlayerGoesFirst] = useState(true)

	const [currentPage, setCurrentPage] = useState('index')

	const handleStartGame = () => setCurrentPage('game')
	const handleLeaveGame = () => setCurrentPage('index')

	return (
		<div className="relative flex flex-col h-full bg-black text-neutral-200">
			<Header onLeave={handleLeaveGame} disabled={currentPage === 'index'} />
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
