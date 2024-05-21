import NavBar from "../common/components/navBar/NavBar";
import "./Contact.scss";
import LinkedinSVG from "../assets/linkedin.svg";
import GmailSVG from "../assets/gmail.svg";
import GithubPNG from "../assets/github.png";
import UpworkSVG from "../assets/upwork.svg";

const Contact = () => {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="contact-w">
      <NavBar />
      <div className="contact-wrapper">
        <p className="wannah-hire">Want to hire me ?</p>

        <br />
        <br />
        <p className="reach-out">Feel free to reach me out !</p>

        <br />
        <div className="social-hanldes-w">
          <img
            onClick={() =>
              openLink("https://www.linkedin.com/in/manibharathi-sidhan-190588225/")
            }
            src={LinkedinSVG}
            className="circle-avatars"
            style={{ backgroundColor: "#0078d4" }}
          />
          <img
            onClick={() => openLink("mailto: manibharathimb05@gmail.com")}
            src={GmailSVG}
            className="circle-avatars"
            style={{ padding: "8px", backgroundColor: "white" }}
          />
          <img
            onClick={() => openLink("https://github.com/Mani88254")}
            src={GithubPNG}
            className="circle-avatars"
            style={{ backgroundColor: "white", padding: "6px" }}
          />
         
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Contact;
