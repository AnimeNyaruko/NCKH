import { Dispatch, useState } from 'react';
import Add from './add';
import Menu from './menu';

export default function Side(props: {
	render: { ReRender: boolean; setRender: Dispatch<boolean> };
}) {
	const [AddComp, setAddComp] = useState<boolean>(false);

	return (
		<>
			{AddComp && (
				<Add
					render={{
						ReRender: props.render.ReRender,
						setRender: props.render.setRender,
					}}
					setAddComp={setAddComp}
				/>
			)}
			<Menu setAddComp={setAddComp} />
		</>
	);
}
