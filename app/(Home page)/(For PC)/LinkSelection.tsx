import { fetchAllAuthorLinks } from '@/app/lib/actions';
import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef } from 'react';
import variables from '@/app/ui/Style/_defination.module.scss';
import { BookLink } from '@/app/lib/definations';

import { PaytoneOne, Carlito } from '@/app/ui/Style/font';

const bgCode = {
	code: variables.colorCode,
	codeOnHover: variables.colorCodeHover,
};

function BookTypeName(data: Omit<BookLink, 'Author'>) {
	let { Grade, Subject } = data;
	let SubjectVN;
	switch (Subject) {
		case 'Math':
			SubjectVN = 'Toán';
			break;
		case 'Physic':
			SubjectVN = 'Lý';
			break;
		default:
			SubjectVN = 'Hóa';
			break;
	}
	return [
		`Sách giáo khoa ${SubjectVN} ${Grade}`,
		`Giải sách giáo khoa ${SubjectVN} ${Grade}`,
		`Sách bài tập ${SubjectVN} ${Grade}`,
		`Giải sách giáo khoa ${SubjectVN} ${Grade}`,
	];
}

const LinkSelection = async (
	props: { data: Omit<BookLink, 'Author'>; refProps: any },
	ref: any
) => {
	const { data, refProps } = props;

	//*Check if ref property is nullish
	if (refProps == null) return null;

	//*If not null, extract LinksArray and LinkText from ref
	const { LinksArray, LinkText } = refProps.current;

	LinksArray.current = await fetchAllAuthorLinks(data);
	LinkText.current = BookTypeName(data);
	return (
		<div className={clsx('block relative left-1/2 -translate-x-1/2 w-3/4 h-auto')}>
			<div
				className={`pt-5 bg-[${bgCode.code}] grid grid-cols-[repeat(3,1fr)] grid-rows-[auto] w-full h-full rounded-b-2xl gap-y-2`}>
				{/* //*Run through 3 authors */}
				{['Cánh diều', 'Chân trời sáng tạo', 'Kết nối tri thức'].map((e, i) => {
					i = i + 1;
					return (
						<div
							key={e}
							className={`border-solid border-white ${
								// *If render content at the middle column, create a border both right and left.
								i == 2 && 'border-x-[1px]'
							} grid grid-cols-auto grid-rows-[max-content_repeat(2,max-content)_min-content_repeat(2,max-content)] justify-center`}>
							<div
								//* Running through every column and write the Author at the head
								className={`col-start-${i} col-end-${
									i + 1
								} row-start-1 row-end-2 flex items-center justify-center`}>
								<p style={PaytoneOne.style} className="text-[25px] text-white font-bold">
									{e}
								</p>
							</div>
							<hr className={`h-min col-start-${i} col-end-${i + 1} row-start-4 row-end-5`} />
							{/* //* Now running through every links of the i-th author. */}
							{LinksArray.current[i - 1].map((e: any, _index: number, arr: string | any[]) => {
								//*After render first 2 links, add 1 to the index to not render at the horizontal line.
								const index = _index + 2 >= 4 ? _index + 1 : _index;
								return (
									<div
										key={`Colum${i} - Row${index + 1}`}
										className={`col-start-${i} col-end-${i + 1} ${
											_index == 0 ? 'mt-3' : _index == arr.length - 1 ? 'mb-3' : 'my-3'
										} row-start-${index + 2} row-end-${
											index + 3
										} flex items-center justify-center`}>
										<Link href={`${e}`} style={Carlito.style} className="text-[15px] text-white">
											{LinkText.current[_index]}
										</Link>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default forwardRef(LinkSelection);
