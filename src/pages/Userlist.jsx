import React from "react";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
//import Sidebar from "../components/Sidebar";

//import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Userlist() {
  const [users, setUsers] = useState("");
  const navigate = useNavigate();

  const getUsers = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };
    axios
      .get(`http://13.215.208.143:80/users`, config)
      .then((response) => {
        console.log(response.data.data);
        setUsers(response.data.data);
      })
      .catch((error) => console.log(error));
  };
  const deleteUser = (users_id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };
    axios
      .delete(`http://13.215.208.143:80/users/${users_id}`, config)
      .then((response) => {
        console.log(response);
        // getMentee()
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUsers();
  }, [users]);

  // const deleteUser = async (userId) => {
  //   await axios.delete(`http://13.215.208.143:80/users/${userId}`);
  //   getUsers();
  // };
  return (
    <div className="grid grid-cols-6 w-full min-h-screen">
      <Sidebar className="lg:col-span-1" />

      <div className="pr-[10%] pl-[10%] pt-5 col-span-6 lg:col-span-5">
        <p className="text-4xl pb-5">Immersive Dashboard</p>
        <p className="text-2xl pb-5">User List</p>
        <div className="grid grid-cols-3 gap-6 pb-5">
          <select class="flex w-full bg-[#242424] text-white rounded h-12 border"></select>
          <button>Search</button>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/adduser`)}
          >
            Add Now
          </button>
        </div>
        <div></div>
        <div className="overflow-x-auto bg-none ">
          <table className="table w-full bg-none bg-[#242424] text-black">
            <thead className="text-black bg-[#242424]">
              <tr className="text-black">
                <th className="w-[10%]">No</th>
                <th className="w-[40%]">Full Name</th>
                <th className="w-[15%]">Email</th>
                <th className="w-[15%]">Team</th>
                <th className="w-[15%]">Role</th>
                <th className="w-[10%]">Status</th>
                <th className="w-[10%]"></th>
                <th className="w-[10%]"></th>
              </tr>
            </thead>
            <tbody>
              {users
                ? users.map((item, index) => {
                    return (
                      <tr className="hover" key={item.id}>
                        <td className="w-[10%]">{index + 1}</td>
                        <td className="w-[40%]">{item.full_name}</td>
                        <td className="w-[15%]">{item.email}</td>
                        <td className="w-[15%]">{item.team}</td>
                        <td className="w-[15%]">{item.role}</td>
                        <td className="w-[15%]">{item.status}</td>
                        <td className="items-center justify-center w-[10%]">
                          <AiFillEdit />
                        </td>
                        <td
                          className="items-center justify-center w-[10%]"
                          onClick={() => deleteUser(item.id)}
                        >
                          <AiFillDelete />
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Userlist;
