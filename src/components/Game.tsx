import { useState, useEffect, useCallback } from 'react'
import { canWin } from '../utils/game'

interface GameProps {
	playerGoesFirst: boolean
	n: number
	m: number
}

const Game: React.FC<GameProps> = ({ playerGoesFirst, n, m }) => {
	const startingMatches = 2 * n + 1
	// m + 1

	const [matches, setMatches] = useState(startingMatches)
	const [playerMatches, setPlayerMatches] = useState(0)
	const [computerMatches, setComputerMatches] = useState(0)
	const [isPlayerTurn, setIsPlayerTurn] = useState(playerGoesFirst)

	const takeMatches = useCallback(
		(amount: number, computer = false) => {
			if (matches == 0) return false
			if (matches - amount < 0) return false

			setMatches(matches - amount)

			if (computer) {
				// console.log(computerMatches + amount)
				setComputerMatches(computerMatches + amount)
				console.log(`%c-${amount} by player two. total: ${matches - amount}`, 'color: #bada55')
			} else {
				setPlayerMatches(playerMatches + amount)
				console.log(`%c-${amount} by player one. total: ${matches - amount}`, 'color: #5ad')
			}

			setIsPlayerTurn(!isPlayerTurn)
			return true
		},
		[computerMatches, isPlayerTurn, matches, playerMatches]
	)

	useEffect(() => {
		if (!isPlayerTurn) {
			canWin(m, matches, computerMatches)
			if ((matches - 3) % 4 === 0 || (matches - 3) % 4 === 1) {
				takeMatches(3, true)
			} else {
				takeMatches(1, true)
			}
		}
	}, [isPlayerTurn, takeMatches, matches, computerMatches, startingMatches, m])

	const handleReset = () => {
		setMatches(startingMatches)
		setPlayerMatches(0)
		setComputerMatches(0)
		setIsPlayerTurn(true)
		console.clear()
	}
	return (
		<div className="flex flex-col items-center justify-center h-full text-neutral-200 bg-black/95">
			<div className="flex flex-col items-center justify-center h-1/2">
				<h1 className="text-9xl">{matches}</h1>
				<h3>Player #1: {playerMatches}</h3>
				<h3>Player #2: {computerMatches}</h3>
			</div>
			<div className="flex flex-wrap content-center justify-center gap-2 p-8 h-1/2 lg:p-0 lg:max-w-2xl">
				{Array(m)
					.fill('')
					.map((_value, index) => (
						<button
							className="w-12 h-12 font-mono text-2xl font-semibold text-gray-400 bg-gray-200 border-4 border-gray-400 rounded"
							key={index}
							onClick={() => {
								takeMatches(index + 1)
							}}>
							{index + 1}
						</button>
					))}
				<button
					className="h-12 px-2 font-mono text-2xl font-semibold text-red-700 uppercase bg-red-400 border-4 border-red-700 rounded"
					onClick={handleReset}>
					Reset
				</button>
			</div>
		</div>
	)
}

export default Game
