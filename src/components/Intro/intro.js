import React from "react";
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
       <section id ="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">JM </span> <br />Handsome Student</span>
            <p className="introPara">I'm friendly, nice, and a very handsome boy.</p>
            <Link><button className="btn"><img src={btnImg}alt="Pinduta lang" className="btnImg" />PINDUTA LANG</button></Link>

        </div>
        <img src={bg}alt="Profile" className="bg"/>
       </section>
    );
}

export default Intro