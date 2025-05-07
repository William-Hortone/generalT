import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {Home} from './pages'



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
