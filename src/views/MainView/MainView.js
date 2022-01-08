import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getRandomFlashcard } from '../../services/FirestoreService';
import MainLayout from '../../layouts/MainLayout';
import FlashcardButtons from '../../containers/FlashcardButtons';
import Flashcard from '../../components/Flashcard';

export default function MainView() {
    const [flashcard, setFlashcard] = useState();

    useEffect(() => {
        const getFlashcard = async () => {
            const result = await getRandomFlashcard();
            setFlashcard(result);
            return result;
        };
        getFlashcard();
    }, []);

    return (
        <MainLayout>
            <MainView.Content>
                <FlashcardButtons />
                <Flashcard flashcard={flashcard} />
            </MainView.Content>
        </MainLayout>
    );
}

MainView.Content = styled.div`
    width: 40vw;
    min-width: 400px;
`;
