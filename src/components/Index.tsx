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
    <div className="flex items-center justify-between max-w-2xl gap-24 p-8 mx-auto my-auto">
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
      <div>
        <BsFillPlayCircleFill className="absolute text-green-400 animate-ping text-8xl" />
        <BsFillPlayCircleFill
          className="relative text-green-400 transition-colors duration-700 cursor-pointer drop-shadow-xl animate text-8xl hover:text-green-200"
          onClick={startGame}
        />
      </div>
    </div>
  )
}

export default Index
