import styled from "styled-components";

export const Wrapped = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Wrapped_Info_User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-size: 32px;
    font-weight: bold;
    text-shadow: 0 0 3px #fff, 0 0 7px #fff, 0 0 14px #fff,
        0 2px 16px var(--color-blue), 0 0 42px var(--color-blue),
        0 0 82px var(--color-blue), 0 0 92px var(--color-blue);
        animation: alternate infinite 3s flicker-text;
  }
  h3 {
    font-size: 18px;
    font-weight: 400;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Wrapped_Status_Count = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    margin-top: 10px;
    text-align: center;
  }

  h4{
    font-size: .8rem;
  }
  span{
    font-size: .8rem;
  }
`;

export const Wrapped_User_Generic = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  h3 {
    margin-right: 8px;
  }
  a {
    font-size: 1rem;
    color: #d0d0d0;
  }
  span{
    font-size: 1rem;
    color: #fff;
    margin-left: 5px;
  }
`;

export const Wrapped_Img = styled.img`

  border-radius: 50%;
  width: 200px;
  margin: 8px auto;
`;