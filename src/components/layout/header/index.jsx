import Menu from "../../nav";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <h1 className="logo-text">
          HOLIDA<span className="logo-z">Z</span>E
        </h1>
        <img src="/images/holidaze-logo.png" alt="" />
      </div>

      <Menu />
    </header>
  );
}

export default Header;
