import { Link } from "react-router-dom"
import stirloFace from "../images/stirlo-face.png"
import merryChristmas from "../images/merry-christmas.gif"

export default function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={merryChristmas} alt="merry christmas" />
        <Link to="greeting">
          <img src={stirloFace} className="stirlo-face" alt="stirlo's big beautiful face" />
        </Link>
        <p>
          Click on your head!
        </p>
      </header>
    </div>
  )
}