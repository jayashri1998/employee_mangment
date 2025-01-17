
const List=({ employees, handleEdit, handleDelete })=> {
  const formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: null,
  });

  return (
    <div className="w-[95vw] my-8 overflow-x-auto">
    <table className="table-auto min-w-full">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-2 text-center">#</th>
            <th className="px-4 py-2 text-center">First Name</th>
            <th className="px-4 py-2 text-center">Last Name</th>
            <th className="px-4 py-2 text-center">Age</th>
            <th className="px-4 py-2 text-center">Gender</th>
            <th className="px-4 py-2 text-center">Role</th>
            <th className="px-4 py-2 text-center">Years of Experience
            </th>
            <th className="px-4 py-2 text-center">Salary</th>
            <th className="px-4 py-2 text-center">Address</th>
            <th className="px-4 py-2 col-span-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className="border px-4 py-2 text-center">{i + 1}</td>
                <td className="border px-4 py-2 text-center">{employee.firstName}</td>
                <td className="border px-4 py-2 text-center">{employee.lastName}</td>
                <td className="border px-4 py-2 text-center">{employee.age}</td>
                <td className="border px-4 py-2 text-center">{employee.gender}</td>
                <td className="border px-4 py-2 text-center">{employee.role}</td>
                <td className="border px-4 py-2 text-center">{employee.yearsOfExperience}</td>
                <td className="border px-4 py-2 text-center">{formatter.format(employee.salary)}</td>
                <td className="border px-4 py-2 text-center">{employee.address}</td>
                <td className="border px-4 py-2 text-center">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => handleEdit(employee.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-[#EF4644] hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2 transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border px-4 py-2 col-span-7 text-center">No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;