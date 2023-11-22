import React from 'react';
import data from  '../data.json';
import './footer';
import Profileinfo from './body';
import './head.css';
import profileimg from '../profileimg.png';


const footer = () => {
    return (
        <div className='cover-photo'>
            <div className='profile-photo'>
                <img src={profileimg} alt='profile-img' className='profileimge' />
                <div className='profile-name'>
                    <h3>{data.profile.middlename} {data.profile.lastname} <span className='check-symbol'>&#10009;</span> </h3>
                    <Profileinfo /> 
                </div>  
            </div>
        </div>
    );
}

export default footer;