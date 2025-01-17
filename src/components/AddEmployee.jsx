import { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
const Add = ({ setIsAdding, employees, setEmployees }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [age, setAge] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [address, setAddress] = useState('');
  const [salary, setSalary] = useState('');
  const textInput = useRef(null);

  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, []);

  const dispatch = useDispatch();

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !age || !salary || !gender || !role) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required.",
        showConfirmButton: true,
        timer: 1500,
      });
    }

    const newEmployee = {
      id: Date.now(),
      firstName,
      lastName,
      age,
      role,
      yearsOfExperience,
      gender,
      address,
      salary: Number(salary),
    };

    try {
      const response = await fetch("http://localhost:5000/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });

      if (response.ok) {
      dispatch(setEmployees([...employees, newEmployee]));
      localStorage.setItem("employees", JSON.stringify([...employees, newEmployee]));
        Swal.fire({
          icon: "success",
          title: "Added",
          text: `${firstName} ${lastName}'s data has been added`,
          showConfirmButton: false,
          timer: 1500,
        });

        dispatch(setIsAdding(false));
      } else {
        throw new Error("Failed to add employee");
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
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleAdd} className="space-y-4">
        <h1 className="text-2xl font-semibold mb-4">Add Employee</h1>
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
            value="Add"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 cursor-pointer"
          />
          <input
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
            className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 hover:bg-gray-400 cursor-pointer"
          />
        </div>
      </form>
    </div>

  )
}

export default Add;