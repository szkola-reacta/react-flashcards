import { useState } from 'react';
import styled, { css } from 'styled-components';
import GlobalColors from '../../theme/colors';

const Container = styled.div`
    display: flex;
    position: absolute;
    left: calc(100% - 300px);
    top: 0;
    height: 100%;
    width: 300px;
    margin-top: calc(5vh + 6px);
    background-color: ${GlobalColors.bgDark};
    transform: translateX(270px);
    transition: transform 150ms ease;
    ${(props) => props.expanded && css`transform: translateX(0px);`};
`;

const DrawerResizeLine = styled.div`
    position: relative;
    left: -4px;
    width: 2px;
    background: ${GlobalColors.primary};
    margin: 0 8px;
`;

const Chevron = styled.button`
    position: absolute;
    left: -12px;
    width: 32px;
    top: 100px;
    height: 32px;
    background: white;
    border: 2px solid ${GlobalColors.primary};
    color: ${GlobalColors.bgDark};
    font-weight: 700;
    border-radius: 50%;
    opacity: ${(props) => (props.show ? '1' : '0')};
    ${(props) => props.expanded && css`transform: rotate(180deg);`};
    transition: all 150ms ease;
}
`;

const Content = styled.div`
    width: 100%;
    padding: 16px;
    color: ${GlobalColors.contrastText};
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
        <Container onPointerEnter={onContainerEnter} onPointerLeave={onContainerLeave} expanded={expanded || hoovering}>
            <DrawerResizeLine />
            <Chevron expanded={expanded} show={!(expanded && !hoovering)} onClick={handleChevronClick}>
                {'<'}
            </Chevron>
            <Content>{children}</Content>
        </Container>
    );
};

export default Drawer;
