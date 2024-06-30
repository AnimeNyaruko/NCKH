import Link from 'next/link';
import LoginButton from '../ui/Buttons/Login';
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
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
				<div className="absolute w-full h-full bg-black/40">{children}</div>
			</main>
		</>
	);
}
