import { Container, ImageGroups, Title } from './styles';

export function Posts({ data }) {
	return (
		<Container>
			<Title>{data.title}</Title>
			<p>{data.intro}</p>
			<p>{data.description}</p>
			<p>
				{data.callToAction}{' '}
				<a href={`https://${data.link}`}>{data.link}</a>
			</p>
			<ImageGroups>
				{/*
					<img
						src={`./src/assets/${data.image01}`}
						alt={data.alt01}
					/>
					<img
						src={`./src/assets/${data.image02}`}
						alt={data.alt02}
					/>
				*/}
				{data.images.map((item, index) => (
					<img
						src={`./src/assets/${item.image}`}
						alt={item.alt}
						key={index}
					/>
				))}
			</ImageGroups>
		</Container>
	);
}
