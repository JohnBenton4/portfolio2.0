import React, { useEffect } from "react";
import Sidebar3 from "../components/sidebar3/Sidebar3";
import homepage from "../assets/homepage.jpeg";
import Introvert1 from "../assets/Introvert1.jpeg";
import Introvert2 from "../assets/Introvert1.jpeg";
import Introvert3 from "../assets/Introvert3.jpeg";

export default function IntrovertEmpowerment() {
  useEffect(() => {
    document.title = "John Benton - Introvert Empowerment App";
    document.body.style.backgroundColor = "rgb(0,0,0)";
  }, []);
  return (
    <>
      <Sidebar3 />
      <div className="container-introvert">
        <h1 className="name">Introvert Empowerment</h1>
        <img src={homepage} alt="homepage" className="homepage-img" />
        <div className="grid">
          <section className="top-left">
            <h2 className="vision">Vision</h2>
            <p className="introvert-words">
              Our goal with this project was not only to build an amazing app,
              but to truly help people who have a legitimate desire to improve a
              part of their life. Many introverts, like myself, would love to be
              a little more outgoing from time to time. My team built this app
              to provide ideas on how to do just that.
            </p>
            <h2 className="design">Design</h2>
            <p className="introvert-words">
              Being our capstone project, we knew it was extremely important to
              have a visually clean UI along with a functionally top notch back
              end. We took everything we've learn through out our course and
              packed as much of it into this app as we could. A few notes about
              design:
            </p>
            <ul className="unlist">
              <li>
                - The front end utilizes an encouraging message of the day which
                comes from an API
              </li>
              <li>
                - The three main sections for user improvement consist of,
                challenges to choose from, a task manager, and phone
                notifications
              </li>
              <li>
                - Users can create a profile which they can log in from any
                device and save information to their profile
              </li>
            </ul>
            <p className="introvert-words">
              Bootstrap was the main CSS framework used on this project.
            </p>
          </section>
          <section className="logistic-section">
            <h2 className="logistics">Logistics</h2>
            <ul className="logistics-info">
              <li>Development: October 8 - 27</li>
              <li>
                My roles: express.js, postgreSQL, & database set up, login
                credential & bcrypt, API set up, and user profile
              </li>
            </ul>
          </section>
        </div>
        <br />
        <div className="grid2">
          <section className="mid-left">
            <h2 className="features">Features</h2>
            <p className="introvert-words">
              This project was very challenging. We completed all the base
              requirements and moved on to extra features that made this app
              standout. Here are some of the features within our code:
            </p>
            <ul className="unlist">
              <li>- API call with a timer to populate only one per 24 hours</li>
              <li>
                - User profiles that are password protected and can hold user
                saved data
              </li>
              <li>
                - The ability to receive text reminders to your phone to
                complete tasks(forth coming)
              </li>
              <li>
                - Establishing a connection between several many to many tables
                for each user
              </li>
              <br />
              <p className="introvert-words">
                The project can be located here:
                <a
                  className="introvert-app-github"
                  href="https://github.com/JohnBenton4/Introvert-Empowerment"
                >
                  {" "}
                  INTROVERT EMPOWERMENT
                </a>
              </p>
              <p className="introvert-words">
                The live deployment can be found here:
                <a
                  className="introvert-app-live"
                  href="https://introvert-empowerment.herokuapp.com/"
                >
                  {" "}
                  LIVE
                </a>
              </p>
            </ul>
          </section>
          <br />
          <br />
          <section className="lower-left">
            <h2 className="code-examples">Code Examples</h2>
            <p className="introvert-words">
              Here are some examples of my code in the project.
            </p>
            <ol>
              <p className="introvert-words">
                The first image of the server.js file demonstrates our structure
                for getting and posting. Additionally, part of the bcrypt set up
                is also on the server file. As mentioned before, the bcrypt was
                a very challenging part of the project which is an idea I intend
                on exploring further.
              </p>
              <br />
              <img
                src={Introvert1}
                alt="Introvert1"
                className="introvert1-img"
              />
              <br />
              <p className="introvert-words">
                The next image shows a small example of one of our many model
                files used in this project. I built models for the challenges,
                conversations, and pickup lines. All those tables are linked to
                the users table through three separate tables forming the many
                to many relationships.
              </p>
              <br />
              <img
                src={Introvert2}
                alt="Introvert2"
                className="introvert2-img"
              />
              <p className="introvert-words">
                The last image below contains code for what we are calling the
                Projects file. This file contains cards that are responsive and
                are really the heart of the functionality of the project. The
                cards contain the challenges, the task manager, and the phone
                text reminder options.
              </p>
              <img
                src={Introvert3}
                alt="Introvert3"
                className="introvert3-img"
              />
            </ol>
          </section>
          <br />
          <br />
          <section className="bottom">
            <h2 className="reflect">Project Reflection</h2>
            <p className="introvert-words">
              My group worked very well together on our capstone project, and in
              a relatively short time we were able to create an app that
              surpassed the requirements set forth for the assignment. I learned
              how to implement bcrypt, how to create several many to many
              relationships within one app, how to host websites live through
              Heroku, and much more. I enjoy learning new skills and strategies
              with each project I work on and continue to have a better
              understanding of best practices for front end and back end work.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
