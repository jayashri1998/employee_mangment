    const initialState = {
        employees: [],
        filteredEmployees: [],
        selectedEmployee: null,
        isAdding: false,
        isEditing: false,
    };
    
    const employeeReducer = (state = initialState, action) => {
        switch (action.type) {
        case "SET_EMPLOYEES":
            return { ...state, employees: action.payload };
        case "SET_FILTERED_EMPLOYEES":
            return { ...state, filteredEmployees: action.payload };
        case "SET_SELECTED_EMPLOYEE":
            return { ...state, selectedEmployee: action.payload };
        case "SET_IS_ADDING":
            return { ...state, isAdding: action.payload };
        case "SET_IS_EDITING":
            return { ...state, isEditing: action.payload };
        default:
            return state;
        }
    };
    
    export default employeeReducer;
    