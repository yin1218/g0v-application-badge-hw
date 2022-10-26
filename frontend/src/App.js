import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalPage from './Containers/PersonalPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PersonalPage />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
