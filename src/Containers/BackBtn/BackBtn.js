import styled from 'styled-components'

const Button = styled.div`
    width: 10vw;
    height: 5vh;
    color: #000;
    background-color: #CBF4FF;
    border: 2px solid #61DAFB;
    border-radius: 10px;
    padding: 10px;
    margin: 30px 20px;
`;

const BackBtn = () => {
    return(
        <Button>
          {'<'}-  Back
        </Button>
    )
}

export default BackBtn;