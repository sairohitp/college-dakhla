import "./App.css";
import logo from "./assets/logo.png";

function App() {
    return (
        <nav class="navbar">
            <div className="subbody">
                <div>
                    <img src={logo} />
                </div>
                <div>
                <a href="#">HOME</a>
                <a href="#">College Dakhla</a>
                <a href="#">ADMISSION</a>
                <a href="#">ABOUT US</a>
                <a href="#">COURSES</a>
                <a href="#">MBBS</a>
                <a href="#">CONTACT US</a>
                </div>
                <div>
                    <a href="#">CALL +918898880100</a>
                </div>
            </div>
        </nav>
    );
}

export default App;
