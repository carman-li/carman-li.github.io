import React from "react";

function Experience() {
  return (
    <div id="experience">
      <div id="drop">
        <div class="experience-heading">
          <div>
            <div className="text">
              <span className="highlight bold">Drop</span> // Software Engineer
              Intern
            </div>
            <div className="text subtitle">React Native, Redux</div>
          </div>
          <div className="text">Summer 2022</div>
        </div>

        <div class="experience-body">
          <ul className="text">
            <li>Developed a redesigned user referral flow</li>
            <li>
              Implemented <span class="italic">Drop Pets</span>, an interactive
              in-app digital collectible
            </li>
          </ul>
        </div>
      </div>

      <div id="pixlee">
        <div class="experience-heading">
          <div>
            <div className="text">
              <span className="highlight bold">
                Pixlee TurnTo (Now Emplifi)
              </span>{" "}
              // Software Engineer Intern
            </div>
            <div className="text subtitle">
              Backbone, Marionette, JavaScript, Rails
            </div>
          </div>
          <div className="text">Fall 2021</div>
        </div>

        <div class="experience-body">
          <ul className="text">
            <li>
              Developed an influencer link tracking feature, used by thousands
              of brands to drive influencer analytics
            </li>
            <li>
              Built and pitched a customized linter tool to automate the
              correction of warnings within the company codebase
            </li>
            <li>
              Safely tested and deployed database migrations to production
            </li>
          </ul>
        </div>
      </div>

      <div id="interac">
        <div class="experience-heading">
          <div>
            <div className="text">
              <span className="highlight bold">Interac Innovation Lab</span> //
              Software Engineer Intern
            </div>
            <div className="text subtitle">Flutter, Firebase, Ionic </div>
          </div>
          <div className="text">Winter 2021</div>
        </div>

        <div class="experience-body">
          <ul className="text">
            <li>
              Integrated dynamic QR transactions with e-commerce sites to
              streamline the order checkout process
            </li>
            <li>
              Developed a personalized and data-rich user experience for the
              Interac QR payment app
            </li>
            <li>
              Designed a web platform to increase the discoverability of local
              businesses
            </li>
          </ul>
        </div>
      </div>

      <div id="marketbox">
        <div class="experience-heading">
          <div>
            <div className="text">
              <span className="highlight bold">MarketBox</span> // Software
              Engineer Intern
            </div>
            <div className="text subtitle">React Native, Node</div>
          </div>
          <div className="text">Summer 2020</div>
        </div>

        <div class="experience-body">
          <ul className="text">
            <li>Engineered a data migration tool to import client data</li>
            <li>
              Redesigned scheduling features in the{" "}
              <span class="italic">MarketBox</span> app
            </li>
            <li>
              Developed client-facing REST APIs for companies to query
              <span class="italic">MarketBox</span> data
            </li>
          </ul>
        </div>
      </div>

      <div id="scotiabank">
        <div class="experience-heading">
          <div>
            <div className="text">
              <span className="highlight bold">Scotiabank</span> // Software
              Engineer Intern
            </div>
          </div>
          <div className="text">Fall 2019</div>
        </div>
      </div>

      <div id="equitable">
        <div class="experience-heading">
          <div>
            <div className="text">
              <span className="highlight bold">Equitable Bank</span> // QA
              Engineer Intern
            </div>
          </div>
          <div className="text">Winter 2019</div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
