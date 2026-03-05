import React, { useState, use } from 'react';
import './Body.css';
import Tickets from '../Tickets/Tickets';
import Counter from '../Counter/Counter';

const Body = ({ ticketsPromise }) => {
    const [clickedTickets, setClickedTickets] = useState([]);
    const handleClickedTickets = (ticket) => {
        setClickedTickets(previousTickets => {
            const existingTickets = previousTickets.find(present => present.id === ticket.id)
            if (existingTickets) {
                return previousTickets
            } else {
                return [...previousTickets, ticket]
            };
        })
    }
    const tickets = use(ticketsPromise);
    return (
        <div className="body bg-[#F5F5F5]">

            <Counter clickedTickets={clickedTickets}>

            </Counter>


            <Tickets tickets={tickets} handleClickedTickets={handleClickedTickets}>

            </Tickets>

        </div>
    );
};

export default Body;