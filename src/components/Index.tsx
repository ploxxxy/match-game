import { BsFillPlayCircleFill } from 'react-icons/bs'

interface IndexProps {
	n: number
	setN: (value: number) => void
	m: number
	setM: (value: number) => void
	playerGoesFirst: boolean
	setPlayerGoesFirst: (value: boolean) => void
	startGame: () => void
}

const Index: React.FC<IndexProps> = ({
	n,
	setN,
	m,
	setM,
	playerGoesFirst,
	setPlayerGoesFirst,
	startGame,
}) => {
	return (
		<div className="flex items-center justify-between h-full max-w-2xl gap-24 p-12 mx-auto">
			<div className="flex flex-col gap-8">
				<div>
					<input
						value={n}
						min={1}
						max={24}
						type="range"
						onChange={(e) => setN(Number.parseInt(e.target.value))}
					/>
					N: {n} ({2 * n + 1} matches)
				</div>
				<div>
					<input
						value={m}
						min={1}
						max={9}
						type="range"
						onChange={(e) => setM(Number.parseInt(e.target.value))}
					/>
					m: {m}
				</div>
				<div className="flex gap-2">
					Should player go first?
					<input
						checked={playerGoesFirst}
						type="checkbox"
						onChange={(e) => setPlayerGoesFirst(e.target.checked)}
					/>
				</div>
			</div>
			<div>
				<BsFillPlayCircleFill className="absolute text-green-400 animate-ping text-8xl" />
				<BsFillPlayCircleFill
					className="relative text-green-400 cursor-pointer animate text-8xl hover:text-green-200"
					onClick={startGame}
				/>
			</div>
		</div>
	)
}

export default Index
