import './App.css';
import MainView from './_containers/MainView/MainView';
import NavBar from './_containers/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
        <MainView />
    </div>
  );
}

export default App;
