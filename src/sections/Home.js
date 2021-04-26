import logo from './images/pat.png';
import './css/Home.css';
import AboutMe from './AboutMe'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Portfolio from './Portfolio';
  

function Home() {
    return (
        <Router basename="portfolio-website">
            <Switch>
                <Route path="/aboutme"> 
                    <AboutMe />
                </Route>
                <Route path="/portfolio">      
                    <Portfolio />
                </Route>
                <Route path="/">
                    <div className="Home">
                        <header className="Home-header">
                            <div>
                                <img src={logo} className="Home-logo" alt="logo" />
                                <h1>hi, i am pat!</h1>
                                <div>
                                    <em>heads up! this site is boriiiiiiiiiinnng</em>
                                </div>
                                <Link to={`/aboutme`} className="AboutMe">
                                    <h3>about me</h3>
                                </Link>
                                <Link to={`/portfolio`} className="Portfolio">
                                    <h3>portfolio</h3>
                                </Link>
                                
                                <div className="Repo-link">
                                    <div>
                                        <em>site written as introductory project to react</em>
                                    </div>
                                    <a href="https://github.com/fatrixienicolieopetina/portfolio-website/tree/develop">
                                        <em>repository link</em>
                                    </a>
                                </div>
                            </div>
                        </header>
                    </div>
                </Route>
            </Switch>
        </Router>
    
    );
}

export default Home;