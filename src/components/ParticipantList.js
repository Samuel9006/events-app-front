import React from 'react';
import ParticipantItem from './ParticipantItem';

const ParticipantList = ({ participants }) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {participants.map(participant => (
                <ParticipantItem key={participant.id} participant={participant} />
            ))}
        </div>
    );
};

export default ParticipantList;