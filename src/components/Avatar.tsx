interface AvatarProps {
	name: string
	isAI?: boolean
	matches: number
}

const Avatar: React.FC<AvatarProps> = ({ name, isAI, matches }) => {
	return (
		<div className="flex flex-col items-center justify-center gap-4 p-2 border rounded-sm backdrop-blur-xl bg-neutral-900/10 border-neutral-500 aspect-square">
			<span className="text-2xl font-bold">{name}</span>
			<span className="text-6xl">{isAI ? '🤖' : '👩‍💻'}</span>
			<span className="text-sm">{matches} matches</span>
		</div>
	)
}

export default Avatar
