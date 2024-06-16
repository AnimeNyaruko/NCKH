import Image from 'next/image';
import LoginButton from './ui/Buttons/Login';
import UserIcon from '@/public/images/UserIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
	return (
		<main className="h-screen">
			<Image
				src="/images/s.jpg"
				alt="Main Image"
				loading="eager"
				fill
				className="block relative"
				style={{ objectFit: 'cover' }}
			/>
			<div className="absolute flex flex-col justify-center items-center w-full h-full bg-black/40">
				<p className="absolute block w-fit mx-auto text-white text-[145px] paytone-one">iLearn</p>
				<div className="relative block w-fit h-fit mx-auto mt-[25%] ">
					<p className="bg-white/[.46] text-center text-[25px] text-white w-[65%] h-fit mx-auto p-5 rounded-[2rem] carlito">
						iLearn - Nền tảng giáo dục online sẽ đồng hành cùng bạn trong suốt khoảng thời gian cấp
						ba
					</p>
				</div>
			</div>
			<div className="absolute w-screen h-[75px] bg-white">
				<div className="relative block w-full h-1/4 bg-[#004aad]"></div>
				<div className="relative flex items-center w-full h-3/4">
					<div className="absolute block ml-[2.5rem] h-[80%] w-[1rem]">
						<Image
							src="/images/logo.png"
							alt="LOGO"
							loading="eager"
							fill
							className="block relative"
							style={{ objectFit: 'contain' }}
						/>
					</div>
					<div className="w-auto h-full ml-auto mr-[2.5rem] flex items-center">
						<LoginButton
							className="relative block cursor-pointer mr-[2.5rem]"
							url="/login"
							placeholder="LOG IN"
						/>
						<div className="relative flex items-center h-full w-fit">
							<Image
								src={UserIcon}
								alt="User Icon"
								loading="eager"
								className="relative h-[90%] w-auto cursor-pointer"
								style={{ objectFit: 'contain' }}
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
