import styled from "styled-components";

export const SearchModalWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0,0.75);

    & > img {
        width: 1.2%;
        position: absolute;
        top: 100px;
        right: 20%;
    }

    & > div {
        width: 50%;
        min-height: 300px;
        max-height: 300px;
        margin: 60px auto;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        color: #000;
        align-items: center;
    }

    figure { 
        box-sizing: border-box;
        width: 40%;
        padding: 20px 5%;
    }

    figure img { max-height: 250px;}
`;

export const ProductDetail = styled.ul`
    box-sizing: border-box;
    width: 60%;
    min-height: 250px;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    li:first-child {
        font-size: 1.2em;
        font-weight: 600;
        text-decoration: underline;
    }

    li:nth-child(2) { text-transform: capitalize;}
    span { text-decoration: underline;}

    li:nth-child(3) { 
        color: #0d5f00;
        font-size: 1.25em;
        font-weight: 600;
    }

    li:nth-child(4) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h3 {
        color: grey;
        font-size: 0.95em;
    }

    button {
        padding: 8px 5% 6px;      
        font-weight: 600;

        &:hover { 
            background-color: #0d5f00;
            color: #f5f5f5;
        }
    }

`;

export const AddBtn = styled.button`
    border: 0;  
    background-color: #067702;
    color: #f5f5f5;
`;

export const RemoveBtn = styled.button`
    border: 2px solid #067702;
    background-color: transparent;
    color: #067702;
`;