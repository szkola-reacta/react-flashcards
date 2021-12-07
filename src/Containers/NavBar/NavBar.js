import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components';
import GlobalColors from '../../theme/colors'

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  background-color: ${GlobalColors.secondary};
  border: 2px solid ${GlobalColors.primary};
`;

const NavBarLogo = styled.div`
  margin-left: 3vw;
  height: 5vh;
  display: flex;
  align-items: center;
`;

const NavBarRight = styled.div`
  margin-right: 3vw;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 4vh;
  margin-right: 2vw;
`

const IconContainer = styled.div`
  margin-left: 3vw;
  margin-left: 3vw;
  height: 4vh;
  display: flex;
  align-items: center;
  cursor: pointer;
`

function NavBar({ logoImg, logoText, user }) {
  const menuIcon = <FontAwesomeIcon icon={faBars} />

  return (
    <NavBarWrapper>
      <NavBarLogo><LogoImg src={logoImg} alt="react-logo" /> {logoText}</NavBarLogo>
      <NavBarRight>
        {user ? `Logged in as: ${user}` : "Login button"}
        <IconContainer>{menuIcon}</IconContainer>
      </NavBarRight>

    </NavBarWrapper>
  );
}

export default NavBar;