
export const setEmployees = (employees) => ({
    type: "SET_EMPLOYEES",
    payload: employees,
  });
  
  export const setFilteredEmployees = (filteredEmployees) => ({
    type: "SET_FILTERED_EMPLOYEES",
    payload: filteredEmployees,
  });
  
  export const setSelectedEmployee = (employee) => ({
    type: "SET_SELECTED_EMPLOYEE",
    payload: employee,
  });
  
  export const setIsAdding = (isAdding) => ({
    type: "SET_IS_ADDING",
    payload: isAdding,
  });
  
  export const setIsEditing = (isEditing) => ({
    type: "SET_IS_EDITING",
    payload: isEditing,
  });
  