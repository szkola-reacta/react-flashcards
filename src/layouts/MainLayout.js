import styled from 'styled-components';

import GlobalColors from '../theme/colors';

export default function MainLayout({ children }) {
    return <MainLayout.View>{children}</MainLayout.View>;
}

MainLayout.View = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${GlobalColors.darkGray};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
