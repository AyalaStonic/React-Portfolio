import React from "react";
import profileImage from "../../assets/large/Profile/IMG_7542.JPG";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, My name is Duvan Ayala Stonic. 
            I am currently living in Orlando, FL. I am 20 years old. 
            I have had a deep passion and curiosity for Coding and programming,
            also about computers, technology since I was little.
           Years ago I starter creating, coding and styling some games from scratch,
           using an app named GameMaker, and I used to use languages 
            such as C++ and GML (GameMakerLanguage), years later I starter to work 
            for Google Adsense, and my job was building up webpages from wordpress 
            and add some ads. As a Full Stack Web developer My love for coding and learning more about this field 
           is something I defenitly want to improve!
           <br />
            CODING LIFE!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
