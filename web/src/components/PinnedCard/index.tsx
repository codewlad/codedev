import { CardName, Container } from './styles';

import { ListOfPosts } from '../../components/Posts/posts';

type Props = {
	data: string;
	onClick: () => void;
};

export function PinnedCard({ data, onClick }: Props) {
	const card = ListOfPosts.find((post) => post.post_id === data);

	const url =
		'https://raw.githubusercontent.com/codewlad/codedev/main/web/src/assets';

	return (
		<Container
			onClick={onClick}
			style={{
				backgroundImage: `url(${url}/${card?.images[0].image})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<CardName>{card?.title}</CardName>
		</Container>
	);
}
