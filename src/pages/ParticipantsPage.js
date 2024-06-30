import React from 'react';
import useFetch from '../hooks/useFetch';
import ParticipantList from '../components/ParticipantList';
import ParticipantForm from '../components/ParticipantForm';

const ParticipantsPage = () => {
    const { data: participants, loading, error } = useFetch('http://localhost:8082/participants');

    const handleAddParticipant = async (participant) => {
        await fetch('http://localhost:8082/participants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(participant),
        });
        // Re-fetch participants or update state to reflect new participant
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">Participants</h1>
            <ParticipantForm onSubmit={handleAddParticipant} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {participants && <ParticipantList participants={participants} />}
        </div>
    );
};

export default ParticipantsPage;