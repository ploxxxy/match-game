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
    <div className="flex flex-col justify-around h-full m-auto">
      <div className="flex items-center justify-around w-full max-w-2xl gap-8 p-8">
        <span className="text-7xl">👋</span>
        <p>
          From the pile of 25 matches, each player takes either 1, 2 or 3 matches on each turn. The
          game is over once all matches are taken. Whoever has the{' '}
          <span className="text-blue-400">even</span> amount of matches{' '}
          <span className="text-green-400">wins</span>.{' '}
          <span className="text-neutral-400">
            Created with TypeScript React. You can customize the game settings below.
          </span>
        </p>
      </div>
      <div className="flex items-center justify-around w-full max-w-2xl mb-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <span>
              N: {n} ({2 * n + 1} matches)
            </span>
            <input
              value={n}
              min={1}
              max={24}
              type="range"
              onChange={(e) => setN(Number.parseInt(e.target.value))}
            />
          </div>
          <div className="flex flex-col">
            <span>m: {m}</span>
            <input
              value={m}
              min={1}
              max={9}
              type="range"
              onChange={(e) => setM(Number.parseInt(e.target.value))}
            />
          </div>
          <div className="flex items-center gap-2">
            <span>Should player go first?</span>
            <input
              className="w-8 h-8"
              checked={playerGoesFirst}
              type="checkbox"
              onChange={(e) => setPlayerGoesFirst(e.target.checked)}
            />
          </div>
        </div>
        <div className="text-6xl sm:text-7xl lg:text-8xl">
          <BsFillPlayCircleFill className="absolute text-green-400 animate-ping" />
          <BsFillPlayCircleFill
            className="relative text-green-400 transition-colors duration-700 cursor-pointer drop-shadow-xl hover:text-green-200"
            onClick={startGame}
          />
        </div>
      </div>
    </div>
  )
}

export default Index
