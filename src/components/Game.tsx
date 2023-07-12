import { useState, useEffect, useCallback } from 'react'
import { canWin, didPlayerWin, makeMove } from '../utils/game'
import Modal from './Modal'
import PlayButton from './PlayButton'
import Avatar from './Avatar'
import MatchContainer from './MatchContainer'
interface GameProps {
  playerGoesFirst: boolean
  n: number
  m: number
}

const Game: React.FC<GameProps> = ({ playerGoesFirst, n, m }) => {
  const startingMatches = 2 * n + 1

  const [matches, setMatches] = useState(startingMatches)
  const [playerMatches, setPlayerMatches] = useState(0)
  const [computerMatches, setComputerMatches] = useState(0)
  const [isPlayerTurn, setIsPlayerTurn] = useState(playerGoesFirst)
  const [playerWon, setPlayerWon] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const [randomSeed, setRandomSeed] = useState(Math.random())

  const takeMatches = useCallback(
    (amount: number, computer = false) => {
      if (matches == 0) return false

      const matchesLeft = matches - amount
      if (matchesLeft < 0) return false

      setMatches(matchesLeft)
      // setArr(Array(matchesLeft).fill(''))

      if (computer) {
        setComputerMatches(computerMatches + amount)
        console.debug(`-${amount} by computer. total: ${matchesLeft}`)
      } else {
        setPlayerMatches(playerMatches + amount)
        console.debug(`-${amount} by player. total: ${matchesLeft}`)
      }

      setIsPlayerTurn(!isPlayerTurn)
      return true
    },
    [computerMatches, isPlayerTurn, matches, playerMatches]
  )

  const handleWin = useCallback(() => {
    setPlayerWon(didPlayerWin(playerMatches))
    setIsOpen(true)
  }, [playerMatches])

  useEffect(() => {
    if (matches === 0) return handleWin()

    if (matches === startingMatches && !playerGoesFirst) {
      const winningMove = canWin(m, matches, computerMatches)

      if (winningMove) {
        takeMatches(winningMove, true)
      } else {
        takeMatches(2, true)
      }

      return
    }

    if (!isPlayerTurn) {
      const winningMove = canWin(m, matches, computerMatches)

      if (winningMove) {
        takeMatches(winningMove, true)
        return
      }

      takeMatches(makeMove(matches, m), true)
    }
  }, [
    isPlayerTurn,
    takeMatches,
    matches,
    computerMatches,
    m,
    handleWin,
    playerGoesFirst,
    startingMatches,
  ])

  const handleReset = () => {
    setMatches(startingMatches)
    setPlayerMatches(0)
    setComputerMatches(0)
    setIsPlayerTurn(playerGoesFirst)
    setRandomSeed(Math.random())
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        result={playerWon ? 'win' : 'lose'}
        title={playerWon ? 'Congratulations!' : 'You lost!'}
        restart={handleReset}>
        {playerWon ? (
          <p>Well done, you've beaten the 🤖 AI!</p>
        ) : (
          <p>You were beaten by the 🤖 AI! Good luck next time.</p>
        )}
      </Modal>
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col items-center justify-center w-full max-w-md gap-8 p-8 sm:p-0 h-3/5">
          <h1 className="text-9xl">{matches}</h1>
          <div className="z-[5] grid justify-center w-full grid-cols-2 gap-10">
            <Avatar name="You" isAi={false} matches={playerMatches} />
            <Avatar name="CPU" isAi matches={computerMatches} />
          </div>
          <MatchContainer startingMatches={startingMatches} matches={matches} seed={randomSeed} />
        </div>
        <div className="flex flex-wrap content-center justify-center max-w-md gap-2 p-8 h-1/5 lg:p-0 lg:max-w-2xl">
          {Array(m)
            .fill('')
            .map((_value, index) => (
              <PlayButton
                key={index}
                text={(index + 1).toString()}
                onClick={() => {
                  takeMatches(index + 1)
                }}
              />
            ))}
          <PlayButton onClick={handleReset} text="Reset" danger />
        </div>
      </div>
    </>
  )
}

export default Game
