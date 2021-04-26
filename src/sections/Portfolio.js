import {Link} from "react-router-dom";
import './css/Portfolio.css';
import etchasketch from './images/peek3.gif';

function Portfolio() {
    return (
        <div className="Portfolio-component">
            <div className="title">portfolio</div>
            <header className="Portfolio-header">
                <div className="column1">
                    <h4>ETCH-A-SKETCH</h4>
                    <img src={etchasketch} className="Etch-a-Sketch" alt="etchasketch" />
                </div>
                <div className="column2">
                    <div className="dev-stack">
                        <hr></hr>
                        <div className="description">
                            <p>typescript, javascript, react, angular</p>
                            <p>java se (main lang)</p>
                            <p>sql, mysql, spring-boot, little java ee (jsp, jsf)</p>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="github">
                        <h4>repositories</h4>
                        <p>github: <u>https://github.com/fatrixienicolieopetina</u></p>
                        <p>live preview of projects can be found in README.md</p>
                        <p>i did most of them while going through the The Odin Project, 
                            to refresh frontend stuff learned at school especially js
                        </p>
                    </div>

                    <Link to={`/`} className="Portfolio"><h5>Back To Home</h5></Link>
                </div>
            </header>
        </div>
    );
}

export default Portfolio;