import styled from "styled-components";

export const LoginDiv = styled.div`
  width: 18%;
  display: flex;
  justify-content: center;

  & > button {
    width: 100%;
    padding: 12px 0 10px;
    border: 0;
    border-radius: 20px;
    background-color: #fff;
    color: #0d083a;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
  }

  & > div {
    width: 50%;
    text-align: center;
    position: relative;

    &:hover div {
      display: block;
    }
  }
`;

export const UserDiv = styled.div`
  width: 125px;
  padding: 10px 0;
  border: 1px solid #555;
  border-radius: 5px;
  margin-top: 1px;
  position: absolute;
  right: 0;
  display: none;
  background-color: #f5f5f5;
  color: #000;

  h3 {
    margin-bottom: 10px;
    font-weight: 600;
  }

  button {
    width: 90%;
    padding: 7px 0 5px;
    border: 0;
    border-radius: 5px;
    background-color: #ff9999;
    color: #0d083a;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;

    &:hover { background-color: #ff8080; }
  }
`;
