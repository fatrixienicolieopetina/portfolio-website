import {Link} from "react-router-dom";
import graduationPic from './graduate.jpg';
import './css/AboutMe.css';
import { SocialIcon } from 'react-social-icons';

function AboutMe() {
    return ( 
        <div className="AboutMe">
            <div className="title">About Me</div>
            <header className="About-header">
                <div className="column1">
                    <img src={graduationPic} className="Graduation-Pic" alt="graduationPic" />
                    <h3>Patricia Nicole Opetina</h3>
                    <div>{computeAge().toFixed(2)} yrs old</div>
                    <div> BS in Computer Science</div>
                </div>
                <div className="column2">
                    <h4>Interests</h4>
                    <div className="description">KPop, Foreign languages (日本語 and 한글)</div>
                    <hr />
                    <h4>Experience</h4>
                    <div>Junior Software Engineer at ISR Cebu Corp.</div>
                    <hr />
                    <h4>Contact Me</h4>
                    <div>
                        <SocialIcon url="https://twitter.com/jaketrent" className="icon"/> &nbsp;
                         @jinjja_anyeppeo <br />
                         <SocialIcon url="https://github.com/jaketrent" bgColor="purple" className="icon"/> 
                         &nbsp;@fatrixienicolieopetina
                    </div>

                    <Link to={`/`} className="AboutMe"><h5>Back To Home</h5></Link>
                </div>
            </header>
        </div>
    );
}

function computeAge() {
    let now = new Date();
    let bday = new Date('1999-05-08');
    return Math.abs(now-bday) / 31556952000;
}

export default AboutMe;