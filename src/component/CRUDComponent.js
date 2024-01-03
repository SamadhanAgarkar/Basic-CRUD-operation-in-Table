import React, { useState } from "react";

const CRUDComponent = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        email: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        email: "",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ name: tempData.name, email: tempData.email });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <>
      {/* <div textAlign="center">
        <h2>CRUD operations</h2>
      </div> */}
      <div class="grid grid-cols-2 mt-5 p-4">
        <div className="p-20">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                for="Name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <input
                name="name"
                value={inputs.name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
            <br></br>
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <input
                name="email"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
                value={inputs.email}
                onChange={handleChange}
              />
            </div>
            <br />
            <button
              type="submit"
              className="bg-[#014d64] text-white p-1 rounded-md w-full"
            >
              {editClick ? "update" : "Add"}
            </button>
          </form>
        </div>
        <div className="p-20">
          <table class="w-full table-auto border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="border border-slate-300">Name</th>
                <th className="border border-slate-300">Email</th>
                <th className="border border-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {tableData.map((item, i) => (
                <tr>
                  <td className="border border-slate-300">{item.name}</td>
                  <td className="border border-slate-300">{item.email}</td>
                  <td className="border border-slate-300">
                    <button
                      onClick={() => handleEdit(i)}
                      className="bg-[#014d64] text-white p-0 rounded-md w-20"
                    >
                      Edit
                    </button>{" "}
                    <button
                      onClick={() => handleDelete(i)}
                      className="bg-[#014d64] text-white p-0 rounded-md w-20"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CRUDComponent;
