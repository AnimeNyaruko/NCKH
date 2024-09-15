'use client';

import { ModifyData } from '@/app/lib/utils';
import { faArrowUp, faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { useState, useRef } from 'react';

export default function Page() {
	const [status, setStatus] = useState<'waiting' | 'pending'>('waiting');
	const [chatContainer, setChatContainer] = useState<Array<any>>([]);
	const chatContainerElement = useRef<HTMLDivElement>(null);

	const inputField = useRef<HTMLInputElement>(null);

	return (
		<form
			action={(formData: FormData) => {
				//*Get user input
				const request = formData.get('user');
				if (!request) return;

				inputField.current!.value = '';
				setStatus('pending');

				setChatContainer([
					...chatContainer,
					<div key={1} className="user">
						<p>{String(request)}</p>
					</div>,
				]);

				setTimeout(() => {
					chatContainerElement.current!.scrollTo({
						top: chatContainerElement.current!.scrollHeight,
						behavior: 'smooth',
					});
				}, 50);

				fetch('/api/chatbot', {
					method: 'POST',
					body: JSON.stringify(String(request)),
				})
					.then((res) => res.json())
					.then((data) => {
						setChatContainer([
							...chatContainer,
							<>
								<div className="user">
									<p>{String(request)}</p>
								</div>
								<div className="bot">
									<FontAwesomeIcon icon={faRobot} fixedWidth />
									<p>
										<ModifyData text={String(data)} />
									</p>
								</div>
							</>,
						]);

						setTimeout(() => {
							chatContainerElement.current!.scrollTo({
								top: chatContainerElement.current!.scrollHeight,
								behavior: 'smooth',
							});
						}, 50);

						setStatus('waiting');
					});
			}}
			className="relative grow flex flex-col overflow-y-auto">
			<div
				ref={chatContainerElement}
				className="w-3/4 h-[80%] max-h-[80%] border-x-4 border-solid border-white/50 bg-gray-400/50 px-3 py-3 mx-auto overflow-y-auto">
				<div className="flex botchat-pc">
					{chatContainer.map((e) => (
						<>{e}</>
					))}
				</div>
			</div>
			<div className="w-full h-[20%] bg-gray-700/85 border-t border-solid border-white grid grid-cols-1 place-content-center">
				<div className="w-3/4 flex justify-center items-center gap-x-3 px-5 mx-auto">
					<div />
					<input
						name="user"
						ref={inputField}
						autoFocus
						onFocus={(e) => {
							e.currentTarget.classList.add('w-3/4');
							e.currentTarget.classList.remove('w-1/2');
						}}
						onBlur={(e) => {
							e.currentTarget.classList.add('w-1/2');
							e.currentTarget.classList.remove('w-3/4');
						}}
						type="text"
						placeholder="Hãy nhập tin nhắn vào đây"
						className="transition-[width] rounded-full w-3/4 px-3 py-3"
					/>
					<button
						type="submit"
						disabled={status === 'pending'}
						className={clsx(
							'h-fit aspect-square border border-white/50 border-solid rounded-full flex items-center justify-center',
							{
								'bg-blue-400': status !== 'pending',
								'bg-gray-400': status === 'pending',
							}
						)}>
						<FontAwesomeIcon className=" text-white p-2 text-lg" icon={faArrowUp} fixedWidth />
					</button>
				</div>
			</div>
		</form>
	);
}
