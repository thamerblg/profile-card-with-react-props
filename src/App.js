import "./App.css";
import ProfileComponent from "./profile/ProfileComponent";
import icon from "./icon.jpg";

function App() {
  const showName = (fullName) => {
    alert("Hii !!!; My name is " + fullName);
  };
  return (
    <ProfileComponent
      fullName="John Doe"
      bio="Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged."
      profession="Designer & FrontEnd-Developper"
      handleClick={showName}
    >
      <img src={icon} alt="icon-profile" style={{ ...imgStyle }} />
    </ProfileComponent>
  );
}

const imgStyle = {
  width: "180px",
  height: "180px",
  position: "absolute",
  left: "calc(50% - 90px)",
  top: "25px",
  borderRadius: "50%",
  padding: "5px",
  border: "2px solid #fff",
};
export default App;
