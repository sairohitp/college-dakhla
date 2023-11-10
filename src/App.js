import "./App.css";
import logo from "./assets/logo.png";
import header from "./assets/header.png";
import whoareweimg from "./assets/whoareweimg.jpeg";

function App() {
    return (
        <>
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

            <section>
                <img src={header} id="headerimg" />

                <div id="whoarewe-section">
                    <div className="subbody">
                        <div>
                            <p className = "sectionLabel">WHO ARE WE</p>
                            <h2>
                                Knowledge will bring you the opportunity to make
                                a difference.
                            </h2>
                            <p>
                                We believe every student deserves the best
                                education in their life and hence provide a
                                portal where students can find top colleges in
                                India and choose their dream vocation.
                                <br />
                                <br />
                                We offer complete assistance to students from
                                admission counseling, college selections,
                                educational loan assistance, career counseling,
                                and vocation selection.
                            </p>
                            <button>DISCOVER MORE</button>
                        </div>

                        <div class="container">
                            <div></div>
                            <div class="header">
                                <img
                                    src={whoareweimg}
                                    alt="Building with sky background"
                                    id="whoarewe-img"
                                />                                
                            </div>
                            <div>
                              <h1>Get Admission in Top Colleges</h1>
                            </div>                        
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
