const DISPLAY_DOCTORS = "BOOK/DISPLAY_DOCTORS";
const ADD_DOCTOR = "BOOK/ADD_DOCTOR";
const DELETE_DOCTOR = "BOOK/DELETE_DOCTOR"


const loadDoctors = (json) => ({
    type: DISPLAY_DOCTORS,
    json,
})

const addDoctor = (payload) => ({
    type: ADD_DOCTOR,
    payload,
})

const deleteDoctor = (payload) => ({
    type: DELETE_DOCTOR,
    payload,
})

const doctorsReducer = (state = [], action) => {
    switch (action.type) {
        case "DISPLAY_DOCTORS":
            return action.json.map((doctor) => {
                const { 
                    id,
                    name,
                    email,
                    phone,
                    about
                } = doctor;
                return { 
                    id,
                    name,
                    email,
                    phone,
                    about
                }; 
            })
        case "ADD_DOCTOR":
            return [...state,
                   {
                       id: action.payload.id,
                       name: action.payload.name,
                       email: action.payload.email,
                       phone: action.payload.phone,
                   }
                ]
        case "ADD_DOCTOR":
            return [...state,
                    {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                    phone: action.payload.phone,
                    }
                ]
        case "DELETE_DOCTOR":
            return [...state,
                    { state.filter((doctor, id) => id !== action.payload)  };
                   ]
        
        default:
            return state;
    }
};

const letAddDoctor = (dispatch) => {
    return dispatch(addDoctor);
}

const displayDoctor = (dispatch) => {
    return dispatch(loadDoctors);
}

const getDoctors = () => (dispatch) => {
    fetch('https://book-doctor-appointment.herokuapp.com/doctors')
      .then((Response) => Response.json())
      .then((json) => dispatch(loadDoctors(json)));
};

export {
    loadDoctors,
    doctorsReducer,
    getDoctors,
    letAddDoctor,
    displayDoctor
};