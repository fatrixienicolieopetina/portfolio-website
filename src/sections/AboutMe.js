import {Link} from "react-router-dom";
import graduationPic from './images/graduate.jpg';
import './css/AboutMe.css';
import { SocialIcon } from 'react-social-icons';

function AboutMe() {
    return ( 
        <div className="AboutMe">
            <div className="title">about me</div>
            <header className="About-header">
                <div className="column1">
                    <img src={graduationPic} className="Graduation-Pic" alt="graduationPic" />
                    <h3>patricia nicole opetina</h3>
                    <div>{computeAge().toFixed(2)} yrs old</div>
                    <div> bs in computer science</div>
                </div>
                <div className="column2">
                    <h4>interests</h4>
                    <div className="description">
                        kpop, foreign languages (日本語 and 한글), financial literacy stuff
                    </div>
                    <hr />
                    <h4>experience</h4>
                    <div>junior software engineer at ISR Cebu Corp.</div>
                    <div>junior software associate at Azeus</div>
                    <hr />
                    <h4>contact me</h4>
                    <div>
                        <SocialIcon url="https://twitter.com/jaketrent" className="icon"/> &nbsp;
                         @colemepat <br />
                         <SocialIcon url="https://github.com/jaketrent" bgColor="purple" className="icon"/> 
                         &nbsp;@fatrixienicolieopetina
                    </div>

                    <Link to={`/`} className="AboutMe"><h5>back to home</h5></Link>
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