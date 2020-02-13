import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
`;
const ImgSpan = styled.span`
    margin: 2%;
    padding: 2%;
    width: 25vw;
    height: 200px;
    border: 2px solid coral;
    border-radius: 5px;
`;
const TxtSpan = styled.span`
    margin: 2%;
    padding: 2%;
    width: 25vw;
    height: 200px;
    border: 2px solid lightgrey;
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
                <ImgSpan>
                    <p>Might put an image or something here</p>
                </ImgSpan>
                <TxtSpan>
                    <p>QuickStocks is a simple to use app that's sole purpose is to provide information on a particular stock. This is done in the form of a line graph similar to those you might see in othe stock related sites.</p>
                    <p>Follow some of the steps below if you need more information on how the app works.</p>
                </TxtSpan>
            </Div>
            <Hr />
        </div>
    );
};

export default About;