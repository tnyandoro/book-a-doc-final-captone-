const DISPLAY_APPOINTMENTS = 'BOOK/DISPLAY_APPOINTMENTS';

const loadAppointments = (json) => ({
    type: DISPLAY_APPOINTMENTS,
    json,
});

const appointmentReducer = (state = [], action) => {
    switch(action.type) {
        case DISPLAY_APPOINTMENTS:
            return action.json.map((appointment) => {
                const {
                    id,
                    appointment_date,
                    hospital,
                    doctor_id,
                    client_id
                } = appointment;
                return {
                    id, appointment_date, hospital, doctor_id, client_id,
                };
            });
        default:
            return state;
    }
};

const getAppointments = () => {
    fetch('https://localhost/appointments')
      .then((Response) => Response.json())
      .then((json) => dispatch(loadAppointments(json)));
};

export {
    loadAppointments,
    getAppointments,
    appointmentReducer,
};