import React from 'react';
import EventItem from './EventItem';

const EventList = ({ events }) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {events.map(event => (
                <EventItem key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventList;