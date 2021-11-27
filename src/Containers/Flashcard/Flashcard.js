import styled from 'styled-components'

const Card = styled.div`
    width: 40vw;
    height: 40vh;
    color: #000;
    background-color: #CBF4FF;
    border: 2px solid #61DAFB;
    border-radius: 10px;
    padding: 10px;
    margin: 10px auto;


`

const Flashcard = () => {
    return(
    <Card>
        Main Flashcard
    </Card>
    )

}

export default Flashcard;