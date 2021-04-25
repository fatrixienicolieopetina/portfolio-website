import logo from './pat.png';
import './css/Home.css';
import AboutMe from './AboutMe'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function Home() {
    return (
        <Router basename="portfolio-website">
            <Switch>
                <Route path="/aboutme"> 
                    <AboutMe />
                </Route>
                <Route path="/portfolio"> 
                <div className="Home">
                        <header className="Home-header">
                            <div>
                                put here first your dev stack, and projects
                                <Link to={`/`} className="Portfolio"><h3>Back to Home</h3></Link>
                            </div>
                        </header>
                    </div>
                </Route>
                <Route path="/">
                    <div className="Home">
                        <header className="Home-header">
                            <div>
                                <img src={logo} className="Home-logo" alt="logo" />
                                <h1>Hi, I am Pat!</h1>
                                <Link to={`/aboutme`} className="AboutMe"><h3>About Me</h3></Link>
                                <Link to={`/portfolio`} className="Portfolio"><h3>Portfolio</h3></Link>
                                <div><em>Site written as intro project to React</em></div>
                            </div>
                        </header>
                    </div>
                </Route>
            </Switch>
        </Router>
    
    );
}

export default Home;