import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GlobalColors from '../../theme/colors';

export default function SignInCard({ onLogIn }) {
    return (
        <SignInCard.Wrapper>
            <SignInCard.Text>Sign in</SignInCard.Text>
            <SignInCard.Button onClick={onLogIn}>
                <SignInCard.ProviderIcon icon={faGithub} size="2x" />
                <SignInCard.ButtonText>Sign in with Github</SignInCard.ButtonText>
            </SignInCard.Button>
        </SignInCard.Wrapper>
    );
}

SignInCard.Wrapper = styled.div`
    width: 400px;
    padding: 30px 0;
    background-color: ${GlobalColors.secondary};
    border: 1px solid ${GlobalColors.primary};
    border-radius: 10px;
    box-shadow: 8px 8px 16px 0px #000000e5;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

SignInCard.Text = styled.span`
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0 30px 0;
`;

SignInCard.Button = styled.button`
    width: 300px;
    height: 50px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    &: hover {
        cursor: pointer;
    }
`;

SignInCard.ProviderIcon = styled(FontAwesomeIcon)``;

SignInCard.ButtonText = styled.span`
    font-size: 16px;
    font-weight: bold;
    width: 200px;
`;
