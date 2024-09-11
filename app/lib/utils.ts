export function imageSize(image: any) {
	return new Promise((resolve, reject) => {
		try {
			const fileReader = new FileReader();

			fileReader.onload = () => {
				const img = new Image();

				img.onload = () => {
					resolve({ width: img.width, height: img.height, src: img.src });
				};

				img.src = String(fileReader.result);
			};

			fileReader.readAsDataURL(image);
		} catch (e) {
			reject(e);
		}
	});
}
