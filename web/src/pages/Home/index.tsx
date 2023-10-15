import { useState, useEffect, useRef } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
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
	Pinned,
	PinnedGroup,
	Header,
	Content,
	Profile,
	Subtitle,
	Title,
	DefaultText,
	SocialMedia,
	ProfileInfo,
	ContentHeader,
	SearchGroup,
	Search,
	ShowAllPosts,
} from './styles';
import { PinnedCard } from '../../components/PinnedCard';

import { PostDTO } from '../../dtos/PostDTO';

export function Home() {
	const inputElement = useRef<HTMLInputElement | null>(null);
	const [search, setSearch] = useState('');
	const [filteredPosts, setFilteredPosts] = useState<PostDTO[]>([]);
	const [pinnedPostIsActive, setPinnedPostIsActive] =
		useState<boolean>(false);

	const pinnedPosts: string[] = [
		'squoosh-0001',
		'pagespeed-0002',
		'squoosh-0001',
		'pagespeed-0002',
	];

	const handleFilterPosts = (search: string) => {
		const results = ListOfPosts.filter((post) => {
			const postText =
				post.title + ' ' + post.intro + ' ' + post.description;
			return postText.toLowerCase().includes(search.toLowerCase());
		});
		return results;
	};

	const handlePinnedClick = (item: string) => {
		const results = ListOfPosts.filter((post) => {
			return post.post_id === item;
		});
		setFilteredPosts(results);
		setPinnedPostIsActive(true);
	};

	const handleClearFilters = () => {
		setSearch('');
		setFilteredPosts(ListOfPosts);
		setPinnedPostIsActive(false);
		if (inputElement.current) {
			inputElement.current.value = '';
		}
	};

	useEffect(() => {
		const searchResults = handleFilterPosts(search);
		setFilteredPosts(searchResults);
	}, [search]);

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
			<Pinned>
				<h2>Fixados</h2>
				<PinnedGroup>
					{pinnedPosts.map((item, index) => (
						<PinnedCard
							data={item}
							key={index}
							onClick={() => handlePinnedClick(item)}
						/>
					))}
				</PinnedGroup>
			</Pinned>
			<Content>
				<ContentHeader>
					<h2>Postagens</h2>
					<SearchGroup>
						<Search>
							<BiSearchAlt size={24} />

							<input
								id='search'
								type='text'
								placeholder='O que deseja buscar?'
								autoComplete='off'
								onChange={(e) => setSearch(e.target.value)}
								ref={inputElement}
							/>
						</Search>

						{(pinnedPostIsActive || search.length > 0) && (
							<ShowAllPosts onClick={handleClearFilters}>
								Limpar filtros
							</ShowAllPosts>
						)}
					</SearchGroup>
				</ContentHeader>

				{filteredPosts.map((post, index) => (
					<Posts
						data={post}
						key={index}
					/>
				))}

				{filteredPosts.length <= 0 && (
					<p>Nenhuma postagem encontrada.</p>
				)}
			</Content>
		</Container>
	);
}
