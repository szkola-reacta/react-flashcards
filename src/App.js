import './App.css';
import MainView from './containers/MainView/MainView';
import NavBar from './containers/NavBar/NavBar';
import useAuthListener from './hooks/useAuthListener';
import AuthContext from './context/AuthContext';

function App() {
    const { user } = useAuthListener();
    return (
        <div className="App">
            <AuthContext.Provider value={{ user }}>
                <NavBar />
                <MainView />
            </AuthContext.Provider>
        </div>
    );
}

export default App;
