import styled from 'styled-components';

const FlascardWrapper = styled.div`
  border: solid;
  height: 95vh;
`;

function Flashcard({ children }) {
    return (
        <FlascardWrapper>
            {children}
        </FlascardWrapper>
    );
}

export default Flashcard;