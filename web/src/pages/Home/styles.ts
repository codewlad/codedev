import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1280px;

    margin: 4rem auto;
    padding: 4rem;

    background-color: ${({ theme }) => theme.COLORS.GRAY_100};

    border: 1px solid ${({ theme }) => theme.COLORS.DEFAULT};
    border-radius: 0.4rem;
    -moz-border-radius: 0.4rem;
    -webkit-border-radius: 0.4rem;

    display: grid;
    grid-template-areas: 
        "header profile"
        "pinned profile"
        "content profile";
    grid-gap: 3.2rem;
    grid-template-columns: auto 300px;

    @media (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        margin: 4rem 0;
    }

    @media (max-width: 620px) {
        margin: 0;
        padding: 2rem;
    }

    @media (max-width: 450px) {
        padding: 2rem;
    }
`

export const Header = styled.div`
    grid-area: header;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`

export const Title = styled.h1`
    font: ${({ theme }) => theme.FONTS.ROBOTO_70};
    font-size: clamp(7rem, 1rem + 17vw, 15rem);
    color: ${({ theme }) => theme.COLORS.BLUE_200};
`

export const Subtitle = styled.h1`
    font: ${({ theme }) => theme.FONTS.UBUNTU_21};
`

export const Profile = styled.div`
    grid-area: profile;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    @media (max-width: 1100px) {
        display: none;        
    }
`

export const Pinned = styled.div`
    grid-area: pinned;
    
    h2 {
        color: ${({ theme }) => theme.COLORS.BLUE_200};
        margin-bottom: 1.2rem;
    }
`

export const PinnedGroup = styled.div`
    display: flex;
    gap: 1.2rem;
    width: 100%;

    flex-wrap: wrap;
`

export const Content = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    border-radius: 0.4rem;

    h2 {
        color: ${({ theme }) => theme.COLORS.BLUE_200};
    }
`

export const DefaultText = styled.p`
    font: ${({ theme }) => theme.FONTS.UBUNTU_16};
`

const divFrame = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-radius: 0.4rem;
    background: ${({ theme }) => theme.COLORS.WHITE};
`

export const ProfileInfo = styled(divFrame)`
    flex-direction: column;
    align-items: flex-end;
    padding: 0.4rem 1.2rem;

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
        background: ${({ theme }) => theme.COLORS.WHITE};
        border-right: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};

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
        border-radius: 0.3rem 0 0 0.3rem;
    }

    a:last-child {
        border-right: none;
        border-radius: 0 0.3rem 0.3rem 0;
    }
`

export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.2rem;
`

export const SearchGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.2rem;

    @media (max-width: 620px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-end;
        gap: 1.2rem;
    }
`

export const Search = styled.div`
    display: flex;
    gap: 0.4rem;
    align-items: center;

    input {
        height: 2.6rem;
        width: 16rem;
        border-radius: 0.4rem;
        border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
        padding: 0.4rem 1.2rem;
        color: ${({ theme }) => theme.COLORS.DEFAULT};

        &:focus {
            outline: 2px solid ${({ theme }) => theme.COLORS.BLUE_200}; 
        }
    }
`

export const DefaultButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.6rem;
    padding: 0 1rem;

    color: ${({ theme }) => theme.COLORS.BLUE_200};
    outline: none;
    border-radius: 0.4rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_200};

    font: ${({ theme }) => theme.FONTS.UBUNTU_14};
    cursor: pointer;

    &:focus {
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: radial-gradient(circle, rgba(163,189,237,1) 0%, rgba(105,145,199,1) 100%);
    }

    &:hover {
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: radial-gradient(circle, rgba(163,189,237,1) 0%, rgba(105,145,199,1) 100%);
    }

    &:active {
        background: radial-gradient(circle, rgba(163,189,237,1) 0%, rgba(95,135,189,1) 100%);
    }
`

export const ShowAllPosts = styled(DefaultButton)`
    width: 16rem;
    padding: 0 1.2rem;
`

export const Pagination = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.4rem;
`

