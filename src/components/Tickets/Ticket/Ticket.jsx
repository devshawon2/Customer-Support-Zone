import React from 'react';

const Ticket = ({ ticket, handleClickedTickets }) => {
    // UI manipulation for ticket status
    const badgeTextUpperCase = ticket.status.toUpperCase();
    const badgeTextStyle = badgeTextUpperCase === 'Open'.toUpperCase()
        ? 'bg-[#bbf7d0] text-[#15803d]'
        : 'bg-[#fef08a] text-[#854d0e]';

    const badgeDotStyle = badgeTextUpperCase === 'Open'.toUpperCase()
        ? 'bg-[#16a34a]' : 'bg-[#ca8a04]';

    // Priority Text Style changed
    const priorityTextUpperCase = ticket.priority.toUpperCase();
    const priorityTextStyle = priorityTextUpperCase === 'high'.toUpperCase()
        ? 'text-red-500'
        : priorityTextUpperCase === 'medium'.toUpperCase() ? 'text-[#FEBB0C]'
            : 'text-[#02A53B]'

    const ticketClickHandler = () => {
        handleClickedTickets(ticket);

    }
    return (
        <a onClick={ticketClickHandler} href='#'>
            <div className="card bg-base-100 border border-slate-200 shadow-sm rounded-md">
                <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-[17px] font-bold text-[#1e293b]"> {ticket.title} </h2>
                        <div className={`badge badge-success border-none gap-1.5 font-medium lg:px-3 px-2 lg:py-3 py-6 ${badgeTextStyle}`}>
                            <span className={`h-2  w-2 rounded-full ${badgeDotStyle}`}></span> {ticket.status}
                        </div>
                    </div>
                    <p className="text-[14px] text-slate-500 line-clamp-2 mb-6 leading-snug">
                        {ticket.description}
                    </p>
                    <div className="flex justify-between items-center text-[12px]">
                        <div className="flex gap-3">
                            <span className="text-slate-400 font-medium">#{ticket.id}</span>
                            <span className={`font-bold tracking-tight ${priorityTextStyle}`} >{ticket.priority} Priority</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-500">
                            <span>{ticket.customer}</span>
                            <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                </svg>
                                {ticket.createdAt}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Ticket;