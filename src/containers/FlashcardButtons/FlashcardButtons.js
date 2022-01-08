import styled from 'styled-components';

import NavButton from '../../components/NavButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function FlashcardButtons() {
    const goBack = () => console.log('Back button clicked');
    const getNextFlashcard = () => console.log('Next button clicked');

    return(
        <FlashcardButtons.Wrapper>
            <NavButton text="Back"
                       iconFirst={<FontAwesomeIcon icon={faArrowLeft} />}
                       onClick={goBack}
            />
            <FlashcardButtons.Spacer />
            <NavButton text="Next"
                       iconLast={<FontAwesomeIcon icon={faArrowRight} />}
                       onClick={getNextFlashcard}
            />
        </FlashcardButtons.Wrapper>
    );
}

FlashcardButtons.Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

FlashcardButtons.Spacer = styled.div`
    width: 20px;
`;
