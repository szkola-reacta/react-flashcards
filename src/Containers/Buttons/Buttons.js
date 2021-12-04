import styled from 'styled-components'
import NextBtn from '../../Components/NextBtn/NextBtn';
import BackBtn from '../../Components/BackBtn/BackBtn';

const ButtonsWrapper = styled.div`
display: flex;
justify-content: center
`;

const Buttons = () => {
    return(
        <ButtonsWrapper>
            <BackBtn />
            <NextBtn />
        </ButtonsWrapper>
    )
}

export default Buttons;
