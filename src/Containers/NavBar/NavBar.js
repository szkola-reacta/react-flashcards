import styled from 'styled-components';

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

function NavBar({ logoImg, logoText, user }) {
  return (
    <NavBarWrapper>
      <NavBarLogo>{logoImg} {logoText}</NavBarLogo>
      <NavBarUser>Logged in as: {user}</NavBarUser>
    </NavBarWrapper>
  );
}

export default NavBar;