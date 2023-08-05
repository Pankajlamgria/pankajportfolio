
import './App.css';
import "boxicons"
import mainimg from "./image/img.jpg";
import animated41 from "./image/animated41.png";
import css from "./image/css.png";
import html from "./image/html.png";
// import facebook from "./image/facebook.png";
// import instagram from "./image/instagram.png";
import javascript from "./image/javascript.png";
import mongodb from "./image/mongodb.png";
import nodejs from "./image/nodejs.png";
import python from "./image/python.png";
import react from "./image/react.png";

function App() {
  return (
    <div >
      <div className="navbar">
        <div className="navelements">
            <div className="portfolioname">
                <p>Portfolio</p>
            </div>
            <div className="navlist">
                <ul type="none">
                    <li><a href="" className="links">Home</a></li>
                    <li><a href="" className="links">About</a></li>
                    <li><a href="" className="links">Projects</a></li>
                    <li><a href="" className="links">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="homepage">
        <div className="container">
            <div className="firstsec">
                <div className="textarea">
                    <h2 id="heading">Full Stack Web developer</h2>
                    <span id="homecontent">Hi,I am Pankaj Singh Lamgria. A passionate full-stack MERN Developer. </span>
                    <button id="resume">Resume</button>
                    <div className="socialmedia">
                        <div className="socialicon">
                  
                            <a href=""><box-icon name='instagram' type='logo'></box-icon></a>
                            
                        </div>
                        <div className="socialicon">
                            <a href=""><box-icon name='meta' type='logo'></box-icon></a>
                            
                        </div>
                        <div className="socialicon">
                            <a href=""><box-icon name='github' type='logo'></box-icon></a>
                            
                        </div>
                        <div className="socialicon">
                            <a href=""><box-icon name='linkedin' type='logo'></box-icon></a>
                            
                        </div>
                    </div>
                </div>
                <div className="imgsec">
                    <img src={mainimg} alt="pankajimg"/>
                </div>
            </div>
        </div>
    </div>
    <div className="aboutsec">
        <div className="aboutimg">
            <img src={animated41}alt=""/>
        </div>
        <div className="abouttext">
            <p>
                Hello there! I'm <b>Pankaj Singh</b> a Full-Stack web developer and an enthusiastic student.I'm
                passionate about creating user-friendly and robust web applications.
                I have worked in <b> Html,Css,Javascript,React,Express,Node,Mongodb</b>. I have a proficiency in various
                programming languages like C,C++,Python.
                These languages help me to develop dynamic and interactive web applications,and I'm always eager to
                learn and adapt to new technologies.Take a closer look at my projects to see how I leverage these
                languages to create engaging user experiences.
            </p>
            <div className="skillicon">
                <div className="skillcover">
                    <img src={html} alt="html"/>
                </div>
                <div className="skillcover">
                    <img src={css} alt="html"/>
                </div>
                <div className="skillcover">
                    <img src={javascript} alt="javascript"/>
                </div>
                <div className="skillcover">
                    <img src={nodejs} alt="nodejs"/>
                </div>
                <div className="skillcover">
                    <img src={react}alt="react"/>
                </div>
                <div className="skillcover">
                    <img src={mongodb}alt="mongodb"/>
                </div>
                <div className="skillcover">
                    <img src={python}alt="python"/>
                </div>
            </div>
        </div>

    </div>
    <div className="projects">
        projects sec
    </div>
    </div>
  );
}

export default App;
