import { Image } from 'react-bootstrap';
import useImage from '../useImage';

const ImageWrapper = ({ imageName, className }) => {
	const { loading, error, image } = useImage(imageName, 'png');

	if (error) return `${imageName} image`;

	return loading ? (
		`${imageName} image`
	) : (
		<Image fluid src={image} className={className} alt={imageName}></Image>
	);
};

export default ImageWrapper;
