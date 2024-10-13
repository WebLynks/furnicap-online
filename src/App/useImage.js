import { useEffect, useState } from 'react';

const useImage = (fileName, fileType = 'png') => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [image, setImage] = useState(null);

	useEffect(() => {
		const fetchImage = async () => {
			try {
				const response = await import(
					`../Assets/${fileName}.${fileType}`
				);
				setImage(response.default);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchImage();
	}, [fileName, fileType]);

	return {
		loading,
		error,
		image,
	};
};

export default useImage;
