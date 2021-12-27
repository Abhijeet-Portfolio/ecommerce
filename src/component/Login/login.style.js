import styled from "styled-components";

export const FigureClose = styled.figure`
    width: 1.5%;
    position: absolute;
    top: 150px;
    right: 33%;
    z-index: 100;
`

export const FormWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0,0.8);
    
`

export const Form = styled.form`
    width: 25%;
    padding: 20px 0;
    border: 1px solid #aaa;
    border-radius: 10px;
    margin: 20px auto;
    background-color: #fff;
    box-shadow: 0 0 10px 1px #aaa;
    color: #000;
`;

export const FormGroup = styled.div`
    width: 90%;
    margin: 10px auto;

    & input {
        box-sizing: border-box;
        width: 100%;
        margin: 5px 0;
        padding: 5px 2.5%;
        display: block;
        font-size: 16px;
        outline: none;
    }

    span {
        color: #cc0000;
        font-size: 14px;
    }
`;

export const FormControl = styled.div`
    width: 90%;
    margin: 25px auto 20px;

    & button {
        width: 100%;
        padding: 12px 0 10px;
        border: 0;
        border-radius: 2px;
        background-color: #64aaff;
        color: #fff;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;

        &:hover { background-color: #1a81ff;}
    }
`;