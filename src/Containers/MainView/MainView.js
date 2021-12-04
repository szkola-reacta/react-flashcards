import { useState, useEffect } from 'react';
import styled from 'styled-components'

import { getRandomFlashcard } from '../../services/FirestoreService';
import GlobalColors from '../../theme/colors'
import Buttons from '../Buttons/Buttons';
import Flashcard from '../../Components/Flashcard/Flashcard'

const View = styled.div`
    width: 100vw;
    height: 100Vh;
    background-color: ${GlobalColors.darkGray};
`;

const MainView = () => {
    const [flashcard, setFlashcard ] = useState();
    useEffect(() => {
        const getFlashcard = async () => {
            const result = await getRandomFlashcard();
            console.log(result)
            setFlashcard(result)
            return result;
        }
        getFlashcard();
    }, []);
    return(
        <View>
            <Buttons />
            <Flashcard flashcard={flashcard}/>
        </View>
    )
}

export default MainView;
