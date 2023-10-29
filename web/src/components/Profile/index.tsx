import {
	AiOutlineLinkedin,
	AiOutlineGithub,
	AiOutlineGlobal,
	AiOutlineInstagram,
} from 'react-icons/ai';

import { IteractiveProfile } from '@components/IteractiveProfile';

import { Container, ProfileInfo, SocialMedia } from './styles';

export const Profile = () => {
	return (
		<Container>
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
					aria-label='Ir para o perfil no Linkedin'
				>
					<AiOutlineLinkedin size={36} />
				</a>
				<a
					href='https://github.com/codewlad'
					target='_blank'
					aria-label='Ir para o perfil no GitHub'
				>
					<AiOutlineGithub size={36} />
				</a>
				<a
					href='https://instagram.com/codewlad'
					target='_blank'
					aria-label='Ir para o perfil no Instagram'
				>
					<AiOutlineInstagram size={36} />
				</a>
				<a
					href='https://codewlad.vercel.app'
					target='_blank'
					aria-label='Ir para o portfolio'
				>
					<AiOutlineGlobal size={36} />
				</a>
			</SocialMedia>
		</Container>
	);
};
