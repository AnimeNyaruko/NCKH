'use client';
import clsx from 'clsx';
import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import ImagePicture from '@/public/images/ImagePicture.png';

import { MavenPro } from '@/app/ui/Style/font';
import { generate } from 'shortid';
import { imageSize } from '@/app/lib/utils';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Link from 'next/link';

async function handleAddImage(
	setError: Dispatch<any>,
	setState: Dispatch<SetStateAction<'pending' | 'waiting'>>,
	router: AppRouterInstance,
	formData: FormData
) {
	setError('');
	setState('pending');
	const data: { title: any; imgFile: any } = {
		title: formData.get('Title'),
		imgFile: formData.get('ImageInput')!,
	};

	const img: any = await imageSize(data.imgFile);

	fetch('/api/community/add', {
		method: 'POST',
		body: JSON.stringify({
			title: data.title,
			src: img.src,
			width: img.width,
			height: img.height,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.status === 'fail') {
				setError(data.message);
				setState('waiting');
			} else {
				router.replace('/m/community');
			}
		});
}

export default function Page() {
	const [Display, setDisplay] = useState<any>();
	const [Error, setError] = useState<any>();
	const [state, setState] = useState<'pending' | 'waiting'>('waiting');

	const router = useRouter();

	return (
		<div className="mx-3 pt-2 h-dvh flex flex-col">
			<form action={handleAddImage.bind(null, setError, setState, router)}>
				<div className="flex justify-between">
					<Link className="text-white drop-shadow-white-lg" href="/m/community">
						<FontAwesomeIcon className="" icon={faX} size="lg" fixedWidth />
					</Link>
					{state == 'waiting' ? (
						<button type="submit" className="text-xl text-blue-500" style={MavenPro.bold.style}>
							Đăng
						</button>
					) : (
						<div className="fallback-cyan fallback-cyan-sm"></div>
					)}
				</div>
				<div className="mt-3">
					<input
						required
						name="Title"
						placeholder="TIÊU ĐỀ"
						style={MavenPro.bold.style}
						className="rounded-full px-3 py-2 w-full text-xl placeholder:opacity-50 placeholder:text-2xl"
					/>
					<hr className="border border-black opacity-35" />
					<div className="mt-3 flex justify-between w-full h-fit">
						<p
							key={generate()}
							style={MavenPro.bold.style}
							className={clsx('justify-self-start text-red-500 text-lg')}>
							{Error}
						</p>
						<label className="w-[10%] h-auto">
							<div>
								<Image
									alt="ImageIcon"
									src={ImagePicture}
									className="object-contain w-full h-full"
								/>
								<input
									name="ImageInput"
									onChange={async (e) => {
										const target = e.target;
										if (target.files?.length) {
											if (target.files[0].size > 1024 * 1024 * 10) {
												setError('Ảnh phải < 1mb');
												setState('waiting');
												return;
											} else {
												setError('');
											}
											const imgsrc: any = await imageSize(target.files[0]);
											setDisplay(
												<Image
													alt=""
													src={imgsrc.src}
													width={imgsrc.width}
													height={imgsrc.height}
													className="w-full h-full object-contain"
												/>
											);
										}
									}}
									type="file"
									accept="image/*"
									alt=""
									className="hidden"
								/>
							</div>
						</label>
					</div>
				</div>
			</form>
			<div className="h-full flex items-center justify-center">{Display}</div>
		</div>
	);
}
