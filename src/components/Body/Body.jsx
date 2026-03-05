import React, { useState, use } from 'react';
import './Body.css';
import Tickets from '../Tickets/Tickets';
import Counter from '../Counter/Counter';
import { Toaster, toast } from 'react-hot-toast';

const Body = ({ ticketsPromise }) => {
    const [clickedTickets, setClickedTickets] = useState([]);
    const [resolvedTickets, setResolvedTickets] = useState([]);

    const handleClickedTickets = (ticket) => {
        setClickedTickets(previousTickets => {
            const existingTickets = previousTickets.find(present => present.id === ticket.id)
            if (existingTickets) {
                return previousTickets
            } else {
                return [...previousTickets, ticket]
            };
        })
        toast.success('Ticket Added!');
    }
    const handleComplete = (id) => {
        const movedTicket = clickedTickets.find(ticket => ticket.id === id);
        if (movedTicket) {
            setResolvedTickets([...resolvedTickets, movedTicket]);
            const updatedClickedTickets = clickedTickets.filter(ticket => ticket.id !== id)
            setClickedTickets(updatedClickedTickets);
        }
        toast.success('Task is marked as resolved');
    }
    const tickets = use(ticketsPromise);
    return (

        <div className="body bg-[#F5F5F5]">
            <Toaster position="top-center" reverseOrder={false} />
            <Counter
                clickedTickets={clickedTickets}
                resolvedTickets={resolvedTickets}
            >

            </Counter>


            <Tickets
                tickets={tickets}
                handleClickedTickets={handleClickedTickets}
                clickedTickets={clickedTickets}
                handleComplete={handleComplete}
                resolvedTickets={resolvedTickets}
            >


            </Tickets>

        </div>
    );
};

export default Body;