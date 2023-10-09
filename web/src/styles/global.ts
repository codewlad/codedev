import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    #root {
		min-height: 100vh;
	}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.BLUE_200};
        font: ${({ theme }) => theme.FONTS.UBUNTU_16};
        color: ${({ theme }) => theme.COLORS.DEFAULT};
    }
`