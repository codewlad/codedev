import { Container, ImageContainer, Credits, LinksList } from './styles';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import { PostDTO } from '@dtos/PostDTO';

import { GiCheckMark } from 'react-icons/gi';

import { DeployURL } from '@components/Posts/posts';

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
			original: `${DeployURL}/${item.image}`,
			thumbnail: `${DeployURL}/${item.image}`,
		};

		images.push(image);
	});

	return (
		<Container>
			<h2>{data.title}</h2>
			<p>{data.intro}</p>
			{data.description && <p>{data.description}</p>}

			{data.listOfLinks.length > 0 &&
				data.listOfLinks.map((item, index) => (
					<LinksList key={index}>
						<GiCheckMark />
						{item.linkTitle}:
						<a
							href={`https://${item.linkAddress}`}
							target='_blank'
						>
							{item.linkAddress}
						</a>
					</LinksList>
				))}

			{data.callToAction && (
				<p>
					<strong>{data.callToAction}</strong>
					<a
						href={`https://${data.link}`}
						target='_blank'
					>
						{data.link}
					</a>
				</p>
			)}

			{images.length > 0 && (
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
			)}

			{data.credits.creditsName && (
				<Credits>
					Créditos da postagem:{' '}
					<a
						href={`https://${data.credits.creditsAddress}`}
						target='_blank'
					>
						{data.credits.creditsName}
					</a>
				</Credits>
			)}
		</Container>
	);
}
