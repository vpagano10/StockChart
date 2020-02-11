import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
`;
const Span = styled.span`
    margin: 2%;
    padding: 2%;
    width: 25vw;
    height: 200px;
    border: 2px solid coral;
    border-radius: 5px;
`;
const Hr = styled.hr`
    width: 90vw;
`;

function About() {
    return (
        <div>
            <h3>About QuickStocks</h3>
            <Div>
                <Span>
                    <p>Might put an image or something here</p>
                </Span>
                <Span>
                    <p>Maybe some text information here</p>
                </Span>
            </Div>
            <Hr />
        </div>
    );
};

export default About;