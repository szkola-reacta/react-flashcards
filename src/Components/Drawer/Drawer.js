import { useState } from 'react';
import styled, { css } from 'styled-components';

const textColor = 'white';
const backgroundColor = '#16191d';
const border = '#61DAFB';

const Container = styled.div`
    margin-top: calc(5vh + 6px);
    height: 100%;
    display: flex;
    position: absolute;
    width: 300px;
    left: calc(100% - 300px);
    top: 0;
    background-color: ${backgroundColor};
    transform: translateX(280px);
    transition: transform 150ms ease-in-out;
    ${(props) => props.expanded && css`transform: translateX(0px);`};
`;

const DrawerResizeLine = styled.div`
    width: 2px;
    background: ${border};
    margin-right: 8px;
`;

const Chevron = styled.button`
    width: 32px;
    height: 32px;
    background: white;
    border: 2px solid ${border};
    color: ${backgroundColor};
    font-weight: 700;
    position: absolute;
    left: -15px;
    top: 100px;
    border-radius: 50%;
}
`;

const Content = styled.div`
    padding: 16px;
    color: ${textColor};
    width: 100%;
`;

const Drawer = ({ children }) => {
    const [ expanded, setExpanded ] = useState(false);
    const [ hoovering, setHoovering ] = useState(false);

    const handleChevronClick = () => {
        setExpanded((prev) => !prev);
    };

    const onContainerEnter = () => {
        setHoovering(true);
    };
    const onContainerLeave = () => {
        setHoovering(false);
    };

    return (
        <Container expanded={expanded || hoovering}>
            <DrawerResizeLine />
            <Chevron onClick={handleChevronClick}>{expanded ? '>' : '<'}</Chevron>
            <Content onPointerEnter={onContainerEnter} onPointerLeave={onContainerLeave}>
                {children}
            </Content>
        </Container>
    );
};

export default Drawer;
