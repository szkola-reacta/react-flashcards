import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components';
import GlobalColors from '../../theme/colors';

import SignInBtn from '../../Components/SignInBtn/SignInBtn';


const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
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

const LogoText = styled.span`
  color: ${GlobalColors.darkGray};
  font-family: 'Francois One', sans-serif;
  font-size: 1.3rem;
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
      <NavBarLogo>
        <LogoImg src={process.env.PUBLIC_URL + "/logo192.png"} alt="react-logo" />
        <LogoText>React-Flashcards</LogoText>
      </NavBarLogo>
      <NavBarRight>
        {user ? `Logged in as: ${user}` : <SignInBtn />}
        <IconContainer>{menuIcon}</IconContainer>
      </NavBarRight>

    </NavBarWrapper>
  );
}

export default NavBar;