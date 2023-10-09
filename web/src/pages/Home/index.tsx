import {
	Container,
	Favorites,
	Header,
	Posts,
	Profile,
	Subtitle,
	Title,
	DefaultText,
} from './styles';

export function Home() {
	return (
		<Container>
			<Header>
				<Title>CodeDev</Title>
				<Subtitle>Ganhe tempo desenvolvendo!</Subtitle>
				<DefaultText style={{ maxWidth: '600px' }}>
					Este site nasceu com a intenção de reunir diversas dicas,
					ferramentas e sites que facilitam e otimizam o dia a dia de
					nós, Devs! Sempre que possível, darei o devido crédito ao
					autor ou à fonte da informação. Usem sem moderação!
				</DefaultText>
			</Header>

			<Profile>Profile</Profile>

			<Favorites>Favorites</Favorites>

			<Posts>Posts</Posts>
		</Container>
	);
}
