import { CardName, Container } from './styles';

import { ListOfPosts, DeployURL } from '@components/Posts/posts';

type Props = {
	data: string;
	onClick: () => void;
};

export function PinnedCard({ data, onClick }: Props) {
	const card = ListOfPosts.find((post) => post.post_id === data);

	return (
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
	);
}
