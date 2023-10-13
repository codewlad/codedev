import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;

    background: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0.4rem;
`

export const Title = styled.h2`
    color: ${({ theme }) => theme.COLORS.BLUE_200};
`

export const ImageGroups = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    border: 1px solid red;
    
    img {
        width: 30%;
    }
`