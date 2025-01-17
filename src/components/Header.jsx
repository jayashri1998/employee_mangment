import React, { useState } from "react";
import { logout } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = ({  setFilteredEmployees, setIsAdding }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const { employees } = useSelector((state) => state.employee);
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase().trim();
    setSearchQuery(query);
    if (!Array.isArray(employees)) {
      console.error("Employees is not an array:", employees);
      return;
    }

    const filtered = employees.filter((employee) => {
      return (
        employee.firstName?.toLowerCase().includes(query) ||
        employee.lastName?.toLowerCase().includes(query) ||
        employee.role?.toLowerCase().includes(query)
      );
    });
    dispatch(setFilteredEmployees(filtered));
  };
  return (
    <div className="w-[99vw]">
      <div className="bg-gray-100 py-3 w-full">
        <div className="container mx-auto flex-wrap lg:flex items-center justify-between">
          <h1 className="text-lg lg:text-4xl font-bold text-indigo-700">
            Employee Management System
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search name or role"
                value={searchQuery}
                onChange={handleSearch}
                className="px-4 py-2 border text-sm w-32 lg:w-full border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
            className="bg-[#3B82F6] hover:bg-indigo-800 text-white rounded-full px-4 py-2 focus:outline-none"
            onClick={() => dispatch(setIsAdding(true))}
          >
            Add Employee
          </button>

            <button
              className="bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-2 focus:outline-none"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
