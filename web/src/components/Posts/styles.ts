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

export const Credits = styled.p`
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-top: 1.2rem;
    padding: 0.4rem;
    border-radius: 0.4rem;
    text-align: center;

    a {
        font: ${({ theme }) => theme.FONTS.UBUNTU_16};
        font-weight: bold;
    }
`

export const LinksList = styled.p`
    display: flex;
    align-items: center;
    
    svg {
        margin-right: 0.4rem;
        color: ${({ theme }) => theme.COLORS.BLUE_200};
    }

    a {
        margin-left: 0.4rem;
    }
`

export const Video = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`