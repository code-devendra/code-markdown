import LogoIcon from "../assets/logo-icon.svg";
const Navbar = () => {
  return (
    <div id="nav">
      <div id="nav-logo">
        <img id="nav-logo-img" src={LogoIcon} alt="code-markdown logo" />
        <div id="nav-logo-title">code-markdown</div>
      </div>
    </div>
  );
};

export default Navbar;
