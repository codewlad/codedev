import { Container, ImageContainer } from './styles';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import { PostDTO } from '../../dtos/PostDTO';

type Props = {
	data: PostDTO;
};

type ImageProps = {
	original: string;
	thumbnail: string;
};

export function Posts({ data }: Props) {
	const images: ImageProps[] = [];

	data.images.map((item) => {
		const image = {
			original: `./src/assets/${item.image}`,
			thumbnail: `./src/assets/${item.image}`,
		};

		images.push(image);
	});

	return (
		<Container>
			<h2>{data.title}</h2>
			<p>{data.intro}</p>
			<p>{data.description}</p>
			<p>
				<strong>{data.callToAction}</strong>
				<a
					href={`https://${data.link}`}
					target='_blank'
				>
					{data.link}
				</a>
			</p>

			<ImageContainer>
				<ImageGallery
					items={images}
					showPlayButton={true}
					showFullscreenButton={true}
					slideInterval={2000}
					disableKeyDown={true}
					showBullets={true}
				/>
			</ImageContainer>
		</Container>
	);
}
