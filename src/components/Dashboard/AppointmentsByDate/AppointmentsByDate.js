import React from 'react';

const AppointmentsByDate = ({appointment}) => {
    console.log(appointment);
    return (
        <div>
            <h1>appointment: {appointment.length}</h1>
            {
               appointment.map(app => <li key={app._id}>{app.name}</li>)
            }
        </div>
    );
};

export default AppointmentsByDate;