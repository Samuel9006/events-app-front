import React from 'react';

const EventItem = ({ event }) => {
    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl font-bold">{event.title}</h2>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.location}</p>
        </div>
    );
};

export default EventItem;