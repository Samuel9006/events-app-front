import React from 'react';

const ParticipantItem = ({ participant }) => {
    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl font-bold">{participant.name}</h2>
            <p>{participant.email}</p>
        </div>
    );
};


export default ParticipantItem;