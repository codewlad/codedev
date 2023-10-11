import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1280px;

    margin: 4rem auto;
    padding: 4rem;

    background-color: ${({ theme }) => theme.COLORS.GRAY_100};

    border: 1px solid ${({ theme }) => theme.COLORS.DEFAULT};
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;

    display: grid;
    grid-template-areas: 
        "header profile"
        "favorites profile"
        "posts profile";
    grid-gap: 3.2rem;
    grid-template-columns: auto 300px;
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
    display: flex;
    flex-direction: column;
    gap: 12px;
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

const divFrame = styled.div`
    display: flex;
    align-items: center;

    border-radius: 4px;
    background: ${({ theme }) => theme.COLORS.WHITE};
`

export const ProfileInfo = styled(divFrame)`
    flex-direction: column;
    align-items: flex-end;
    padding: 4px 12px;

    p {
        font: ${({ theme }) => theme.FONTS.UBUNTU_14}
    }

    p:first-child {
        font: ${({ theme }) => theme.FONTS.UBUNTU_16}
    }

    strong {
        color: ${({ theme }) => theme.COLORS.BLUE_200}
    }
`

export const SocialMedia = styled(divFrame)`
    justify-content: space-around;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 4.5rem;
        border-right: 1px solid ${({ theme }) => theme.COLORS.BLUE_200};
        background: ${({ theme }) => theme.COLORS.WHITE};

        svg {
            color: ${({ theme }) => theme.COLORS.BLUE_200};
        }

        &:focus {
            outline: none;
            background: radial-gradient(circle, rgba(163,189,237,1) 0%, rgba(105,145,199,1) 100%);
        }        

        &:hover {
            background: radial-gradient(circle, rgba(163,189,237,1) 0%, rgba(105,145,199,1) 100%);
        }

        &:active {
            background: radial-gradient(circle, rgba(163,189,237,1) 0%, rgba(95,135,189,1) 100%);
        }

        &:hover svg {
            color: ${({ theme }) => theme.COLORS.WHITE};
            animation: button 300ms;
        }

        &:focus svg {
            color: ${({ theme }) => theme.COLORS.WHITE};
            animation: button 300ms;
        }

        @keyframes button {
            0% {
                transform: translateY(0);
                opacity: 1;
            }

            50% {
                transform: translateY(-50%);
                opacity: 0;
            }

            51% {
                transform: translateY(50%);
                opacity: 0;
            }

            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }

    a:first-child {
        border-radius: 4px 0 0 4px;
    }

    a:last-child {
        border-right: none;
        border-radius: 0 4px 4px 0;
    }
`