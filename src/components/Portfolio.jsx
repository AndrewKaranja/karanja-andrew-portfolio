import React, { Component } from "react";
import ProjectCard from "./common/ProjectCard";
import project1 from "../assets/images/projects/kinga.png";
import project2 from "../assets/images/projects/expensetracker.png";
import project3 from "../assets/images/projects/kplayer.png";
import project4 from "../assets/images/projects/3illboard.png";


export default class Portfolio extends Component {
  state = {
    shownTab: "all",
  };

  handleHowTab = (tab) => {
    this.setState({ shownTab: tab });
  };

  render() {
    const { shownTab } = this.state;
    const projects = [
      {
        id: 4,
        image: project4,
        title: "3illboard",
        description:
          "A marketplace for ad spaces",
        demoLink: "https://www.3illboard.com",
        sourceCodeLink: "https://github.com/AndrewKaranja",
        technologies: [
        { id: 1, name: "React" },
        { id: 2, name: "Firebase" },
        { id: 3, name: "Cloud Functions" },
        { id: 4, name: "Tailwind CSS" },],
        category_id: 1,
        animation: "flip-left",
      },
      {
        id: 2,
        image: project1,
        title: "Kinga Sacco",
        description:
          "Kinga sacco is a sacco website meant for members of PSKenya.The society's core business is mobilize savings from the members out of which credit is approved at affordable interest rates.Some of the features in the website include a loan calculator,members forum,information center,chatbot and a membership registration system",
        demoLink: "https://www.kingasacco.co.ke/",
        sourceCodeLink: "https://www.kingasacco.co.ke/",
        technologies: [
          { id: 1, name: "Javascript" },
          { id: 2, name: "WordPress" },
        ],
        category_id: 1,
        animation: "zoom-in-up",
      },
      {
        id: 1,
        image: project2,
        title: "Expense Tracker",
        description:
          "This is an expense tracker that allows users to calculate and keep track of their expenses",
        demoLink: "https://github.com/AndrewKaranja/Expense-Tracker",
        sourceCodeLink: "https://github.com/AndrewKaranja/Expense-Tracker",
        technologies: [
          { id: 1, name: "Javascript" },
          { id: 2, name: "ReactJs" },
          { id: 3, name: "Node js" },
        ],
        category_id: 1,
        animation: "zoom-in-up",
      },

      {
        id: 3,
        image: project3,
        title: "K player",
        description:
          "Minimalist music player created for android.   ",
        demoLink: "https://github.com/AndrewKaranja/K-Player",
        sourceCodeLink: "https://github.com/AndrewKaranja/K-Player",
        technologies: [{ id: 1, name: "Android java" }],
        category_id: 2,
        animation: "flip-left",
      },
     
    ];

    const webProjects = projects.filter((project) => project.category_id === 1);
    const mobileProjects = projects.filter(
      (project) => project.category_id === 2
    );
    const backendProjects = projects.filter(
      (project) => project.category_id === 3
    );

    const renderProjects = () => {
      if (shownTab === "all") {
        return projects;
      } else if (shownTab === "mobile") {
        return mobileProjects;
      } else if (shownTab === "web") {
        return webProjects;
      } else {
        return backendProjects;
      }
    };
    return (
      <div className="portfolio-main-container" id="portfolio" name="portfolio">
        <div className="portfolio-wrapper">
          <div className="portfolio-header">
            <div className="home-hello-wrapper" data-aos="fade-up">
              <div className="hello-line"></div>
              <h3 className="hero-hello">Portfolio</h3>
            </div>
            <div className="portfolio-works-wrapper">
              <div className="links-wrapper">
                <h3 data-aos="fade-up">Some of my best works</h3>
                <ul>
                  <li>
                    <div
                      onClick={() => this.handleHowTab("all")}
                      className={shownTab === "all" ? "active" : ""}
                    >
                      All
                    </div>
                  </li>
                  <li onClick={() => this.handleHowTab("web")}>
                    <div className={shownTab === "web" ? "active" : ""}>
                      Web
                    </div>
                  </li>
                  <li onClick={() => this.handleHowTab("mobile")}>
                    <div className={shownTab === "mobile" ? "active" : ""}>
                      Mobile{" "}
                    </div>
                  </li>
                  <li onClick={() => this.handleHowTab("backend")}>
                    <div className={shownTab === "backend" ? "active" : ""}>
                      Backend
                    </div>
                  </li>
                </ul>
              </div>
              <div className="projects-grid-wrapper">
                {renderProjects().map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
