import NavBar from "../common/components/navBar/NavBar";
import "./About.scss";
import REACT_SVG from "../assets/react.svg";

const About = () => {
  return (
    <div className="about-w">
      <NavBar />
      <div className="contents-w">
        <div className="contents-c">
          <p className="about-title">What is Code Visualizer ?</p>
          <p>
            This is a tool to visualize the COde data in node based
            visualization form
          </p>
          <p>Yeah !, that's to it !</p>
          <div className="div"></div>
          <p>Wait !</p>
          <p>There is another module which helps you compare stuffs.</p>
          <br />
          <br />
          <p className="about-title">Why is this built ?</p>
          <p>
            I wanted to learn{" "}
            <span
              className="j-crack"
              onClick={() => window.open("https://www.javatpoint.com/angular-8", "_blank")}
            >
              Angular
            </span>{" "}
            Framework
          </p>
          <br />
         
          <br />
          <p className="j-crack  no">Why not learn by building a project !?!</p>
          <div className="div"></div>
          <p>
            So I built something inspired from{" "}
            <span
              className="j-crack"
              onClick={() => window.open("https://jsoncrack.com/", "_blank")}
            >
              JSON Crack
            </span>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
