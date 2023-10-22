export const DeployURL = 'https://codewlad-dev.vercel.app';
//export const DeployURL = '../../..';

const Posts = [
	{
		post_id: 'squoosh-0001',
		title: 'Squoosh - Compressor de Imagens',
		intro: 'Uma das formas para otimizar um site é diminuir o tempo de carregamento e o consumo de dados assim que ele é aberto. Para isso, uma técnica extremamente eficiente é diminuir o tamanho dos arquivos de imagens!',
		description:
			'O Squoosh é um compressor de imagens online e gratuito que reduz significativamente o tamanho de uma imagem sem perder quase nada de qualidade! Ele também possui configurações de compressão, permite visualizar o resultado esperado e já mostra o tamanho final do arquivo.',
		callToAction: 'Acesse aqui: ',
		images: [
			{
				image: 'squoosh-01.png',
				alt: 'Tela inicial do squoosh',
			},
			{
				image: 'squoosh-02.webp',
				alt: 'Imagem aberta no squoosh',
			},
		],
		video: '',
		link: 'squoosh.app',
		listOfLinks: [],
		credits: {
			creditsName: '',
			creditsAddress: '',
		},
		postType: 'website',
	},
	{
		post_id: 'pagespeed-0002',
		title: 'PageSpeed Insights - Avaliador de páginas web',
		intro: 'Hoje eu vou apresentar uma ferramenta gratuita desenvolvida pelo Google que todo desenvolvedor Front End deveria conhecer!',
		description:
			'O PageSpeed Insights é uma ferramenta que avalia a velocidade e a otimização de páginas da web. Ele fornece pontuações e sugestões para melhorar o desempenho, crucial para uma melhor experiência do usuário e classificações mais altas nos mecanismos de busca.',
		callToAction: 'Acesse aqui: ',
		images: [
			{
				image: 'pagespeed-01.webp',
				alt: 'Tela inicial do pageSpeed',
			},
			{
				image: 'pagespeed-02.webp',
				alt: 'Site verificado no pageSpeed',
			},
		],
		video: '',
		link: 'pagespeed.web.dev',
		listOfLinks: [],
		credits: {
			creditsName: '',
			creditsAddress: '',
		},
		postType: 'website',
	},
	{
		post_id: 'imagebank-0003',
		title: '5 Sites de banco de imagens gratuitas',
		intro: 'Precisa de uma imagens específica para seu projeto? Nos 5 sites abaixo você pode pegar qualquer imagem gratuitamente e sem direitos autorais:',
		description: '',
		callToAction: '',
		images: [],
		video: '',
		link: '',
		listOfLinks: [
			{
				linkTitle: 'Pexels',
				linkAddress: 'pexels.com',
			},
			{
				linkTitle: 'Unplash',
				linkAddress: 'unsplash.com',
			},
			{
				linkTitle: 'Gratisography',
				linkAddress: 'gratisography.com',
			},
			{
				linkTitle: '500px',
				linkAddress: '500px.com',
			},
			{
				linkTitle: 'VisualHunt',
				linkAddress: 'visualhunt.com',
			},
		],
		credits: {
			creditsName: 'Mattheus Pereira',
			creditsAddress: 'linkedin.com/in/mattheuspereira',
		},
		postType: 'listOfWebsites',
	},
	{
		post_id: 'mobilefirst-0004',
		title: 'Mobile First - Simulador de dispositivos',
		intro: 'O Mobile First é uma extensão para navegadores que permite simular um dispositivo mobile. Ele é perfeito para testar a responsividade de qualquer site com apenas um clique.',
		description:
			'Além de poder escolher entre diversos modelos gratuitos, você pode girar o dispositivo, fazer uma captura de tela ou gravar um gif animado para compartilhar onde quiser.',
		callToAction: 'Acesse aqui: ',
		images: [
			{
				image: 'mobilefirst-01.png',
				alt: 'Site para baixar a extensão',
			},
			{
				image: 'mobilefirst-02.png',
				alt: 'Site sendo exibido em um dispositivo mobile',
			},
		],
		video: '',
		link: 'webmobilefirst.com',
		listOfLinks: [],
		credits: {
			creditsName: '',
			creditsAddress: '',
		},
		postType: 'website',
	},
	{
		post_id: 'cssflexbox-0005',
		title: 'CSS Flexbox',
		intro: 'O Flexbox (ou Flexible Box Layout) é um modelo de layout em CSS projetado para simplificar o design de layouts complexos e a distribuição de espaço entre os elementos em uma página da web.',
		description:
			'Confira abaixo esse vídeo sobre as principais propriedades:',
		callToAction: '',
		images: [],
		video: 'flexbox.mp4',
		link: '',
		listOfLinks: [],
		credits: {
			creditsName: '@coding.stella',
			creditsAddress: 'instagram.com/coding.stella',
		},
		postType: 'video',
	},
];

export const ListOfPosts = Posts.slice(0).reverse();
