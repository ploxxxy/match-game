import clsx from 'clsx'

interface PlayButtonProps {
  onClick: () => void
  text: string
  danger?: boolean
}

const PlayButton: React.FC<PlayButtonProps> = ({ onClick, text, danger }) => {
  return (
    <button
      type="button"
      className={clsx(
        'inline-flex items-center justify-center h-14 text-3xl border rounded-sm transition-colors duration-150 font-bold backdrop-blur-xl bg-neutral-900/10',
        !danger &&
          'w-14 border-neutral-500 text-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 active:bg-neutral-300',
        danger &&
          'px-4 border-red-600 hover:bg-red-600 active:bg-red-500 text-red-600 hover:text-white'
      )}
      onClick={onClick}>
      {text}
    </button>
  )
}

export default PlayButton
