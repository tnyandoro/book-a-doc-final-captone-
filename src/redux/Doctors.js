const DISPLAY_DOCTORS = "BOOK_DISPLAY_DOCTORS";

const loadDoctors = (json) => ({
    type: DISPLAY_DOCTORS,
    json,
})

const doctorsReducer = (state= [], action) => {
    switch (action.type) {
        case DISPLAY_DOCTORS:
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
        default:
            return state;
    }
};

const getDoctors = () => (dispatch) => {
    fetch('https://localhost/doctors')
      .then((Response) => Response.json())
      .then((json) => dispatch(loadDoctors(json)));
};

export {
    loadDoctors,
    doctorsReducer,
    getDoctors,
};