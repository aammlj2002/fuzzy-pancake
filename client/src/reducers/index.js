const reducers = (state = [{ foo: "bar" }], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return state;
        case "ADD_POST":
            return state.push(action.payload);
        case "CREATE_POST":
            return state.push(action.payload.data);
        default:
            return state;
    }
};
export default reducers;
