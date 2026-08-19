import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TweenApp Pro</div>
      <div className="navbar-actions">
        <button className="nav-btn" onClick={() => alert('Saved!')}>Save Project</button>
        <button className="nav-btn export">Export JSON</button>
      </div>
    </nav>
  );
};

export default Navbar;
