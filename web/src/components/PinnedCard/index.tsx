import { CardName, Container } from './styles';

import { ListOfPosts } from '../../components/Posts/posts';

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
				backgroundImage: `url(../../../../src/assets/${card?.images[0].image})`,
				backgroundSize: 'cover', // You can adjust this as needed
				backgroundRepeat: 'no-repeat', // You can adjust this as needed
			}}
		>
			<CardName>{card?.title}</CardName>
		</Container>
	);
}
