import "../App.css";

function Nav() {
  return (
    <>
      <div className="navbar">
        <Logo />
        <Menu />
        <Button text="Login" />
      </div>
    </>
  );
}

function Logo() {
  return (
    <>
      <div className="logo">
        <img src="/Nike-Logo.png" alt="logo-image" />
      </div>
    </>
  );
}

function Menu() {
  return (
    <>
      <div className="menu">
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export function Button({ text }) {
  return (
    <>
      <button className="primary">{text}</button>
    </>
  );
}

export default Nav;
