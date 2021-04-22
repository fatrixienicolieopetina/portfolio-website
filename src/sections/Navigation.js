import './css/Navigation.css';

function Navigation() {
  return (
    <div className="Navigation">
      <a className="column" href="projects">Portfolio</a>
      <div className="space"></div>
      <a className="column" href="about-me">About Me</a>
    </div>
  );
}

export default Navigation;