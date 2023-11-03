import { CardName, Container } from './styles';

import { CgWebsite } from 'react-icons/cg';
import { BiMoviePlay } from 'react-icons/bi';

import { ListOfPosts, DeployURL } from '@components/Posts/posts';

type Props = {
	data: string;
	onClick: () => void;
};

export function PinnedCard({ data, onClick }: Props) {
	const card = ListOfPosts.find((post) => post.post_id === data);

	return (
		<>
			{card?.postType === 'website' && (
				<Container
					onClick={onClick}
					style={{
						backgroundImage: `url(${DeployURL}/${card?.images[0].image})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<CardName>{card?.title}</CardName>
				</Container>
			)}

			{card?.postType === 'listOfWebsites' && (
				<Container onClick={onClick}>
					<CgWebsite size={72} />
					<CardName>{card?.title}</CardName>
				</Container>
			)}

			{card?.postType === 'video' && (
				<Container onClick={onClick}>
					<BiMoviePlay size={72} />
					<CardName>{card?.title}</CardName>
				</Container>
			)}
		</>
	);
}
