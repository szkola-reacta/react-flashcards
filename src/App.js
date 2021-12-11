import './App.css';
import MainView from './Containers/MainView/MainView';
import NavBar from './Containers/NavBar/NavBar';
import Drawer from './Components/Drawer/Drawer';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Drawer>
                <div>
                    <h1>Heading</h1>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                    </ul>
                </div>
            </Drawer>
            <MainView />
        </div>
    );
}

export default App;
