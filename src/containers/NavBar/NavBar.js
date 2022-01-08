import { useContext }  from 'react';
import styled from 'styled-components';

import SignIn from '../SignIn';
import AuthContext from '../../context/AuthContext';

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

function NavBar({ logoImg, logoText }) {
    const { user } = useContext(AuthContext);
    return (
        <NavBarWrapper>
            <NavBarLogo>{logoImg} {logoText}</NavBarLogo>
            <SignIn />
            <NavBarUser>Logged in as: { user?.displayName }</NavBarUser>
        </NavBarWrapper>
    );
}

export default NavBar;
