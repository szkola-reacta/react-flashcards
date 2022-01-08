import { useContext }  from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import GlobalColors from '../../theme/colors';
import AuthContext from '../../context/AuthContext';
import { logOut } from '../../services/FirebaseAuthService';
import logo from '../../logo.png';

export default function NavBar() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const navigateToWelcomeView = () => {
        navigate('/');
    }

    const navigateToSignInView = () => {
        navigate('/sign-in');
    }

    return (
        <NavBar.Wrapper>
            <NavBar.Logo onClick={navigateToWelcomeView}>
                <img src={logo} alt="logo"/>
                React Flashcards
            </NavBar.Logo>
            <NavBar.Actions>
            { user ?
                <NavBar.User>
                    <NavBar.UserName>
                        Logged in as: { user?.displayName }
                    </NavBar.UserName>
                    <NavBar.LogOutButton onClick={logOut}>
                        Log out
                    </NavBar.LogOutButton>
                </NavBar.User>
                :
                <NavBar.SignInButton onClick={navigateToSignInView}>
                    Sign in
                </NavBar.SignInButton>
            }
            </NavBar.Actions>
        </NavBar.Wrapper>
    );
}

NavBar.Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid;
  height: 5vh;
  background-color: ${GlobalColors.black}
`;

NavBar.Logo = styled.div`
  color: ${GlobalColors.white};
  margin-left: 16px;
  display: flex;
  align-items: center;
  font-size: 20px;
  & > img {
    height: 36px;
    margin: 8px;
  }
  &:hover {
    cursor: pointer;
  }
`;

NavBar.Actions = styled.div`
  margin-right: 3vw;
`;

NavBar.User = styled.div`
    display: flex;
    align-items: center;
    color: ${GlobalColors.white};
`;

NavBar.UserName = styled.p`
    margin: 0 16px 0 8px;
    font-size: 14px;
`;

const Button = styled.button`
    height: 100%;
    padding: 6px;
    border-radius: 6px;
    &:hover {
        cursor: pointer;
    }
`;

NavBar.LogOutButton = styled(Button)`
    color: ${GlobalColors.black};
    background-color: ${GlobalColors.secondary};
    border: 2px solid ${GlobalColors.primary};
    
    &:hover {
        color: ${GlobalColors.primary};
        background-color: ${GlobalColors.black};
        transition: background-color 0.4s linear;
    }
`;

NavBar.SignInButton = styled(Button)`
    color: ${GlobalColors.primary};
    background-color: ${GlobalColors.black};
    border: 2px solid ${GlobalColors.primary};
    
    &:hover {
        color: ${GlobalColors.black};
        background-color: ${GlobalColors.secondary};
        transition: background-color 0.4s linear;
    }
`;
