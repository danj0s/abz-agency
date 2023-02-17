import Logo from '../../img/svg/Logo';

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-logo-container">
          <Logo />
        </div>
        <div className="header-link-container">
          <a href="#users" className="header-link">
            Users
          </a>
          <a href="#add-users" className="header-link">
            Sing up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
