import React from 'react';

const EventItem = ({ event }) => {
    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl font-bold">{event.eventTitle}</h2>
            <p>{event.description}</p>
            <p>{new Date(event.eventDate).toLocaleDateString()}</p>
            <p>{event.eventLocation}</p>
        </div>
    );
};

export default EventItem;