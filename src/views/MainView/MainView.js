import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getRandomFlashcard } from '../../services/FirestoreService';
import MainLayout from '../../layouts/MainLayout';
import NavButtons from '../../containers/NavButtons';
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
                <NavButtons />
                <Flashcard flashcard={flashcard} />
            </MainView.Content>
        </MainLayout>
    );
}

MainView.Content = styled.div`
    width: 40vw;
    min-width: 400px;
`;
