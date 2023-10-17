import { CardName, Container } from './styles';

import { BsImages } from 'react-icons/bs';

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
				<Container
					onClick={onClick}
					style={
						{
							//backgroundImage: `url(${DeployURL}/${card?.images[0].image})`,
						}
					}
				>
					<BsImages size={72} />
					<CardName>{card?.title}</CardName>
				</Container>
			)}
		</>
	);
}
