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
        color: ${({ theme }) => theme.COLORS.BLUE_200};
    }
`

export const Title = styled.h2`
    color: ${({ theme }) => theme.COLORS.BLUE_200};
`