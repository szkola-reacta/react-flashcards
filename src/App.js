import './App.css';
import MainView from './Containers/MainView/MainView';
import NavBar from './Containers/NavBar/NavBar';
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
