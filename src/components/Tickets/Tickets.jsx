import React from 'react';
import Ticket from './Ticket/Ticket';

const Tickets = ({ tickets, handleClickedTickets, clickedTickets, handleRemove }) => {


    return (
        <section className='w-[90%] m-auto '>
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
                            <br />
                            {
                                clickedTickets.length === 0 &&
                                <p>Select a ticket to add to Task Status</p>
                            }
                            <ul className="list bg-base-100 rounded-box shadow-md">
                                {clickedTickets.map(inProgressTicket =>
                                    <li className="list-row flex flex-col items-center" key={inProgressTicket.id}>
                                        <div className="list-col-grow">
                                            <p className='inter-medium text-lg'>{inProgressTicket.title}</p>
                                        </div>
                                        <button onClick={() => handleRemove(inProgressTicket.id)} className="btn w-full btn-square btn-ghost bg-[#02A53B]">
                                            Complete
                                        </button>
                                    </li>
                                )
                                }
                            </ul>
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