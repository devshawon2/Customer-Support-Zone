import React, { use } from 'react';
import './Body.css';
import Tickets from '../Tickets/Tickets';
import Counter from '../Counter/Counter';

const Body = ({ ticketsPromise }) => {
    const tickets = use(ticketsPromise);

    return (
        <div className="body bg-[#F5F5F5]">

            <Counter>

            </Counter>


            <Tickets tickets={tickets}>

            </Tickets>

        </div>
    );
};

export default Body;