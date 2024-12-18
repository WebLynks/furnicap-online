import { Button, Card, CardImgOverlay, Col, Image } from 'react-bootstrap';
import useImage from '../useImage';

function ProductCard({ name, image, pdf }) {
	const { loading, error, image: img } = useImage(image);

	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = `/pdf/${pdf}`;
		// link.download = pdf;
		link.target = '_blank';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	if (error) return `${name} image`;

	return (
		<Col>
			<Card
				role="button"
				onClick={handleDownload}
				className="position-relative border-0 h-100 shadow-md"
			>
				{loading ? (
					`${name} image`
				) : (
					<Image
						alt={`${name} image`}
						className="border-0 rounded-3 min-vh-30 h-100"
						src={img}
					/>
				)}
				<div className="position-absolute top-0 m-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						className="bi bi-filetype-pdf"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"
						/>
					</svg>
				</div>
				<CardImgOverlay className="m-3">
					<Button className="position-absolute start-auto end-0 start-md-0 end-md-auto border-dark border-2 bottom-0 rounded-pill bg-light text-dark fs-6 px-4">
						{name}
					</Button>
				</CardImgOverlay>
			</Card>
		</Col>
	);
}

export default ProductCard;
