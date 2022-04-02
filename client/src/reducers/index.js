const reducers = (state = [{ foo: "bar" }], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return state;
        case "ADD_POST":
            return state.push(action.payload);
        default:
            return state;
    }
};
export default reducers;
