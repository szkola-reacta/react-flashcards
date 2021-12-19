import styled from 'styled-components'
import NextBtn from '../../components/NextBtn/NextBtn';
import BackBtn from '../../components/BackBtn/BackBtn';

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
