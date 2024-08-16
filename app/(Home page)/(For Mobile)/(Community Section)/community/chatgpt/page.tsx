'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faUser, faArrowUp, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import { Suspense, useRef, useState } from 'react';
import React from 'react';
import parse from 'html-react-parser';
import showdown from 'showdown';

const ButtonColor = {
	focus: 'bg-blue-300',
	unfocus: 'bg-blue-700',
};

function ModifyData(props: any) {
	//*Markdown the chatbot response
	const { text } = props;
	const converter = new showdown.Converter();

	//*Parse to html element
	return parse(converter.makeHtml(text));
}

export default function Page() {
	const SubmitButton = useRef<HTMLButtonElement>(null);
	const InputField = useRef<HTMLInputElement>(null);
	const ChatContainerElement = useRef<HTMLDivElement>(null);

	const [ChatContainer, setChatContainer] = useState<Array<any>>([]);
	return (
		<div className="h-screen">
			<header className="h-[10svh] w-screen">
				<div className="w-min h-full flex items-center">
					<Link
						href={'/community'}
						className="ml-2 top-1/2 w-min h-3/4 aspect-square rounded-full bg-blue-300 flex items-center justify-center">
						<FontAwesomeIcon
							icon={faArrowLeft}
							fixedWidth
							className="w-full h-3/4 text-[2.5em] p-1 text-white"
						/>
					</Link>
				</div>
				<hr className="border-black" />
			</header>
			<main className="h-[90svh] w-screen">
				<div className="h-[90%] flex items-center">
					<div
						ref={ChatContainerElement}
						className="h-[95%] w-full botchat overflow-y-scroll grid grid-cols-1 grid-rows-[repeat(99999,min-content)]">
						{ChatContainer.map((e) => (
							<>{e}</>
						))}
					</div>
				</div>
				<form
					action={(form: FormData) => {
						//*Get promt data
						const text = form.get('promt');
						if (!text) return;

						//*Set button to focus (background more transparent)
						SubmitButton.current?.classList.remove(ButtonColor.unfocus);
						SubmitButton.current?.classList.add(ButtonColor.focus);

						//*Remove promt from input field
						InputField.current!.value = '';

						//*Display user promt
						setChatContainer([
							...ChatContainer,
							<div key={1} className="user">
								<p>{String(text)}</p>
							</div>,
						]);

						//*Wait for 250ms to update component and then scroll to bottom
						setTimeout(() => {
							ChatContainerElement.current!.scrollTo({
								top: ChatContainerElement.current!.scrollHeight,
								behavior: 'smooth',
							});
						}, 50);

						//*Get bot response
						fetch('/api/chatbot', {
							method: 'POST',
							body: JSON.stringify(text),
						})
							.then((res) => res.json())
							.then((data) => {
								//*Display bot response
								setChatContainer([
									...ChatContainer,
									<div key={1} className="user">
										<p>{String(text)}</p>
									</div>,
									<div key={3} className="bot">
										<FontAwesomeIcon className="icon" icon={faRobot} fixedWidth />
										<div>
											<ModifyData text={String(data)} />
										</div>
									</div>,
								]);

								//*Scroll to bottom after render bot chat
								setTimeout(() => {
									ChatContainerElement.current!.scrollTo({
										top: ChatContainerElement.current!.scrollHeight,
										behavior: 'smooth',
									});
								}, 50);

								//*Set button back to unfocus (background no more longer transparent)
								SubmitButton.current?.classList.remove(ButtonColor.focus);
								SubmitButton.current?.classList.add(ButtonColor.unfocus);
							});
					}}
					id="chat"
					className="absolute top-full -translate-y-full flex items-center justify-center w-screen bg-slate-200 h-[10%]">
					<div className="w-3/4">
						<input
							className="px-3 py-2 w-full border border-slate-400 border-solid focus:border-black rounded-full outline-none"
							type="text"
							name="promt"
							id="ChatPromt"
							placeholder="Tin nhắn cho ChatGPT"
							ref={InputField}
						/>
						<button
							ref={SubmitButton}
							type="submit"
							className="w-min h-max bg-blue-700 rounded-full aspect-square flex items-center justify-center absolute top-1/2 right-[2dvw] -translate-y-1/2">
							<FontAwesomeIcon
								className="p-2 text-white aspect-square"
								fixedWidth
								icon={faArrowUp}
							/>
						</button>
					</div>
				</form>
			</main>
		</div>
	);
}
