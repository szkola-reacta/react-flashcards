import './App.css';
import MainView from './Containers/MainView/MainView';
import NavBar from './Containers/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar logoImg={process.env.PUBLIC_URL + "/logo192.png"} logoText="React-Flashcards" />
      <MainView />
    </div>
  );
}

export default App;
