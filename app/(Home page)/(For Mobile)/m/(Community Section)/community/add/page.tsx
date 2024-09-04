'use client';
import clsx from 'clsx';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import ImagePicture from '@/public/images/ImagePicture.png';
import LinkPicture from '@/public/images/LinkPicture.png';

import { MavenPro } from '@/app/ui/Style/font';
import React from 'react';
import { usePathname } from 'next/navigation';
import { generate } from 'shortid';

export default function Page() {
	const [Display, setDisplay] = useState<any>();
	const [Error, setError] = useState<any>();

	const pathName = usePathname();

	const router = useRouter();

	return (
		<div className="mx-3 pt-2 h-dvh flex flex-col">
			<form
				action={(formData: FormData) => {
					setError('');
					const data: { title: any; imgFile: any } = {
						title: formData.get('Title'),
						imgFile: formData.get('ImageInput')!,
					};

					if (data.imgFile.size > 1024 * 1024) {
						setError('Ảnh phải nhỏ hơn 1mb');
						return;
					}
					try {
						const reader = new FileReader();
						reader.readAsDataURL(data.imgFile);

						reader.onloadend = () => {
							data.imgFile = reader.result;
							fetch('api/community/add', {
								method: 'POST',
								body: JSON.stringify({
									title: data.title,
									src: data.imgFile,
								}),
							})
								.then((res) => res.json())
								.then((data) => {
									if (data.status === 'fail') {
										setError(data.message);
									} else {
										router.replace('/community');
									}
								});
						};
					} catch (e) {
						console.error(e);
					}
				}}>
				<div className="flex justify-between">
					<FontAwesomeIcon className="" icon={faX} size="lg" fixedWidth />
					<button type="submit" className="text-xl text-blue-500" style={MavenPro.bold.style}>
						Đăng
					</button>
				</div>
				<div className="mt-3">
					<input
						required
						name="Title"
						placeholder="TIÊU ĐỀ"
						style={MavenPro.bold.style}
						className="w-full text-2xl placeholder:opacity-50"
					/>
					<hr className="border border-black opacity-35" />
					<div className="mt-3 flex justify-between w-full h-fit">
						<p
							key={generate()}
							style={MavenPro.bold.style}
							className={clsx('text-md text-red-500', Error && 'animate-wiggle')}>
							{Error}
						</p>
						<div className="flex gap-x-3 w-[20%] h-auto">
							<label className="">
								<div>
									<Image
										alt="ImageIcon"
										src={ImagePicture}
										className="object-contain w-full h-full"
									/>
									<input
										name="ImageInput"
										onChange={(e) => {
											const target = e.target;
											if (target.files?.length) {
												const imgsrc = URL.createObjectURL(target.files[0]);
												setDisplay(
													<Image
														alt=""
														src={imgsrc}
														width="300"
														height="500"
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
							<label>
								<div>
									<Image
										alt="LinkIcon"
										src={LinkPicture}
										className="object-contain w-full h-full"
									/>
									<input
										type="file"
										accept="text/plain, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
										alt=""
										className="hidden"
									/>
								</div>
							</label>
						</div>
					</div>
				</div>
			</form>
			<div className="h-full flex items-center justify-center">{Display}</div>
		</div>
	);
}
