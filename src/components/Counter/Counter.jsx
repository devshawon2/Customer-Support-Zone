import React, { useState } from 'react';

const Counter = (clickedTickets) => {
    const inProgressCounter = clickedTickets.clickedTickets.length

    return (
        <div className='task-update-container flex flex-col lg:flex-row gap-5 justify-evenly w-[90%] m-auto py-10'>
            <div id='in-progress' className="in-progress rounded-lg flex flex-col items-center justify-center lg:w-200 h-62.5">
                <h6 className='text-2xl text-white'>In-Progress</h6>
                <h3 id='total-in-progress' className='text-6xl text-white'>{inProgressCounter}</h3>
            </div>
            <div id='resolved' className="resolved rounded-lg flex flex-col items-center justify-center lg:w-200 h-62.5">
                <h6 className='text-2xl text-white'>Resolved</h6>
                <h3 id='resolved-total' className='text-6xl text-white'>{0}</h3>
            </div>
        </div>
    );
};

export default Counter;