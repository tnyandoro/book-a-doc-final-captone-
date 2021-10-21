const  ADD_CLIENT = BOOL/ADD_CLIENT;

const addClient = (payload) => ({
    type: ADD_CLIENT,
    payload,
});

const clientReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CLIENT":
        return state.concat({
            id: action.payload.id,
            name: action.payload.name,
            email: action.payload.email,
        });
    default:
        return state;
  }
};

