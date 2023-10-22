import React from 'react';

const Head = () => {
    return (
        <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
            <div className='flex col-span-1 '>
                <img  className="h-10" src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" alt="you" />
                <img className="h-10 mx-2" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="youtube" />
            </div>
            <div className='col-span-10 px-10'>
                <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
                <button className='border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full'>🔍</button>
            </div>
            <div className='col-span-1'>
                <img className="h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHv5SRkqgXKiDxk5z4WySyBqhlwGem5gsohjEjs1o&s" alt="user" />
            </div>
        </div>
    );
}

export default Head;
