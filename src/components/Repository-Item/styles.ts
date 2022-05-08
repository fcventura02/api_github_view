import styled from "styled-components";

export const Wrapped = styled.div`
    display: flex;
    overflow: auto;
    flex-direction: column;
    border-radius: 8px;
    background-color: var(--color-neon-secondary);
    margin: 16px 16px;
    width: 100%;
    max-width: 350px;
    height: 150px;
    transition: transform 0.3s ease-in, background-color 0.3s ease-in,
        color 0.3s ease-in;

    position: relative;

    ::-webkit-scrollbar {
        width: 3px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 80px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 80px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    &:hover {
        z-index: 3;
        background-color: #fff;
        color: var(--color-neon-secondary);
        transform: scale(1.05);
        ::-webkit-scrollbar-thumb {
            background: var(--color-neon-secondary);
            border-radius: 80px;
        }
    }
`;

export const Wrapped_Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
`;

export const Wrapped_FullName = styled.p`
    font-size: 16px;
    font-weight: 300;
    margin: 8px 0;
`;

export const Wrapped_Link = styled.a`
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 300;
    padding: 8px;
`;
