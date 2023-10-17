import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: calc(25% - (1.2rem * 3) / 4);
    height: 14.2rem;

    display: flex;
    justify-content: center;

    padding: 16px;

    background: ${({ theme }) => theme.COLORS.WHITE};
    cursor: pointer;

    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-radius: 0.4rem;

    svg {
        color: ${({ theme }) => theme.COLORS.BLUE_200};
    }

    &:hover {
        border: 1px solid ${({ theme }) => theme.COLORS.BLUE_200};
    }

    &:is(:hover, :focus) button {
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: radial-gradient(circle, rgba(163,189,237,1) 0%, rgba(105,145,199,1) 100%);

        border-top: 1px solid ${({ theme }) => theme.COLORS.BLUE_200};
    }

    &:active button {
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: radial-gradient(circle, rgba(163,189,237,1) 0%, rgba(95,135,189,1) 100%);
    }

    @media (max-width: 770px) {
        width: calc(33% - (1.2rem * 2) / 3);        
    }

    @media (max-width: 620px) {
        width: calc(50% - (1.2rem) / 2);        
    }

    @media (max-width: 450px) {
        width: 100%;        
    }
`

export const CardName = styled.button`
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
    color: ${({ theme }) => theme.COLORS.DEFAULT};
    outline: none;
    border: none;
    border-radius: 0 0 0.2rem 0.2rem;

    &:focus {
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: radial-gradient(circle, rgba(163,189,237,1) 0%, rgba(95,135,189,1) 100%);
    }
`