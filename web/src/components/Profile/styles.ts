import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    @media (max-width: 1100px) {
        display: none;        
    }
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