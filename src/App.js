import stirloFace from './images/stirlo-face.png'
import merryChristmas from './images/merry-christmas.gif'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={merryChristmas} alt="merry christmas" />
        <img src={stirloFace} className="stirlo-face" alt="stirlo's big beautiful face" />
        <p>
          Click on your head!
        </p>
      </header>
    </div>
  );
}

export default App;
