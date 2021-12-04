import './App.css';
import MainView from './containers/MainView/MainView';
import NavBar from './containers/NavBar/NavBar';
import useAuthListener from './hooks/useAuthListener';

function App() {
    const { user } = useAuthListener();
    return (
        <div className="App">
            <NavBar userName={user?.displayName}/>
            <MainView />
        </div>
    );
}

export default App;
