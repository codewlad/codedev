import {
	AiOutlineLinkedin,
	AiOutlineGithub,
	AiOutlineGlobal,
	AiOutlineInstagram,
} from 'react-icons/ai';

import { IteractiveProfile } from '../../components/IteractiveProfile';
import { ListOfPosts } from '../../components/Posts/posts';
import { Posts } from '../../components/Posts';

import {
	Container,
	Favorites,
	Header,
	Content,
	Profile,
	Subtitle,
	Title,
	DefaultText,
	SocialMedia,
	ProfileInfo,
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

			<Profile>
				<IteractiveProfile />

				<ProfileInfo>
					<p>
						Olá, eu sou <strong>Wladimir Gonçalves</strong>!
					</p>
					<p>Desenvolvedor Web</p>
					<p>São Paulo, Brasil</p>
				</ProfileInfo>

				<SocialMedia>
					<a
						href='https://www.linkedin.com/in/wladimir-gon%C3%A7alves'
						target='_blank'
					>
						<AiOutlineLinkedin size={36} />
					</a>
					<a
						href='https://github.com/codewlad'
						target='_blank'
					>
						<AiOutlineGithub size={36} />
					</a>
					<a
						href='https://instagram.com/codewlad'
						target='_blank'
					>
						<AiOutlineInstagram size={36} />
					</a>
					<a
						href='https://codewlad.vercel.app'
						target='_blank'
					>
						<AiOutlineGlobal size={36} />
					</a>
				</SocialMedia>
			</Profile>
			<Favorites>Favorites</Favorites>
			<Content>
				{ListOfPosts.map((post) => (
					<Posts
						data={post}
						key={post.id}
					/>
				))}
			</Content>
		</Container>
	);
}
