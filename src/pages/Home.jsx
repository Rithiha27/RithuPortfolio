import React from "react";
import "../styles/Navbar.css";
const Home = () => {
  // Your other code here...
  
  return (
  
    <div className="Home">
      <div className="child">
      <h1>&#128075; Hi, I'm Rithiha </h1>
      <p>I'm a <b>Btech IT student </b>with a passion for exploring new technologies.<br/> I
      will work with passion to enhance my skills and strive hard to achieve<br/>
      the goals and objectives of the organization with all my talents and
      skills.</p>
      <div className="home1" >
      <p>I am looking for a responsible role<br/> where I can enhance my skills.<br/><br/>&#x1F447;Check some projects.</p>
      <p>RithihaMuthusamy<br/><span className="email">rithihamuthusamy@gmail.com</span></p>
      </div>
      <div className="last">
      <div className="div1"><img className="ss" src="/s1.png" alt=""/></div>
      <div className="div2"><img className="ss1" src="/s2.png" alt=""/></div>
      <div className="div2"><img className="ss1" src="/s3.png" alt=""/></div>
  {/* <div className="div3"><img className="ss2" src="/s3.jpg" alt=""/></div> */}
      </div>
    </div>
    <div className="card">
          <img src="baby.jpg" alt="" style={{ width: 100, height: 100 }}></img>
          <h5>Rithi</h5>
          <div className="c1">
            <h3>🔤Fonts</h3>
          </div>
          <div className="c2">
            <h3>🔀Flow charts</h3>
          </div>
          <div className="c3">
            <h3>🔔Icons</h3>
          </div>
          <div className="c4">
            <h3>🔍User Research</h3>
          </div>
          <div className="c5">
            <h3>🎨UI Kit</h3>
          </div>
          

      </div> 
      <div className="c6">
          <img src="figma.png" alt=""></img>
        </div>
      <div className="c7">
        <img src="diamond.svg" alt=""></img>
      </div>
      <div className="c8">
        <img src="balck.png" alt=""></img>
      </div>

    </div>
  );
};

export default Home;
