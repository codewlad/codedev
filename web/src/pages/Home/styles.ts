import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1280px;

    margin: 4rem auto;
    padding: 4rem;

    background-color: ${({ theme }) => theme.COLORS.GRAY_100};

    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;

    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.50);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.50);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.50);

    display: grid;
    grid-template-areas: 
        "header profile"
        "favorites profile"
        "posts profile";
    grid-gap: 3.2rem;
`

export const Header = styled.div`
    grid-area: header;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`

export const Title = styled.h1`
    font: ${({ theme }) => theme.FONTS.ROBOTO_70};
    color: ${({ theme }) => theme.COLORS.BLUE_200};
`

export const Subtitle = styled.h1`
    font: ${({ theme }) => theme.FONTS.UBUNTU_21};
`

export const Profile = styled.div`
    grid-area: profile;
    border: 1px solid black;
`

export const Favorites = styled.div`
    grid-area: favorites;
    border: 1px solid black;
`

export const Posts = styled.div`
    grid-area: posts;
    border: 1px solid black;
`

export const DefaultText = styled.p`
    font: ${({ theme }) => theme.FONTS.UBUNTU_16};
`