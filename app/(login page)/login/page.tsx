import { Metadata } from 'next';
import InputFields from '@/app/ui/Fields/LoginFields';
import LoginButton from '@/app/ui/Buttons/Login';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Đăng nhập',
};

export default function Page() {
	return (
		<main className="w-full h-full flex flex-col items-center ">
			<p className="relative block w-fit mx-autom mt-[1.75rem] text-white text-[145px] paytone-one">
				iLearn
			</p>
			<div className="relative flex flex-col items-center w-[30%] h-[60%] mx-auto bg-white/[.50]">
				<p className="text-white text-[40px] font-bold my-[2rem]">ĐĂNG NHẬP</p>
				<InputFields className="mb-[1.5rem]" placeholder="Email / Số điện thoại" />
				<InputFields className="mb-[1.5rem]" placeholder="Mật khẩu" />
				<LoginButton
					placeholder="Đăng nhập"
					url="/home"
					className="rounded-[2rem] mb-[1.25rem]"
					fontClass="text-[20px] py-[0.75rem] px-[3rem] rounded-[2rem]"
				/>
				<p className="text-black/[.5] text-[15px] font-bold">Bạn chưa có tài khoản?</p>
				<Link href="/register" className="text-black/[.5] text-[15px] font-bold">
					ĐĂNG KÝ
				</Link>
			</div>
		</main>
	);
}
