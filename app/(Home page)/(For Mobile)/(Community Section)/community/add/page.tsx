'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import ImagePicture from '@/public/images/ImagePicture.png';
import LinkPicture from '@/public/images/LinkPicture.png';

import { MavenPro } from '@/app/ui/Style/font';
import React from 'react';

export default function Page() {
	const [Display, setDisplay] = useState<any>();
	return (
		<div className="mx-3 pt-2 h-screen flex flex-col">
			<form action="">
				<div className="flex justify-between">
					<FontAwesomeIcon className="" icon={faX} size="lg" fixedWidth />
					<button type="submit" className="text-xl text-blue-500" style={MavenPro.bold.style}>
						Đăng
					</button>
				</div>
				<div className="mt-3">
					<input
						placeholder="TIÊU ĐỀ"
						style={MavenPro.bold.style}
						className="w-full text-2xl placeholder:opacity-50"
					/>
					<hr className="border border-black opacity-35" />
					<div className="mt-3 flex justify-end w-full h-fit">
						<div className="flex gap-x-3 w-[20%] h-auto">
							<label className="">
								<div>
									<Image
										alt="ImageIcon"
										src={ImagePicture}
										className="object-contain w-full h-full"
									/>
									<input
										onChange={(e) => {
											const target = e.target;
											console.log(target.files?.length);
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
