import styled from "styled-components";

export const Wrapped_Layout = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    min-height: 100vh;
    @media (min-width: 734px) {
        flex-direction: row;
    }
`;

export const Wrapped_Layout_Aside = styled.aside`
    width: 100%;
    min-width: 320px;
    padding: 16px;
    position: relative;
    & > div {
        width: 100%;
        min-width: 320px;
        padding-right: 16px;
        position: relative;
    }
    @media (min-width: 734px) {
        & > div {
            width: 22%;
            position: fixed;
        }
        width: 30%;
        ::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 1px;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.5);
        }
    }
`;
