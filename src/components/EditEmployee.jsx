import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
  const id = selectedEmployee.id;

 
  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [age, setAge] = useState(selectedEmployee.age);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [gender, setGender] = useState(selectedEmployee.gender);
  const [role, setRole] = useState(selectedEmployee.role);
  const [yearsOfExperience, setYearsOfExperience] = useState(selectedEmployee.yearsOfExperience);
  const [address, setAddress] = useState(selectedEmployee.address);
  
  const dispatch = useDispatch();
 
  useEffect(() => {
    setFirstName(selectedEmployee.firstName);
    setLastName(selectedEmployee.lastName);
    setAge(selectedEmployee.age);
    setSalary(selectedEmployee.salary);
    setGender(selectedEmployee.gender);
    setRole(selectedEmployee.role);
    setYearsOfExperience(selectedEmployee.yearsOfExperience);
    setAddress(selectedEmployee.address);
  }, [selectedEmployee]);

const handleUpdate = async (event) => {
  event.preventDefault();

  const updatedEmployee = {
    id,
    firstName,
    lastName,
    age,
    salary,
    gender,
    role,
    yearsOfExperience,
    address,
  };

  try {
    const response = await fetch(`http://localhost:5000/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEmployee),
    });

    if (response.ok) {
      const updatedEmployees = employees.map((employee) =>
        employee.id === id ? updatedEmployee : employee
      );

      dispatch(setEmployees(updatedEmployees)); // Update Redux state with new data

      Swal.fire({
        icon: "success",
        title: "Updated",
        text: `${updatedEmployee.firstName} ${updatedEmployee.lastName}'s data has been updated`,
        showConfirmButton: false,
        timer: 1500,
      });

      dispatch(setIsEditing(false)); // Close the edit modal
    } else {
      throw new Error("Failed to update employee");
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
      showConfirmButton: true,
    });
  }
};

  
  return (
    <div className="max-w-6xl mt-32 mx-auto p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleUpdate} className="space-y-4">
        <h1 className="text-2xl font-semibold mb-4">Update Employee</h1>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
         Age
        </label>
        <input
          id="age"
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
        <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
        Gender
        </label>
        <select
        id="gender"
        name="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="border rounded-md p-2 w-full"
        >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
        </select>

       <label htmlFor="role" className="block text-sm font-medium text-gray-600">
       Role
      </label>
      <input
        id="role"
        type="text"
        name="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border rounded-md p-2 w-full"
      />
      <label htmlFor="role" className="block text-sm font-medium text-gray-600">
      Years of Experience
      </label>
      <input
        id="experience"
        type="number"
        name="experience"
        value={yearsOfExperience}
        onChange={(e) => setYearsOfExperience(e.target.value)}
        className="border rounded-md p-2 w-full"
      />


        <label htmlFor="salary" className="block text-sm font-medium text-gray-600">
          Salary (₹)
        </label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        <label htmlFor="address" className="block text-sm font-medium text-gray-600">
        Address
        </label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
        <div className="mt-4 flex space-x-2">
          <input
            type="submit"
            value="Update"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 cursor-pointer"
          />
          <input
            type="button"
            value="Cancel"
            onClick={() => dispatch(setIsEditing(false))}
            className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 hover:bg-gray-400 cursor-pointer"
          />
        </div>
      </form>
    </div>
  )
}

export default Edit