import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import Layout from "./Layout/Layout.jsx";
import List from "./Dashboard";
import Add from "./AddEmployee";
import Edit from "./EditEmployee.jsx";
import {
  setEmployees,
  setFilteredEmployees,
  setSelectedEmployee,
  setIsAdding,
  setIsEditing,
} from "../redux/employeeActions.jsx";

function Dashboard() {
  const dispatch = useDispatch();
  const { employees, filteredEmployees, selectedEmployee, isAdding, isEditing } = useSelector(
    (state) => state.employee
  );

  useEffect(() => {
    fetch("http://localhost:5000/employees")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setEmployees(data));
        dispatch(setFilteredEmployees(data));
      });
  }, [dispatch]);

  const handleEdit = (id) => {
    const employee = employees.find((employee) => employee.id === id);
    if (employee) {
      dispatch(setSelectedEmployee(employee));
      dispatch(setIsEditing(true));
    } else {
      console.error("Employee not found");
    }
  };
  

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to delete?",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const [employee] = employees.filter((employee) => employee.id === id);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted`,
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(setEmployees(employees.filter((employee) => employee.id !== id)));
        dispatch(setFilteredEmployees(filteredEmployees.filter((employee) => employee.id !== id)));
        fetch(`http://localhost:5000/employees/${id}`, {
          method: "DELETE",
        }).catch((error) => {
          console.error("Error deleting employee:", error);
        });
      }
    });
  };
  

  return (
    <div className="container">
      <Layout
      setFilteredEmployees={setFilteredEmployees}
      setIsAdding={setIsAdding}
      >
        {!isAdding && (
          <List
            employees={filteredEmployees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}

        {isAdding && (
          <Add
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
          />
        )}

        {isEditing && (
          <div className="fixed inset-0  overflow-scroll bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 mt-32  rounded-lg shadow-lg max-w-2xl w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={() => dispatch(setIsEditing(false))}
              >
                ✖
              </button>
              <Edit
                employees={employees}
                selectedEmployee={selectedEmployee}
                setEmployees={setEmployees}
                setIsEditing={setIsEditing}
              />
            </div>
          </div>
        )}              
      </Layout>
    </div>
  );
}

export default Dashboard;
