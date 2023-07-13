import { useState, useMemo, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'

interface AvatarProps {
  name: string
  isAi?: boolean
  matches: number
}

const Avatar: React.FC<AvatarProps> = ({ name, isAi, matches }) => {
  const [matchHistory, setMatchHistory] = useState<number[]>([])
  const [currentHistory, setCurrentHistory] = useState(0)

  // Keeps track of matches played by the player
  useMemo(() => {
    setMatchHistory((m) => [...m, matches])
  }, [matches])

  // Sets the currentHistory variable to be the difference between
  // the last two turns. Essentially, calculates the previous move
  useEffect(() => {
    const length = matchHistory.length
    if (length < 2) return

    const history = matchHistory[length - 1] - matchHistory[length - 2]

    if (history <= 0) {
      setCurrentHistory(0)
      return
    }

    setCurrentHistory(history)
  }, [matchHistory])

  return (
    <div className="relative flex flex-col items-center justify-center gap-4 p-2 border rounded-sm select-none backdrop-blur-xl bg-neutral-900/10 border-neutral-500 aspect-square">
      <Transition
        as="span"
        show={currentHistory !== 0}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
        className={clsx(
          'absolute inline-flex flex-col items-center justify-center overflow-hidden text-4xl text-green-500  bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-3xl',
          isAi && 'top-0 right-0 translate-x-8 -translate-y-6 rounded-bl-none',
          !isAi && 'top-0 left-0 -translate-x-8 -translate-y-6 rounded-br-none'
        )}>
        <span className="absolute w-16 h-16 sm:w-20 sm:h-20 from-white/75 to-transparent bg-gradient-to-b"></span>
        <span>+{currentHistory}</span>
      </Transition>
      <span className="text-2xl font-bold">{name}</span>
      <span className="text-6xl">{isAi ? '🤖' : '👩‍💻'}</span>
      <span className="text-sm">{matches} matches</span>
    </div>
  )
}

export default Avatar
