import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    background: ${({ theme }) => theme.COLORS.WHITE};
`

export const Title = styled.h2`
    color: ${({ theme }) => theme.COLORS.BLUE_200};
`