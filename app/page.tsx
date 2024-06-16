import Image from 'next/image';

export default function Home() {
	return (
		<>
			<div className="w-full h-full flex flex-col justify-center items-center ">
				<p className="absolute block w-fit mx-auto text-white text-[145px] paytone-one">iLearn</p>
				<div className="relative block w-fit h-fit mx-auto mt-[25%] ">
					<p className="bg-white/[.46] text-center text-[25px] text-white w-[65%] h-fit mx-auto p-5 rounded-[2rem] carlito">
						iLearn - Nền tảng giáo dục online sẽ đồng hành cùng bạn trong suốt khoảng thời gian cấp
						ba
					</p>
				</div>
			</div>
		</>
	);
}
