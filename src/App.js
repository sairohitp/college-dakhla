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
                    <div>
                        <div className="whoarewe-column">
                            <div>
                                <p className="sectionLabel">WHO ARE WE</p>
                                <h2>
                                    Knowledge will bring you the opportunity to
                                    make a difference.
                                </h2>
                                <p>
                                    We believe every student deserves the best
                                    education in their life and hence provide a
                                    portal where students can find top colleges
                                    in India and choose their dream vocation.
                                    <br />
                                    <br />
                                    We offer complete assistance to students
                                    from admission counseling, college
                                    selections, educational loan assistance,
                                    career counseling, and vocation selection.
                                </p>
                            </div>
                            <button>DISCOVER MORE</button>
                        </div>

                        <div class="container">
                            
                                <div></div>
                                <div>
                                    <img
                                        src={whoareweimg}
                                        alt=""
                                        id="whoarewe-img"
                                    />
                                </div>
                            
                        </div>
                    </div>

                    <div id = "whoarewe-img-column">
                        <span class="material-symbols-outlined bookmark">
                            bookmark
                        </span>
                        <h1>
                            Get Admissions in <br />
                            Top Colleges
                        </h1>
                    </div>
                </div>

                <div className="gallery">

                  <div className="gallery-child">
                    <div>
                    <span class="material-symbols-outlined">
                      school
                    </span>
                    </div>
                    <div>
                      <h3>University Selection</h3>
                      <p>University Selection has become the most vital role in the whole method to start with. Good results to colleges in most states is dependent upon the most suitable picks of the universities/colleges.</p>
                    </div>
                  </div>
                  
                  <div className="gallery-child">
                    <div>
                    <span class="material-symbols-outlined">
                      school
                    </span>
                    </div>
                    <div>
                      <h3>University Selection</h3>
                      <p>University Selection has become the most vital role in the whole method to start with. Good results to colleges in most states is dependent upon the most suitable picks of the universities/colleges.</p>
                    </div>
                  </div>
                  
                  <div className="gallery-child">
                    <div>
                    <span class="material-symbols-outlined">
                      school
                    </span>
                    </div>
                    <div>
                      <h3>University Selection</h3>
                      <p>University Selection has become the most vital role in the whole method to start with. Good results to colleges in most states is dependent upon the most suitable picks of the universities/colleges.</p>
                    </div>
                  </div>

                </div>
            </section>
        </>
    );
}

export default App;
