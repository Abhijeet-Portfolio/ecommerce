import styled from "styled-components";

export const BannerFigure = styled.figure`
    width: 100%;
    max-height: 500px;
    min-height: 500px;

    @media only screen and (max-width: 1024px) {
        max-height: 400px;
        min-height: 400px;
    }

    @media only screen and (max-width: 720px) {
        max-height: 280px;
        min-height: 280px;
    }

    @media only screen and (max-width: 426px) {
        max-height: 150px;
        min-height: 150px;
    }
`;