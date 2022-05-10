import React from 'react';

function Bio() {
    return (
        <div className='bio'>
            <p>Frontend developer</p>
            <p><a href='#'>www.mywebsite.com</a></p>
        </div>
    );
}

function Buttons(){
    return(
     <div className='buttons'>
        <button className='email'><i class="fa-solid fa-envelope"></i> Email</button>
        <button className='linkedin'><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
     </div>
    );
}

export function Info() {
    return (
        <div className='info'>
            <div className='image-placeholder'>Put your Image here</div>
            <h2>My Name</h2>
            <Bio />
            <Buttons />
        </div>
    );
}