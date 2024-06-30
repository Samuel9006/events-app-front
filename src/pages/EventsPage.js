import React from 'react';
import useFetch from '../hooks/useFetch';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';

const EventsPage = () => {
    const { data: events, loading, error } = useFetch('http://localhost:8081/events');

    const handleAddEvent = async (event) => {
        await fetch('http://localhost:8080/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event),
        });
        // Re-fetch events or update state to reflect new event
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">Events</h1>
            <EventForm onSubmit={handleAddEvent} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {events && <EventList events={events} />}
        </div>
    );
};

export default EventsPage;