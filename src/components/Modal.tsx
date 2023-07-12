import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'

interface ModalProps {
	isOpen?: boolean
	onClose: () => void
	children: React.ReactNode
	title: string
	result: 'win' | 'lose' | 'neutral'
	restart: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, result, title, restart }) => {
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={onClose}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 transition-all bg-white/5 backdrop-blur-xl" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex items-center justify-center min-h-full p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95">
								<Dialog.Panel
									className={clsx(
										'flex flex-col w-full max-w-md gap-4 p-6 overflow-hidden text-left align-middle transition-all transform bg-black border rounded',
										result === 'win' && 'border-green-400',
										result === 'lose' && 'border-red-500'
									)}>
									<Dialog.Title
										as="h3"
										className={clsx(
											'text-xl font-bold leading-6',
											result === 'win' && 'text-green-400',
											result === 'lose' && 'text-red-500'
										)}>
										{title}
									</Dialog.Title>

									<div className="text-neutral-200 text-md">{children}</div>

									<div className="flex justify-end gap-4 mt-4 text-white">
										<button
											type="button"
											className="inline-flex justify-center px-4 py-2 text-sm border border-green-500 rounded-sm hover:bg-green-500"
											onClick={() => {
												restart()
												onClose()
											}}>
											Restart
										</button>
										<button
											type="button"
											className="inline-flex justify-center px-4 py-2 text-sm border border-blue-600 rounded-sm hover:bg-blue-500"
											onClick={onClose}>
											Back to Home
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default Modal
