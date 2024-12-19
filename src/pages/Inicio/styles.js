import styled from "styled-components";

export const CardsHomeStyle = styled.div `

    //  background-color: black;
    max-width: 850px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;

    position: relative;
    top: -30px;

    @media (max-width:900px){
        flex-direction: column;
        row-gap: 20px;
        align-items: center;
        padding:20px;

    }

    img{
    opacity:1;
    

    &:hover{
        
        opacity:0.5;
    }
    
    }

`