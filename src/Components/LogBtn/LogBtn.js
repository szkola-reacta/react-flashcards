import styled from 'styled-components'
import GlobalColors from '../../theme/colors'

const Button = styled.div`
    height: 2vh;
    color: ${GlobalColors.primary};
    background-color: ${GlobalColors.darkGray};
    border-radius: 10px;
    padding: 10px;
    margin: 30px 20px;
    cursor: pointer;
`;

const LogBtn = ({ label }) => {
    return (
        <Button>
            {label}
        </Button>
    )
}

export default LogBtn;