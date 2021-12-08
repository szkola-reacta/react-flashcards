import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import MainView from './Containers/MainView/MainView';
import SignInView from './Containers/SignInView/SignInView';
import WelcomeView from './Containers/WelcomeView/WelcomeView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/react-flashcards/app" element={<MainView />} />
          <Route path="/react-flashcards/sign-in" element={<SignInView />} />
          <Route path="/react-flashcards/" element={<WelcomeView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
