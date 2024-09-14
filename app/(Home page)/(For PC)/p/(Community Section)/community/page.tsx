'use client';

import { useState } from 'react';

import Article from './(ui)/article';
import React from 'react';
import Side from './(ui)/side';

export default function Page() {
	const [ReRender, setRender] = useState<boolean>(false);

	const ArticleRender = React.memo(Article, (prev, current) => {
		console.log(prev, current);
		return prev.render === current.render;
	});

	return (
		<>
			<ArticleRender render={ReRender} />
			<Side
				render={{
					ReRender: ReRender,
					setRender: setRender,
				}}
			/>
		</>
	);
}
