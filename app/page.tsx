import Image from 'next/image';
import Link from 'next/link';
import LoginButton from './ui/Buttons/Login';

export default function Home() {
	return (
		<>
			<div className="absolute w-screen h-[75px] bg-white z-[1]">
				<div className="relative block w-full h-1/4 bg-[#004aad]"></div>
				<div className="relative flex items-center w-full h-3/4">
					<Link className="absolute block ml-[2.5rem] h-[80%] w-[1rem]" href="/">
						<Image
							src="/images/logo.png"
							alt="LOGO"
							loading="eager"
							fill
							className="block relative"
							style={{ objectFit: 'contain' }}
						/>
					</Link>
					<div className="w-auto h-full ml-auto mr-[2rem] flex items-center">
						<LoginButton
							className="relative block cursor-pointer mr-[1.75rem]"
							url="/register"
							placeholder="Đăng ký"
							fontClass="text-[12.5px] px-[2.5rem] py-[0.25rem]"
						/>
						<LoginButton
							className="relative block cursor-pointer"
							url="/login"
							placeholder="Đăng nhập"
							fontClass="text-[12.5px] px-[2.5rem] py-[0.25rem]"
						/>
						{/* <div className="relative flex items-center h-full w-fit">
                    <Image
                        src={UserIcon}
                        alt="User Icon"
                        loading="eager"
                        className="relative h-[70%] w-auto cursor-pointer"
                        style={{ objectFit: 'contain' }}
                    />
                </div> */}
					</div>
				</div>
			</div>
			<main className="relative block h-screen">
				<Image
					src="/images/s.jpg"
					alt="Main Image"
					loading="eager"
					fill
					className="block relative"
					style={{ objectFit: 'cover' }}
				/>
				<div className="absolute w-full h-full bg-black/40">
					<div className="w-full h-full flex flex-col justify-center items-center ">
						<p className="absolute block w-fit mx-auto text-white text-[145px] paytone-one">
							iLearn
						</p>
						<div className="relative block w-fit h-fit mx-auto mt-[25%] ">
							<p className="bg-white/[.46] text-center text-[25px] text-white w-[65%] h-fit mx-auto p-5 rounded-[2rem] carlito">
								iLearn - Nền tảng giáo dục online sẽ đồng hành cùng bạn trong suốt khoảng thời gian
								cấp ba
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
