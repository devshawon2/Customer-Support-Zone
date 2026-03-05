import React from 'react';
import Ticket from './Ticket/Ticket';

const Tickets = ({ tickets }) => {
    const handleClickedTickets = (ticket) => {
        console.log(ticket);
    }
    return (
        <section className='w-[80%] m-auto '>
            <div className='Tickets-Tasks-Operations'>
                <h6 className='inter-semibold text-2xl'>Customer Tickets</h6>
                <div className='flex flex-col lg:flex-row my-5 gap-5'>
                    <div className="tickets-container flex-1 grid lg:grid-cols-2 grid-cols-1 gap-5">
                        {
                            tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} handleClickedTickets={handleClickedTickets}></Ticket>)
                        }
                    </div>
                    <div className="status-container">
                        <div className="task-status my-2">
                            <h4 className='text-2xl inter-semibold'>Task Status</h4>
                            <p>Select a ticket to add to Task Status</p>
                            <br />
                        </div>
                        <div className="resolved-task my-2">
                            <h4 className='text-2xl inter-semibold'>Resolved Task</h4>
                            <p>No resolved tasks yet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tickets;