import "./App.css";
import "boxicons";
import mainimg from "./image/img.jpg";
import animated41 from "./image/animated41.png";
import css from "./image/css.png";
import html from "./image/html.png";
import javascript from "./image/javascript.png";
import mongodb from "./image/mongodb.png";
import Switch from "./image/switchimg.png";
import mailimg from "./image/mailimg.png";
import ecommerce from "./image/ecommerce.png";
import newsapp from "./image/newapp.png";
import mynotebook from "./image/mynotebook.png";
import web from "./image/web.png";
import nodejs from "./image/nodejs.png";
import python from "./image/python.png";
import react from "./image/react.png";
import React,{useRef, useState} from "react";
import emailjs from '@emailjs/browser';
function App() {
  const [flag,setflag]=useState(false);
  const form = useRef();
  const handlecancel=()=>{
    setflag(false);
  }
  const sendEmail = (e) => { 
   e.preventDefault(); 
   console.log(document.getElementById("username").value);
   if(document.getElementById('username').value===""){
    document.getElementById("username").style.borderColor="red";
  }
  else if(document.getElementById('useremail').value===""){
     document.getElementById("username").style.borderColor="rgb(156, 203, 245)";
    document.getElementById("useremail").style.borderColor="red";
  }
  else if(document.getElementById('usersubject').value===""){
     document.getElementById("useremail").style.borderColor="rgb(156, 203, 245)";
    document.getElementById("usersubject").style.borderColor="red";
  }
  else if(document.getElementById('usermsg').value===""){
     document.getElementById("usersubject").style.borderColor="rgb(156, 203, 245)";
    document.getElementById("usermsg").style.borderColor="red";
   }


   else{
     emailjs.sendForm('service_g0mv5wt', 'template_nigpjud', form.current, 'ZFNhWpxFB-tH2H21_')
       .then((result) => {
        setflag(true);
        document.getElementById("username").value="";
        document.getElementById("useremail").value="";
        document.getElementById("usersubject").value="";
        document.getElementById("usermsg").value="";

        }, (error) => {
          console.log(error);
          document.getElementById("formcover").style.border="1px solid red";
           // show the user an error
       });

   }

 };
  return (
    <div>
      <div className="navbar">
        <div className="navelements">
          <div className="portfolioname">
            <p>Portfolio</p>
          </div>
          <div className="navlist">
            <ul type="none">
              <li>
                <a href="" className="links" onClick={(e)=>{
                  e.preventDefault();
                  document.getElementById('homeid').scrollIntoView();
                }}>
                  Home
                </a>
              </li>
              <li>
                <a href="" className="links" onClick={(e)=>{
                  e.preventDefault();
                  document.getElementById('aboutid').scrollIntoView();
                }}>
                  About
                </a>
              </li>
              <li>
                <a href="" className="links" onClick={(e)=>{
                  e.preventDefault();
                  document.getElementById('projectid').scrollIntoView();
                }}>
                  Projects
                </a>
              </li>
              <li>
                <a href="" className="links" onClick={(e)=>{
                  e.preventDefault();
                  document.getElementById('contactid').scrollIntoView();
                }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* HOME SECTION */}
      <div className="homepage" id="homeid">
        <div className="container">
          <div className="firstsec">
            <div className="textarea">
              <h2 id="heading">Full Stack Web developer</h2>
              <span id="homecontent">
                Hi,I am Pankaj Singh Lamgria. A passionate full-stack MERN
                Developer.{" "}
              </span>
              <button id="resume">Resume</button>
              <div className="socialmedia">
                <div className="socialicon">
                  <a href="https://instagram.com/pankaj_lamgria_01?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank">
                    <box-icon name="instagram" type="logo"></box-icon>
                  </a>
                </div>
                <div className="socialicon">
                  <a href="">
                    <box-icon name="meta" type="logo"></box-icon>
                  </a>
                </div>
                <div className="socialicon">
                  <a href="https://github.com/Pankajlamgria" target="_blank">
                    <box-icon name="github" type="logo"></box-icon>
                  </a>
                </div>
                <div className="socialicon">
                  <a href="https://www.linkedin.com/in/pankaj-singh-lamgria-97114b24b" target="_blank">
                    <box-icon name="linkedin" type="logo"></box-icon>
                  </a>
                </div>
              </div>
            </div>
            <div className="imgsec">
              <img src={mainimg} alt="pankajimg" />
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT SECTION */} 
      <div className="aboutsec" id="aboutid">
        <div className="aboutimg">
          <img src={animated41} alt="" />
        </div>
        <div className="abouttext">
          <p>
            Hello there! I'm <b>Pankaj Singh</b> a Full-Stack web developer and
            an enthusiastic student.I'm passionate about creating user-friendly
            and robust web applications. I have worked in{" "}
            <b> Html,Css,Javascript,React,Express,Node,Mongodb</b>. I have a
            proficiency in various programming languages like C,C++,Python.
            These languages help me to develop dynamic and interactive web
            applications,and I'm always eager to learn and adapt to new
            technologies.Take a closer look at my projects to see how I leverage
            these languages to create engaging user experiences.
          </p>
          <div className="skillicon">
            <div className="skillcover">
              <img src={html} alt="html" />
            </div>
            <div className="skillcover">
              <img src={css} alt="html" />
            </div>
            <div className="skillcover">
              <img src={javascript} alt="javascript" />
            </div>
            <div className="skillcover">
              <img src={nodejs} alt="nodejs" />
            </div>
            <div className="skillcover">
              <img src={react} alt="react" />
            </div>
            <div className="skillcover">
              <img src={mongodb} alt="mongodb" />
            </div>
            <div className="skillcover">
              <img src={python} alt="python" />
            </div>
          </div>
        </div>
      </div>
      {/* PROJECTS SECTION */}
      <div className="projects" id="projectid">
        {/* <h2 id="projectsheading">Projects</h2> */}
        <div className="projectallcover">
          <div className="projectsbox leftside" id="projectfirst">
            <div className="projectvideo">
              <img src={Switch} alt="imgsec" />
            </div>
            <div className="projectdetials">
              <p>
                <h4>Switch</h4> is an open bloging website. which allows the
                user to upload the blogs of their interest which can be seen by
                other user.Other's can make comments on the blogs as well.This
                webapp provides security for the account.
              </p>
              <div className="frameworksicon">
                <p style={{ cursor: "default" }}>MERN</p>
                <a
                  href="https://github.com/Pankajlamgria/switchblogfrontend"
                  target="_blank"
                >
                  <p>
                    Github <box-icon name="github" type="logo"></box-icon>
                  </p>
                </a>
                <a href="https://switchblog.netlify.app/" target="_blank">
                  <p>
                    Demo <img src={web} className="websiteimg" alt="webimg" />
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="projectsbox" id="projectsecond">
            <div className="projectvideo">
              <img src={ecommerce} alt="imgsec" />
            </div>
            <div className="projectdetials">
              <p>
                <h4>E-commerce</h4>
                This is an e-commerce website using React,Node,MongoDb,Express
                and firebase as the storage for product images.This web app
                allows the admin to post the product which customers can
                purchase using card.
              </p>
              <div className="frameworksicon" id="forsecondframe">
                <p style={{ cursor: "default" }}>MERN</p>
                <a href="https://github.com/Pankajlamgria/e-commerce-MERN" target="_blank">
                  <p>
                    Github <box-icon name="github" type="logo"></box-icon>
                  </p>
                </a>
                <a href="/">
                  <p>
                    Demo <img src={web} className="websiteimg" alt="webimg" />
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="projectsbox leftside" id="projectthird">
            <div className="projectvideo">
              <img src={newsapp} alt="imgsec" />
            </div>
            <div className="projectdetials">
              <p>
                <h4>News app</h4>
                This is a Real time News application using REST API provided by
                newsapi for developers.In this app user can read news of
                different field like bussiness ,sports ,national ,international
                etc easily
              </p>
              <div className="frameworksicon" id="forthirdframe">
                <p style={{ cursor: "default" }}>React</p>
                <a
                  href="https://github.com/Pankajlamgria/new.github.io"
                  target="_blank"
                >
                  <p>
                    Github <box-icon name="github" type="logo"></box-icon>
                  </p>
                </a>
                <a href="/">
                  <p>
                    Demo <img src={web} className="websiteimg" alt="webimg" />
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="projectsbox rightside" id="projectfourth">
            <div className="projectvideo">
              <img src={mynotebook} alt="imgsec" />
            </div>
            <div className="projectdetials">
              <p>
                <h4>My notebook</h4>
                This website allows the user to keep his/her notes. user can
                edit ,delete his own notes and thus provides security of data.In
                this website i used react ,node,express and mongoDb as the
                database.
              </p>
              <div className="frameworksicon" id="forforthframe">
                <p style={{ cursor: "default" }}>React</p>
                <a
                  href="https://github.com/Pankajlamgria/my-noteobok-withbackend"
                  target="_blank"
                >
                  <p>
                    Github <box-icon name="github" type="logo"></box-icon>
                  </p>
                </a>
                <a href="/">
                  <p>
                    Demo <img src={web} className="websiteimg" alt="webimg" />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT SECTION */}
      <div className="contactsection" id="contactid">
        <div className="othercontent">
          <p id="contactheading">Contact Me
          </p>
        <div id="successbox" style={{display:(flag)?("flex"):("none")}}>
          <p>Success     </p>
          <div className="cancel" onClick={handlecancel}>&#10006;</div>
        </div>
          {/* <div id="msgsucces" style={{textAlign:"center",marginRight:"8rem"}}>Send successfully</div> */}
          <div className="contanctflexbox">
          <div className="quote">
              <h2>Let's talk</h2>  
              <p>let's create a websites that speak your brand's language and captivate your audience.</p>
              <div className="mailsec">
                <div className="mailimg"><img src={mailimg} alt="img" /></div>
                <div className="text">
                  <p>Feel free to Mail me at</p>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pankajlamgria@gmail.com&su=SUBJECT&body=BODY" target="_blank"><p>pankajlamgria@gmail.com</p></a>
                  
                </div>
              </div>
          </div>
          <div className="contactdetails" id="formcover">
                <form ref={form} onSubmit={sendEmail}>
                  <label >Send a message </label>
                  <input type="text" name="user_name" id="username" placeholder="Full name*" />
                  <input type="email" name="user_email" id="useremail" placeholder="Email*" />
                  <input type="text" name="user_subject" id="usersubject" placeholder="Subject*" />
                  <textarea name="message" id="usermsg" placeholder="type your message" cols="30" rows="7"></textarea>
                  <button id="formsubmitbtn">Submit</button>
                  </form> 
          </div>
                  
          </div>
  
        </div>
      </div>
    </div>
  );
}

export default App;
