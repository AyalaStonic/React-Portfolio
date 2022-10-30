import React from "react";
import homeBrewImage from "../../assets/small/HomeBrew.png";
import summerPunchImage from "../../assets/small/Summer_Punch.png";
import weatherDashImage from "../../assets/small/Weather_Dash.png";
import noteTakerImage from "../../assets/small/NoteTaker.png";
import twilightImage from "../../assets/small/Twilight_Ristorante.png";
import flowerImage from "../../assets/small/Sweet-Pea-Flowers.png";
import sphereImage from "../../assets/small/Sphere.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://xunvyre.github.io/project-sleepSpace/">
                {" "}
                <img
                  src={sphereImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Sleep Space"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Sleep Space</h4>
              <p>
                A Website which basically allows you to take a quick quiz and then it 
                recommends you the best tips to be able to have a better sleeping! It was 
                designed and built with HTML, CSS and Javascript.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://ayalastonic.github.io/Horiseon-thebestwaytodoit/">
                {" "}
                <img
                  src={flowerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Sweet-Pea-Flowers"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Horiseon</h4>
              <p>
              Horiseon is a marketing agency which follows 
              accessibility standards for everyone, This site 
              is optimized for search engines, it contains Online
               reputation management, and one of the most important things, 
               it includes Social Media Marketing{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://ayalastonic.github.io/Weather-dashboard/">
                {" "}
                <img
                  src={twilightImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Twilight_Ristorante"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
              Weather-Dashboard is an application to find a weather condition 
              of a given city both the current and 5-Days forecast at the same time.
               The server-side API used to get response data object is retrieved
                from the Open Weather APi. The current weather section is including
                 the following weather characters and date.

{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://storykeeper-book-app.herokuapp.com">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note_Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>The Story Keeper</h4>
              <p>
              The Story Keeper is a place to go to search for books. 
              Whether its a book someone has suggested to you or even 
              for reasearch purposes. On our website you can also read 
              some full books for free. And also one last amazing feature
               is the fact that if you find an interesting book that you
                want to save for later you can with our save book button!{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
