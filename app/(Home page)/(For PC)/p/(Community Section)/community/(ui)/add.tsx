'use client';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import IMGPic from '@/public/images/ImagePicture.png';
import { imageSize } from '@/app/lib/utils';

async function handleFileInput(
	setStatus: Dispatch<SetStateAction<'success' | 'pending' | 'fail'>>,
	SetErrorMSG: Dispatch<SetStateAction<string>>,
	formData: FormData
) {
	const { title, img } = {
		title: formData.get('title'),
		img: formData.get('image'),
	};
	const imgParse: any = await imageSize(img);

	fetch('/api/community/add', {
		method: 'POST',
		body: JSON.stringify({
			title: title,
			src: imgParse.src,
			width: imgParse.width,
			height: imgParse.height,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.status == 'fail') {
				SetErrorMSG(data.message);
				setStatus('fail');
			} else {
				setStatus('success');
			}
		});
}

export default function Add(props: { setAddComp: Dispatch<boolean> }) {
	const [status, setStatus] = useState<'success' | 'pending' | 'fail'>('pending');
	const [imgDisplay, setIMGDisplay] = useState<any>();
	const [ErrorMSG, setErrorMSG] = useState<string>('');

	if (status == 'success') {
		props.setAddComp(false);
	}

	return (
		<form
			action={handleFileInput.bind(null, setStatus, setErrorMSG)}
			className="flex flex-col gap-y-2 fixed bottom-0 right-1/4 w-[350px] aspect-[3/5] max-h-[500px] min-h-[210px] bg-white rounded-t-[2rem] border border-solid border-cyan-700 px-4 py-5">
			<div className="w-full flex justify-between">
				<FontAwesomeIcon
					onClick={() => {
						props.setAddComp(false);
					}}
					icon={faX}
					fixedWidth
					className="cursor-pointer text-slate-300 hover:text-red-600"
				/>
				<button
					disabled={status == 'fail'}
					type="submit"
					className="font-semibold hover:font-bold text-cyan-400 cursor-pointer">
					Đăng
				</button>
			</div>
			<p
				id="errorMSG"
				className={clsx('w-full text-red-600 text-md font-bold', {
					block: status === 'fail',
					hidden: status !== 'fail',
				})}>
				{ErrorMSG}
			</p>
			<div className="flex flex-col gap-y-2">
				<input
					required
					name="title"
					type="text"
					className="rounded-xl border-2 border-solid border-slate-300 w-full px-3 py-2"
					placeholder="Tiêu đề"
				/>
				<label className="cursor-pointer self-end inline-block w-[25px] aspect-square">
					<Image src={IMGPic} alt="Image input method" className="w-full h-auto object-contain" />
					<input
						onChange={async (e) => {
							const target = e.target;
							if (target.files?.length) {
								if (target.files[0].size > 1024 * 1024) {
									setStatus('fail');
									setErrorMSG('Ảnh phải < 1mb');
									return;
								} else setStatus('pending');
								const imgsrc: any = await imageSize(target.files[0]);
								setIMGDisplay(
									<Image
										alt="picture"
										src={imgsrc.src}
										width={imgsrc.width}
										height={imgsrc.height}
										className="w-full h-full object-contain"
									/>
								);
							}
						}}
						type="file"
						name="image"
						accept="image/*"
						id="imageinp"
						className="hidden w-[10px] aspect-square"
					/>
				</label>
			</div>
			<div className="w-full h-fit overflow-auto">{imgDisplay}</div>
		</form>
	);
}
