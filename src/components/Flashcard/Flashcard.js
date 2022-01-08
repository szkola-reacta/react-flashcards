import styled from 'styled-components';

import GlobalColors from '../../theme/colors';

export default function Flashcard({ flashcard }) {
    return (
        <Card>
            <h1>{flashcard?.question}</h1>
            <p>{flashcard?.answer}</p>
        </Card>
    );
}

const Card = styled.div`
    flex: 1;
    height: 40vh;
    color: #000;
    background-color: ${GlobalColors.secondary};
    border: 2px solid ${GlobalColors.primary};
    border-radius: 10px;
    padding: 10px;
    margin: 20px auto;
    box-shadow: 8px 8px 16px 0px #000000e5;
    overflow: auto;
`;
