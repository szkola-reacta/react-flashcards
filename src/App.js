import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import AuthContext from './context/AuthContext';
import useAuthListener from './hooks/useAuthListener';
import RequireAuth from './components/RequireAuth';
import NavBar from './containers/NavBar';

import MainView from './views/MainView';
import SignInView from './views/SignInView';
import WelcomeView from './views/WelcomeView';
import NotFoundView from './views/NotFoundView';

const AppView = styled.div``;

function App() {
    const { user } = useAuthListener();
    return (
        <AppView className="App">
            <AuthContext.Provider value={{ user }}>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/react-flashcards" element={<WelcomeView />} />
                        <Route path="/sign-in" element={<SignInView />} />
                        <Route
                            path="/app"
                            element={
                                <RequireAuth>
                                    <MainView />
                                </RequireAuth>
                            }
                        />
                        <Route exact path="/" element={<Navigate to="/react-flashcards" />} />
                        <Route path="*" element={<NotFoundView />} />
                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
        </AppView>
    );
}

export default App;
