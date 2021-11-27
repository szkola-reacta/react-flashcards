import styled from 'styled-components'

import Flashcard from "../Flashcard/Flashcard";
import NextBtn from "../NextBtn/NextBtn";
import BackBtn from "../BackBtn/BackBtn";

const MainView = styled.div`
    width: 100vw;
    height: 100Vh;
    background-color: #282C34;
`;

const Buttons = styled.div`
display: flex;
justify-content: center


`;



const Rectangle = () => {
    return(
        <MainView>
            <Buttons>
                <BackBtn />
                <NextBtn />
            </Buttons>
            <Flashcard />
        </MainView>
    )
}

export default Rectangle;