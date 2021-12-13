import { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import GlobalColors from '../../theme/colors';

const defaultWidth = 300;
const minWidthPx = 150;
const maxWidthPercent = 0.6;
const collapsedWidth = 40;

const Container = styled.div`
    display: flex;
    position: absolute;
    left: calc(100% - ${(props) => props.width}px);
    top: 0;
    height: 100%;
    width: ${(props) => props.width}px;
    margin-top: calc(5vh + 6px);
    background-color: ${GlobalColors.bgDark};
    transform: translateX(${(props) => props.width - collapsedWidth}px);
    transition: transform 150ms ease;
    ${(props) => props.expanded && css`transform: translateX(0px);`};
    user-select: none;
`;

const DrawerResizeLine = styled.div`
    width: 0px;
    margin: 8px 0;
    border: 1px solid ${GlobalColors.primary};
    cursor: ew-resize;
    user-select: none;
    transition: all 80ms ease-in-out;
    ${(props) =>
        props.expanded &&
        css`
            &:hover {
                box-shadow: 0px 0px 2px 2px ${GlobalColors.primary};
            }
        `};
`;

const Chevron = styled.button`
    position: absolute;
    left: -16px;
    width: 32px;
    top: 100px;
    height: 32px;
    background: ${GlobalColors.contrastText};
    border: 2px solid ${GlobalColors.primary};
    color: ${GlobalColors.bgDark};
    font-weight: 700;
    border-radius: 50%;
    opacity: ${(props) => (props.show ? '1' : '0')};
    ${(props) => props.expanded && css`transform: rotate(180deg);`};
    transition: all 150ms ease;

    &:hover {
        background: ${GlobalColors.primary};
        color: ${GlobalColors.contrastText};
    }
}
`;

const Content = styled.div`
    width: 100%;
    margin-left: ${collapsedWidth / 2}px;
    padding: 32px 16px;
    color: ${GlobalColors.contrastText};
`;

const Drawer = ({ children }) => {
    const [ expanded, setExpanded ] = useState(false);
    const [ hoovering, setHoovering ] = useState(false);
    const [ drawerWidth, setDrawerWidth ] = useState(defaultWidth);

    const handleChevronClick = () => {
        setExpanded((prev) => !prev);
    };

    const onContainerEnter = () => {
        setHoovering(true);
    };
    const onContainerLeave = () => {
        setHoovering(false);
    };

    const handleMouseDown = (e) => {
        document.addEventListener('mouseup', handleMouseUp, true);
        document.addEventListener('mousemove', handleMouseMove, true);
    };

    const handleMouseUp = () => {
        document.removeEventListener('mouseup', handleMouseUp, true);
        document.removeEventListener('mousemove', handleMouseMove, true);
    };

    const handleMouseMove = useCallback((e) => {
        const newWidth = window.innerWidth - e.screenX;
        if (newWidth < minWidthPx) setExpanded(false);
        if (newWidth > minWidthPx && newWidth < window.innerWidth * maxWidthPercent) {
            setDrawerWidth(newWidth);
        }
    }, []);

    return (
        <Container
            onPointerEnter={onContainerEnter}
            onPointerLeave={onContainerLeave}
            expanded={expanded || hoovering}
            width={drawerWidth}
        >
            <DrawerResizeLine expanded={expanded} onMouseDown={handleMouseDown} />
            <Chevron expanded={expanded} show={!(expanded && !hoovering)} onClick={handleChevronClick}>
                {'<'}
            </Chevron>
            <Content>{children}</Content>
        </Container>
    );
};

export default Drawer;
