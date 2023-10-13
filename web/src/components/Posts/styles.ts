import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;

    background: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0.4rem;

    a {
        text-decoration: none;
        font: ${({ theme }) => theme.FONTS.UBUNTU_21};
        color: ${({ theme }) => theme.COLORS.BLUE_200};
    }
`

export const Title = styled.h2`
    color: ${({ theme }) => theme.COLORS.BLUE_200};
`