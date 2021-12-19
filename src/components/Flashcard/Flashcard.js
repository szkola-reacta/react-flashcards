import styled from 'styled-components'
import GlobalColors from '../../theme/colors'



const Card = styled.div`
    width: 40vw;
    height: 40vh;
    color: #000;
    background-color: ${GlobalColors.secondary};
    border: 2px solid ${GlobalColors.primary};
    border-radius: 10px;
    padding: 10px;
    margin: 10px auto;
`

const Flashcard = ({ flashcard }) => {
    return(
    <Card>
        <h1>{flashcard?.question}</h1>
        <p>{flashcard?.answer}</p>
    </Card>
    )

}

export default Flashcard;