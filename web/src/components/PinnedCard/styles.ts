import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: calc(25% - (1.2rem * 3) / 4);
    height: 10rem;

    background: ${({ theme }) => theme.COLORS.WHITE};
    cursor: pointer;

    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-radius: 0.4rem;

    &:hover {
        border: 1px solid ${({ theme }) => theme.COLORS.BLUE_200};
    }

    &:hover div {
        background: radial-gradient(circle, rgba(163,189,237,1) 0%, rgba(105,145,199,1) 100%);
    }

    &:active div {
        background: radial-gradient(circle, rgba(163,189,237,1) 0%, rgba(95,135,189,1) 100%);
    }
`

export const CardName = styled.div`
    width: 100%;
    height: 4rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.4rem;
    bottom: 0;
    background-color: rgba(163, 189, 237, 0.9);
    font: ${({ theme }) => theme.FONTS.UBUNTU_12};
`