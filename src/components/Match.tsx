import { Fragment } from 'react'
import { Transition } from '@headlessui/react'

interface MatchProps {
	show: boolean
	rotation: number
	translateX: number
	translateY: number
}

const Match: React.FC<MatchProps> = ({ show, rotation, translateX, translateY }) => {
	return (
		<Transition
			as={Fragment}
			show={show}
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="animate-spin"
			leaveFrom="opacity-100"
			leaveTo="opacity-0">
			<div
				className="absolute transition-all duration-500 shadow-md"
				style={{
					transform: `rotate(${rotation}deg) translate(${translateX}px, ${translateY}px)`,
				}}>
				<div className="w-2 h-2 scale-150 bg-red-800 rounded-full"></div>
				<div className="w-2 h-24 bg-orange-300"></div>
			</div>
		</Transition>
	)
}

export default Match
