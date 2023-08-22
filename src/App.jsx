import "./App.css";
import chessIcon from "./assets/chess-icon.svg";
import sudokuIcon from "./assets/sudoku-img.png";

function App() {
  return (
    <>
      <div className="header">Chessoku - A game of Kings and Numbers</div>
      <div className="container">
        <div className="chess-container">
          <div className="wrapper">
            <a href="https://chess.pulkitchauhan.me/">
              <button className="btn">
                <img src={chessIcon}></img>
              </button>
            </a>
            <div className="title">
              <h1>Chess</h1>
            </div>
          </div>
        </div>
        <div className="sudoku-container">
          <div className="wrapper">
            <a href="https://sudoku.pulkitchauhan.me/">
              <button className="btn">
                <img src={sudokuIcon}></img>
              </button>
            </a>
            <div className="title">
              <h1>Sudoku</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
