import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import PropTypes from "prop-types";

const ProfileComponent = (props) => {
  return (
    <div className="main" style={{ ...mainStyle }}>
      <div className="container" style={{ ...containerStyle }}>
        <div className="gradient" style={{ ...gradientStyle }}>
          <div className="photo">{props.children}</div>
          <div
            className="content"
            style={{ bottom: "0", position: "absolute", padding: "20px" }}
          >
            <h1
              onClick={() => {
                props.handleClick(props.fullname);
              }}
              style={{
                fontSize: "35px",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {props.fullName}
            </h1>
            <span
              style={{
                fontSize: "18px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
              }}
            >
              {props.profession}
            </span>
            <br />
            <p
              className="details"
              style={{ fontStyle: "italic", color: "rgb(185, 206, 224)" }}
            >
              {props.bio}
            </p>
            <div
              className="icons"
              style={{
                display: "flex",
                flexDirection: "column",
                top: "-75px",
                position: "absolute",
                left: "85%",
              }}
            >
              <FaFacebook className="fa" style={{ ...faStyle }} />
              <FaTwitter className="fa" style={{ ...faStyle }} />
              <FaInstagram className="fa" style={{ ...faStyle }} />
              <FaPinterest className="fa" style={{ ...faStyle }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileComponent.defaultProps = {
  fullname: "John weak",
  profession: "Default Profession",
  bio: "Default Bio",
};

ProfileComponent.propTypes = {
  fullname: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
};

const mainStyle = {
  top: "50%",
  left: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
};
const containerStyle = {
  height: "550px",
  width: "450px",
  boxShadow: "0 10px 20px black",
  backgroundSize: "cover",
  fontFamily: "Abel, sans-serif",
};
const gradientStyle = {
  position: "relative",
  height: "100%",
  width: "100%",
  top: "0",
  background:
    "linear-gradient(to top,rgba(28, 171, 238, 0.7),rgba(253, 252, 252, 0.21))",
  color: "white",
};
const faStyle = {
  cursor: "pointer",
  fontSize: "25px",
  marginBottom: "20px",
  color: "rgb(202, 215, 226)",
};

export default ProfileComponent;
