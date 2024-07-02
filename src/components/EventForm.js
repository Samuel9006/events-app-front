import React, { useState } from 'react';

const EventForm = ({ onSubmit }) => {
    const [eventTitle, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [eventDate, setDate] = useState('');
    const [eventLocation, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ eventTitle, description, eventDate: eventDate, eventLocation: eventLocation });
        setTitle('');
        setDescription('');
        setDate('');
        setLocation('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block">Title</label>
                <input
                    type="text"
                    value={eventTitle}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div>
                <label className="block">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded"
                ></textarea>
            </div>
            <div>
                <label className="block">Date</label>
                <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div>
                <label className="block">Location</label>
                <input
                    type="text"
                    value={eventLocation}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Event</button>
        </form>
    );
};

export default EventForm;
