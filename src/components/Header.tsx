import { AiFillHome, AiFillGithub } from 'react-icons/ai'

interface HeaderProps {
  onLeave: () => void
  disabled?: boolean
}

const Header: React.FC<HeaderProps> = ({ onLeave, disabled }) => {
  return (
    <div className="flex justify-between w-full max-w-xl px-8 pt-8 pb-4 mx-auto text-white bg-black/90">
      <button
        className="disabled:text-neutral-500 hover:text-neutral-300"
        type="button"
        onClick={onLeave}
        disabled={disabled}>
        <AiFillHome size={24} />
      </button>
      <a
        className="hover:text-neutral-300"
        href="https://github.com/ploxxxy/match-game"
        target="_blank">
        <AiFillGithub size={24} />
      </a>
    </div>
  )
}

export default Header
