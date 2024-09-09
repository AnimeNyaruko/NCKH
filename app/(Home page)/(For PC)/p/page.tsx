'use client';

import { PaytoneOne } from '@/app/ui/Style/font';
import Books from '@/public/images/community/books.png';
import QnA from '@/public/images/community/QnA.png';

import Image from 'next/image';

export default function Page() {
	return (
		<div className="relative h-full">
			<div className="absolute w-full h-full bg-black/50 -z-[1]"></div>
			<div className="p-12 w-full h-full flex flex-col gap-y-16 text-white">
				<p className="text-[25px]">
					<span style={PaytoneOne.style}>iLearn</span> là một nền tảng học tập tiên tiến, được thiết
					kế đặc biệt cho học sinh cấp 3 có nhu cầu học các môn <b>Toán, Lý, và Hóa</b>. Với tên gọi
					mang ý nghĩa <b>"học tập thông minh"</b> <span style={PaytoneOne.style}>iLearn</span> cam
					kết mang đến trải nghiệm học tập tiện lợi và hiện đại cho người dùng.
				</p>
				<div className="grow grid grid-cols-[2fr_3fr] grid-rows-1 gap-x-8">
					<div className="flex flex-col pb-12 childClass-[p]:text-justify">
						<p style={PaytoneOne.style} className="text-3xl flex justify-center">
							TÍNH NĂNG NỔI BẬT
						</p>
						<div className="grow grid grid-cols-1 grid-rows-2">
							<div className="flex items-center">
								<p>
									Học tập: Cung cấp đường dẫn đến các sách giáo khoa điện tử, sách bài tập, và lời
									giải từ các trang web học tập uy tín. Điều này giúp học sinh dễ dàng truy cập và
									ôn tập kiến thức mọi lúc, mọi nơi.
								</p>
								<div className="w-full h-full flex items-center justify-center">
									<Image src={Books} alt="Books" className="object-contain w-full h-full" />
								</div>
							</div>
							<div className="flex items-center">
								<div className="pr-5 w-full h-full flex items-center justify-center">
									<Image src={QnA} alt="Books" className="object-contain w-full h-full" />
								</div>
								<p>
									Diễn đàn: Là nơi để cộng đồng học sinh chia sẻ tài liệu, hình ảnh và file bài học,
									giúp tăng cường sự kết nối và học hỏi lẫn nhau mà không cần phải đăng nhập hay tạo
									tài khoản.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-y-4 px-8 pb-16 childClass-[p]:text-justify">
						<p style={PaytoneOne.style} className="text-3xl flex justify-center">
							ĐỊNH HƯỚNG PHÁT TRIỂN TRONG TƯƠNG LAI
						</p>
						<div className="grow flex flex-col justify-between">
							<div className="rounded-full p-5 border-2 border-solid border-white bg-[#2196f3]/75">
								<p>
									Mở rộng thêm các môn học xã hội như Văn, Sử, Địa để phục vụ đa dạng nhu cầu học
									tập.
								</p>
							</div>
							<div className="rounded-full p-5 border-2 border-solid border-white bg-[#2196f3]/75">
								<p>
									Tích hợp các tính năng tương tác học tập kết hợp với công cụ quản lý thời gian,
									giúp học sinh lên kế hoạch học tập hiệu quả.
								</p>
							</div>
							<div className="rounded-full p-5 border-2 border-solid border-white bg-[#2196f3]/75">
								<p>
									Phát triển tính năng gia sư trực tuyến, kết nối học sinh với giáo viên hoặc sinh
									viên để hỗ trợ giải đáp thắc mắc.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
