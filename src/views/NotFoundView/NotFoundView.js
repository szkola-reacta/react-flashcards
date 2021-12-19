import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

import MainLayout from '../../layouts/MainLayout';

export default function NotFoundView() {
    return (
        <MainLayout>
            <NotFoundView.Icon icon={faBan} />
            <NotFoundView.Text>404 - Not found</NotFoundView.Text>
        </MainLayout>
    );
}

NotFoundView.Icon = styled(FontAwesomeIcon)`
    font-size: 64px;
`;

NotFoundView.Text = styled.h1``;
