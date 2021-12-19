import styled from 'styled-components';

import NavButton from '../../components/NavButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function NavButtons() {
    const goBack = () => console.log('Back button clicked');
    const getNextFlashcard = () => console.log('Next button clicked');

    return(
        <NavButtons.Wrapper>
            <NavButton text="Back"
                       iconFirst={<FontAwesomeIcon icon={faArrowLeft} />}
                       onClick={goBack}
            />
            <NavButtons.Spacer />
            <NavButton text="Next"
                       iconLast={<FontAwesomeIcon icon={faArrowRight} />}
                       onClick={getNextFlashcard}
            />
        </NavButtons.Wrapper>
    );
}

NavButtons.Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

NavButtons.Spacer = styled.div`
    width: 20px;
`;