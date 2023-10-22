import React from 'react';

const SideBar = () => {
    return (
        <div className='p-5 shadow-lg w-40 '>
            <ul className='pt-5'>
            <li>Home</li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
           
           </ul>
            <h1 className='font-bold'>Subscription</h1>
           <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
           
           </ul>
           <h1 className='font-bold pt-5'>Watch later</h1>
           <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
           
           </ul>
        </div>
    );
}

export default SideBar;
