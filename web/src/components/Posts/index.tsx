import { Container, Title } from './styles';

export function Posts({ data }) {
	return (
		<Container>
			<Title>{data.title}</Title>
		</Container>
	);
}
