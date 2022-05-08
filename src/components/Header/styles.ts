import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;
    input {
        border: 1px solid #225ed8;
        background-color: #225ed8;
        border-right: none;
        outline: none;
        border-radius: 8px 0 0 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 500;
        &::placeholder {
            color: #fff;
        }
        &:focus {
            &::placeholder {
                color: var(--color-blue);
            }
            color: #225ed8;
            background-color: #fff;
            border-color: #fff;
            box-shadow: 0 0 3px #fff, 0 0 7px #fff, 0 0 14px #fff,
                0 0 16px var(--color-blue), 0 0 42px var(--color-blue),
                0 0 82px var(--color-blue), 0 0 92px var(--color-blue);
            animation: flicker-box 1.5s alternate;
        }
    }
    button {
        background-color: var(--color-blue);
        border: 1px solid var(--color-blue);
        color: #fff;
        padding: 8px 16px;
        border-radius: 0 8px 8px 0;
        font-size: 1.4rem;
        &:hover {
            color: #225ed8;
            background-color: #fff;
            border-color: #fff;
            box-shadow: 0 0 3px #fff, 0 0 7px #fff, 0 0 14px #fff,
                0 0 16px var(--color-blue), 0 0 42px var(--color-blue),
                0 0 82px var(--color-blue), 0 0 92px var(--color-blue);
            animation: flicker-box 1.5s alternate;
        }
    }
`;
