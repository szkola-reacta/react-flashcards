import styled from 'styled-components'
import GlobalColors from '../../theme/colors'


const Button = styled.div`
    width: 10vw;
    height: 5vh;
    color: #000;
    background-color: ${GlobalColors.secondary};
    border: 2px solid ${GlobalColors.primary};
    border-radius: 10px;
    padding: 10px;
    margin: 30px 20px
`;

const NextBtn = () => {
    return(
        <Button>
            Next -{'>'}
        </Button>
    )
}

export default NextBtn;