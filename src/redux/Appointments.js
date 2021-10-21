const DISPLAY_APPOINTMENTS = 'BOOK/DISPLAY_APPOINTMENTS';
const ASK_APPOINMENT = 'BOOK/ASK_APPOINTMENT';
const CANCEL_APPOINTMENTS = 'BOOK/CANCEL_APPOINTMENT',


const loadAppointments = (json) => ({
    type: DISPLAY_APPOINTMENTS,
    json,
});

const askAppointment = (payload) => ({
    type: ASK_APPOINMENT,
    payload,
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
        case ASK_APPOINMENT:
            return [...state,
                       {
                           id: action.payload.id,
                           appointment_date: action.payload.appointment_date,
                           hospital: action.payload.hospital,
                           doctor_id: action.payload.doctor_id,
                       }
                    ]
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