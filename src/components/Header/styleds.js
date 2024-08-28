import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Nav = styled.nav`
    background-color: ${primaryColor};
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;


    a {
        margin: 0 10px 0;
        font-weight: bold;
    }
`
