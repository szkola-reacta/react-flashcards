import GlobalColors from '../../theme/colors'
import styled from 'styled-components'

import Flashcard from "../Flashcard/Flashcard";
import Buttons from '../Buttons/Buttons';

const MainView = styled.div`
    width: 100vw;
    height: 100Vh;
    background-color: ${GlobalColors.darkGray};
`;

const Rectangle = () => {
    return(
        <MainView>
            <Buttons />
            <Flashcard />
        </MainView>
    )
}

export default Rectangle;