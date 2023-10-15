import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;
    margin-bottom: 3.2rem;

    background: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0.4rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};

    a {
        text-decoration: none;
        font: ${({ theme }) => theme.FONTS.UBUNTU_21};
        font-size: clamp(1.6rem, 1rem + 1vw, 2.1rem);
        color: ${({ theme }) => theme.COLORS.BLUE_200};

        &:is(:hover, :focus) {
            color: ${({ theme }) => theme.COLORS.BLUE_100};
            outline: none;
        }
    }
`

export const ImageContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
`