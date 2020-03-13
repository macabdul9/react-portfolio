import React from 'react';
import styled from 'styled-components';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import background from '../assets/background.jpg';

const Styles = styled.div`
    .Jumbo{
        background: url(${background}) no-repeat fixed bottom;
        background-size:cover;
        color: #ccc;
        height:200px;
        position:relative;
        z-index:-2;
    }

    .overlay{
        background-color:#000;
        opacity:0.6;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
    }
`;

export const Jumbotron = (props) => {
    return ( 
        <Styles>
            <Jumbo fluid className="Jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Welcome to my page</h1>
                    <p>Ask me anything !</p>

                </Container>

            </Jumbo>

        </Styles>
    )
}
