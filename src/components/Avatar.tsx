import { useState, useMemo, useEffect } from 'react'
import { Transition } from '@headlessui/react'

interface AvatarProps {
  name: string
  isAi: boolean
  matches: number
}

const Avatar: React.FC<AvatarProps> = ({ name, isAi, matches }) => {
  const [matchHistory, setMatchHistory] = useState<number[]>([])
  const [currentHistory, setCurrentHistory] = useState(0)

  useMemo(() => {
    setMatchHistory((m) => [...m, matches])
  }, [matches])

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
    <div className="flex flex-col items-center justify-center gap-4 p-2 border rounded-sm select-none backdrop-blur-xl bg-neutral-900/10 border-neutral-500 aspect-square">
      <Transition
        as="span"
        show={currentHistory !== 0}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
        className="absolute top-0 right-0 inline-flex flex-col items-center justify-end w-20 h-20 pb-4 overflow-hidden text-4xl text-green-500 translate-x-8 -translate-y-6 bg-white rounded-bl-none rounded-3xl">
        <span className="absolute w-20 h-20 translate-y-4 from-white to-transparent bg-gradient-to-b"></span>
        <span>+{currentHistory}</span>
      </Transition>
      <span className="text-2xl font-bold">{name}</span>
      <span className="text-6xl">{isAi ? '🤖' : '👩‍💻'}</span>
      <span className="text-sm">{matches} matches</span>
    </div>
  )
}

export default Avatar
