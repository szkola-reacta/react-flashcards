import styled from 'styled-components';

import GlobalColors from '../../theme/colors';

export default function NavButton({ onClick, text, iconFirst, iconLast }) {
    return (
        <NavButton.Wrapper onClick={onClick}>
            <NavButton.IconFirst>{iconFirst}</NavButton.IconFirst>
            <NavButton.Text>{text}</NavButton.Text>
            <NavButton.IconLast>{iconLast}</NavButton.IconLast>
        </NavButton.Wrapper>
    );
}

NavButton.Wrapper = styled.button`
    flex: 1;
    height: 5vh;
    color: ${GlobalColors.black};
    background-color: ${GlobalColors.secondary};
    border: 2px solid ${GlobalColors.primary};
    border-radius: 10px;
    padding: 10px;
    box-shadow: 8px 8px 16px 0px #000000e5;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
        & > span {
            transform: translateX(-4px);
            transition: translateX 0.4s ease-out;
        }
        & > span:last-child {
            transform: translateX(4px);
            transition: translateX 0.4s ease-out;
        }
    }
`;

NavButton.Text = styled.p`
    font-weight: bold;
    font-size: 20px;
`;

NavButton.IconFirst = styled.span`
    font-size: 20px;
    margin-right: 8px;
`;

NavButton.IconLast = styled.span`
    font-size: 20px;
    margin-left: 8px;
`;
