import "./App.css";
import Canvas from "./components/canvas";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import UserDetails from "./components/users";
import { Winner } from "./components/winner";
import WinnerText from "./components/winnerText";

function App() {
  return (
    <div className="App">
      <h1 className="tic_tac_toe_Heading text-9xl font-bold text-purple">
        Tic-Tac-Toe
      </h1>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<UserDetails />} />
        <Route path="/dashboard" element={<Canvas />} />
        <Route
          path="/winner/:name"
          element={
            <>
              <Winner />
              <WinnerText />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
