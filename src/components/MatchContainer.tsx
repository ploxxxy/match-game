import { useState, useMemo } from 'react'
import Match from './Match'

interface MatchContainerProps {
  startingMatches: number
  matches: number
  seed: number
}

interface MatchesArrayProps {
  rotation: number
  translationX: number
  translationY: number
}

const MatchContainer: React.FC<MatchContainerProps> = ({ startingMatches, matches, seed }) => {
  const [matchesArray, setMatchesArray] = useState<MatchesArrayProps[]>([])

  useMemo(() => {
    const initialMatches = Array.from({ length: startingMatches }, () => ({
      rotation: Math.random() * 360 + seed,
      translationX: Math.random() * 100 + seed,
      translationY: Math.random() * 100 + seed,
    }))

    setMatchesArray(initialMatches)

    return () => {
      setMatchesArray([])
    }
  }, [startingMatches, seed])

  return (
    <div className="relative">
      {matchesArray.map((match, index) => (
        <Match
          key={index}
          show={index < matches}
          rotation={match.rotation}
          translateX={match.translationX}
          translateY={match.translationY}
        />
      ))}
    </div>
  )
}

export default MatchContainer
