import styled from 'styled-components';

import SignIn from '../SignIn';

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid;
  height: 5vh;
`;

const NavBarLogo = styled.div`
  margin-left: 3vw;
`;

const NavBarUser = styled.div`
  margin-right: 3vw;
`;

function NavBar({ logoImg, logoText, userName }) {
    return (
        <NavBarWrapper>
            <NavBarLogo>{logoImg} {logoText}</NavBarLogo>
            <SignIn />
            <NavBarUser>Logged in as: {userName}</NavBarUser>
        </NavBarWrapper>
    );
}

export default NavBar;
