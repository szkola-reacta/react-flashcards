import { collection, getDocs, query, where } from 'firebase/firestore';
import { getRandomInt } from '../utils/helpers';

import { db } from './firebase';

const FLASHCARD_START_ID = 1;
const FLASHCARDS_COLLECTION_NAME = 'flashcards';

const getFlashcardById = async (id) => {
    const flashcardCollection = collection(db, 'flashcards');
    const queryFlashcardById = query(flashcardCollection, where('id', '==', id));

    try {
        const querySnapshot = await getDocs(queryFlashcardById);
        return querySnapshot;
    } catch (error) {
        return error;
    }
};

// eslint-disable-next-line import/prefer-default-export
export const getRandomFlashcard = async () => {
    const flashcardCollection = collection(db, FLASHCARDS_COLLECTION_NAME);
    const flashcardSnapshot = await getDocs(flashcardCollection);

    const flashcardListLength = flashcardSnapshot.docs.length;
    const randomIndex = getRandomInt(FLASHCARD_START_ID, flashcardListLength);

    try {
        const querySnapshot = await getFlashcardById(randomIndex);
        const result = [];

        querySnapshot.forEach((doc) => {
            result.push(doc.data());
        });

        if (result.length === 0) {
            throw new Error('No data arrived');
        }

        return result[0];
    } catch (error) {
        return error;
    }
};
