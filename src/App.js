import './App.css';
import MainView from './containers/MainView/MainView';
import NavBar from './containers/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
        <MainView />
    </div>
  );
}

export default App;
