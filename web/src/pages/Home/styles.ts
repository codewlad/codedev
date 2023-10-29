import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
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
        "header aside"
        "pinned aside"
        "content aside";
    grid-gap: 3.2rem;
    grid-template-columns: auto 300px;

    transition: all 200ms;

        aside {
            grid-area: aside;
            //border: 1px solid red;
        }

    @media (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        margin: 4rem 0;

        aside {
            position: absolute;
            top: -2px;
            right: -2px;
            width: calc(40px + 3vw);
            height: calc(40px + 3vw);

            border-radius: 0 0 0 0.4rem;
            border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLUE_200};
            border-left: 1px solid ${({ theme }) => theme.COLORS.BLUE_200};

            --webkit-box-shadow: -9px 10px 12px -13px rgba(0,0,0,0.75);
            -moz-box-shadow: -9px 10px 12px -13px rgba(0,0,0,0.75);
            box-shadow: -9px 10px 12px -13px rgba(0,0,0,0.75);

            transition: all 200ms;

            div:first-child svg {
                transition: all 200ms;
                font-size: calc(0.8rem + 1.5vw);
            }

            &:hover {
                width: calc(50px + 3vw);
                height: calc(50px + 3vw);

                cursor: pointer;
            }

            &:hover div:first-child svg {
                font-size: calc(1.2rem + 1.5vw);
            }

            background: linear-gradient(
                225deg,
                ${({ theme }) => theme.COLORS.BLUE_200} 0%,
                ${({ theme }) => theme.COLORS.BLUE_200} 50%,
                ${({ theme }) => theme.COLORS.BLUE_100} 75%,
                ${({ theme }) => theme.COLORS.GRAY_100} 100%
            );
        }
    }

    @media (max-width: 620px) {
        margin: 0;
        padding: 2rem;
    }

    @media (max-width: 450px) {
        padding: 2rem;
    }
`

export const OpenAside = styled.div`
    position: absolute;
    left: 0.8rem;
    bottom: 0.8rem;
    display: none;

    @media (max-width: 1100px) {
        display: flex;
    }

    @media (max-width: 620px) {
        left: 0.6rem;
        bottom: 0.6rem;
    }
`

export const Header = styled.div`
    grid-area: header;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    a {
        text-decoration: none;
    }
`

export const Title = styled.h1`
    font: ${({ theme }) => theme.FONTS.ROBOTO_70};
    font-size: clamp(7rem, 1rem + 17vw, 15rem);
    color: ${({ theme }) => theme.COLORS.BLUE_200};
`

export const Subtitle = styled.h1`
    font: ${({ theme }) => theme.FONTS.UBUNTU_21};
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
    transition: all 200ms;
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

