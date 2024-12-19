import styled from "styled-components";
import background from '../../images/heroCoringa.jpg'


export const BannerStyle = styled.div`


            background-image: url(${background});
            
            padding: 135px 0;
            text-align: center;
            color: white;
            /* height:100vh; */
            background-repeat:no-repeat;
            background-size:cover;
            width: 100%;

            h1{
                font-size:48px;
            }

            p{
                font-size:18px;
                max-width:460px;
                margin:0 auto;
            }
`