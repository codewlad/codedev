import {
	BlankSpace,
	IteractiveImage,
	FirstLayerProfile,
	SecondLayerProfile,
} from './styles';

import spaceBg from '@assets/space-bg.png';

export const IteractiveProfile = () => {
	let controll = false;
	const animationTime = '0.1s';

	type EventProps = {
		e: React.MouseEvent<HTMLDivElement, MouseEvent>;
	};

	type LayerProps = {
		firstLayer: HTMLElement;
		secondLayer: HTMLElement;
	};

	function getIdNameAndPosition({ e }: EventProps) {
		const target = e.target as HTMLElement;
		const rect = target.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const id = target.id;
		const name = id.split('-')[1];

		return { x, y, name };
	}

	function getElements(name: string) {
		const firstLayer = document.querySelector(
			`#firstLayer-${name}`
		) as HTMLElement;
		const secondLayer = document.querySelector(
			`#secondLayer-${name}`
		) as HTMLElement;

		return { firstLayer, secondLayer };
	}

	function setAnimationTime({ firstLayer, secondLayer }: LayerProps) {
		firstLayer.style.transition = animationTime;
		secondLayer.style.transition = animationTime;
	}

	function setBackgroundPosition(
		{ firstLayer, secondLayer }: LayerProps,
		x: number,
		y: number
	) {
		firstLayer.style.backgroundPositionX = -(x / 50) + 'px';
		firstLayer.style.backgroundPositionY = -(y / 50) + 'px';
		secondLayer.style.backgroundPositionX = x / 40 - 4 + 'px';
		secondLayer.style.backgroundPositionY = y / 40 - 4 + 'px';
	}

	function cardAnimation({ e }: EventProps) {
		if (controll) {
			const { x, y, name } = getIdNameAndPosition({ e });
			const { firstLayer, secondLayer } = getElements(name);

			firstLayer.style.transition = '0s';
			secondLayer.style.transition = '0s';

			setBackgroundPosition({ firstLayer, secondLayer }, x, y);
		}
	}

	function clearBackgroundPosition({ e }: EventProps) {
		const { name } = getIdNameAndPosition({ e });
		const { firstLayer, secondLayer } = getElements(name);

		setAnimationTime({ firstLayer, secondLayer });

		firstLayer.style.backgroundPositionX = '0s';
		firstLayer.style.backgroundPositionY = '0s';
		secondLayer.style.backgroundPositionX = '0s';
		secondLayer.style.backgroundPositionY = '0s';

		controll = false;
	}

	function startAnimation({ e }: EventProps) {
		const { x, y, name } = getIdNameAndPosition({ e });
		const { firstLayer, secondLayer } = getElements(name);

		setAnimationTime({ firstLayer, secondLayer });

		setBackgroundPosition({ firstLayer, secondLayer }, x, y);

		setTimeout(() => {
			controll = true;
		}, 100);
	}

	return (
		<IteractiveImage
			id='card-profile'
			className='interactiveImage'
			onMouseOver={(e) => startAnimation({ e })}
			onMouseMove={(e) => cardAnimation({ e })}
			onMouseOut={(e) => clearBackgroundPosition({ e })}
		>
			<BlankSpace
				alt='Delimitador de espaço'
				src={spaceBg}
			/>

			<FirstLayerProfile id='firstLayer-profile'>
				<BlankSpace
					alt='Delimitador de espaço'
					src={spaceBg}
				/>
			</FirstLayerProfile>

			<SecondLayerProfile id='secondLayer-profile'>
				<BlankSpace
					alt='Delimitador de espaço'
					src={spaceBg}
				/>
			</SecondLayerProfile>
		</IteractiveImage>
	);
};
