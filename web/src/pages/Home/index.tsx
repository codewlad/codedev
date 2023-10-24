import { useState, useEffect, useRef, useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';
import {
	AiOutlineLinkedin,
	AiOutlineGithub,
	AiOutlineGlobal,
	AiOutlineInstagram,
	AiOutlineDoubleLeft,
	AiOutlineDoubleRight,
} from 'react-icons/ai';

import { Posts } from '@components/Posts';
import { PinnedCard } from '@components/PinnedCard';
import { ListOfPosts } from '@components/Posts/posts';
import { IteractiveProfile } from '@components/IteractiveProfile';

import { PostDTO } from '@dtos/PostDTO';

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
	DefaultButton,
	Pagination,
	ShowAllPosts,
} from './styles';

export function Home() {
	const theme = useContext(ThemeContext);

	const inputElement = useRef<HTMLInputElement | null>(null);
	const [search, setSearch] = useState('');
	const [filteredPosts, setFilteredPosts] = useState<PostDTO[]>([]);
	const [pinnedPostIsActive, setPinnedPostIsActive] =
		useState<boolean>(false);

	const pinnedPosts: string[] = [
		'cssflexbox-0005',
		'devicon-0006',
		'imagebank-0003',
		'mobilefirst-0004',
	];

	const [currentPage, setCurrentPage] = useState(1);
	const objectsPerPage = 3;
	const startIndex = (currentPage - 1) * objectsPerPage;
	const endIndex = startIndex + objectsPerPage;
	const totalPages = Math.ceil(filteredPosts.length / objectsPerPage);

	const handleFilterPosts = (search: string) => {
		const results = ListOfPosts.filter((post) => {
			const postText =
				post.title + ' ' + post.intro + ' ' + post.description;
			return postText.toLowerCase().includes(search.toLowerCase());
		});
		return results;
	};

	const handlePinnedPost = (item: string) => {
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

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const postID = searchParams.get('postID');

		if (postID) {
			handlePinnedPost(postID);
		}
	}, []);

	return (
		<Container>
			<Header>
				<a href='../Home'>
					<Title>CodeDev</Title>
				</a>
				<Subtitle>Ganhe tempo desenvolvendo!</Subtitle>
				<DefaultText style={{ maxWidth: '600px' }}>
					Este blog nasceu com a intenção de reunir diversas dicas,
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
			</Profile>
			<Pinned>
				<h2>Fixados</h2>
				<PinnedGroup>
					{pinnedPosts.map((item, index) => (
						<PinnedCard
							data={item}
							key={index}
							onClick={() => handlePinnedPost(item)}
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
							<ShowAllPosts
								aria-label='Limpar filtros'
								onClick={handleClearFilters}
							>
								Limpar filtros
							</ShowAllPosts>
						)}
					</SearchGroup>
				</ContentHeader>

				{filteredPosts
					.slice(startIndex, endIndex)
					.map((post, index) => (
						<Posts
							data={post}
							key={index}
						/>
					))}

				{filteredPosts.length <= 0 && (
					<p>Nenhuma postagem encontrada.</p>
				)}

				<Pagination>
					{filteredPosts.length > 3 && currentPage != 1 && (
						<DefaultButton
							aria-label='Previous page'
							onClick={() => setCurrentPage(currentPage - 1)}
							disabled={currentPage === 1}
						>
							<AiOutlineDoubleLeft />
						</DefaultButton>
					)}

					{totalPages > 0 &&
						Array.from({ length: totalPages }, (_, index) => {
							if (index === 0 || index === totalPages - 1) {
								return (
									<DefaultButton
										aria-label={`Go to page ${index + 1}`}
										key={index}
										onClick={() =>
											setCurrentPage(index + 1)
										}
										className={
											currentPage === index + 1
												? 'active'
												: ''
										}
										style={
											currentPage === index + 1
												? {
														backgroundColor:
															theme?.COLORS
																.BLUE_200,
														color: theme?.COLORS
															.WHITE,
												  }
												: { backgroundColor: 'initial' }
										}
									>
										{index + 1}
									</DefaultButton>
								);
							} else if (
								index === currentPage - 1 ||
								index === currentPage ||
								index === currentPage - 2
							) {
								return (
									<DefaultButton
										key={index}
										onClick={() =>
											setCurrentPage(index + 1)
										}
										className={
											currentPage === index + 1
												? 'active'
												: ''
										}
										style={
											currentPage === index + 1
												? {
														backgroundColor:
															theme?.COLORS
																.BLUE_200,
														color: theme?.COLORS
															.WHITE,
												  }
												: { backgroundColor: 'initial' }
										}
									>
										{index + 1}
									</DefaultButton>
								);
							} else {
								if (index === 1 && currentPage > 3) {
									return <span key={index}>...</span>;
								}

								if (
									index === totalPages - 2 &&
									currentPage < totalPages - 2
								) {
									return <span key={index}>...</span>;
								}
							}
						})}

					{filteredPosts.length > 3 && currentPage != totalPages && (
						<DefaultButton
							aria-label='Next page'
							onClick={() => setCurrentPage(currentPage + 1)}
							disabled={endIndex >= filteredPosts.length}
						>
							<AiOutlineDoubleRight />
						</DefaultButton>
					)}
				</Pagination>
			</Content>
		</Container>
	);
}
