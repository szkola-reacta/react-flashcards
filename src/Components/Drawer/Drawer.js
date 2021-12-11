import styled from 'styled-components';

const Container = styled.div`
    padding: 0;
    margin-top: 5vh;
    height: 100%;
    display: flex;
    position: absolute;
    width: 300px;
    left: calc(100% - 300px);
    top: 0;
    background: white;
`;

const DrawerResizeLine = styled.div`
    width: 5px;
    background: red;
`;

const Chevron = styled.button`
    width: 32px;
    height: 32px;
    background: red;
    position: absolute;
    left: -16px;
    top: 100px;
`;

const Content = styled.div`
    padding: 16px;
    background: white;
`;

const Drawer = ({ children }) => {
    return (
        <Container>
            <DrawerResizeLine />
            <Chevron />
            <Content>{children}</Content>
        </Container>
    );
};

export default Drawer;
