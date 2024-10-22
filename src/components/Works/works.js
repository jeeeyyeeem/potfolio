import React from 'react';
import './works.css';
import n from '../../assets/n.png';
import m from '../../assets/m.png';

const Works = () => {
    return(
    <section id ='works'>
        <h2 className="worksTitle">My Projects</h2>
        <span className="workDesc">These are the my projects</span>
        <div className='workImgs'>
            <img src={n} alt="" className="worksImg"/>
            <img src={m} alt="" className="worksImg"/>
        </div>
    </section>
    );
}
export default Works;