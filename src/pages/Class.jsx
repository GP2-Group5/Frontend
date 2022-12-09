import React from "react";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Class() {
  const [kelas, setClass] = useState("");
  const navigate = useNavigate();

  const getClass = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };
    axios
      .get(`http://13.215.208.143:80/class`, config)
      .then((response) => {
        console.log(response.data.data);
        setClass(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteClass = (class_id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };
    axios
      .delete(`http://13.215.208.143:80/class/${class_id}`, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getClass();
  }, []);

  return (
    <div className="grid grid-cols-6 w-full min-h-screen">
      <Sidebar className="lg:col-span-1" />

      <div className="pr-[10%] pl-[10%] pt-5 col-span-6 lg:col-span-5">
        <p className="text-4xl pb-5">Immersive Dashboard</p>
        <p className="text-2xl pb-5">Class List</p>
        <div className="grid grid-cols-3 gap-6 pb-5">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-black"
          />
          <button className="btn btn-blue">Search</button>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/addclass`)}
          >
            Add Now
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 pb-5">
          <table className="table w-full bg-none text-black">
            <thead>
              <tr>
                <th className="w-[10%]">No</th>
                {/* <th className="w-[40%]">Name</th> */}
                <th className="w-[15%]">Class</th>
                <th className="w-[15%]">Start Date</th>
                <th className="w-[15%]">Graduated Date</th>

                <th className="w-[10%]"></th>
                <th className="w-[10%]"></th>
              </tr>
            </thead>
            <tbody>
              {kelas
                ? kelas.map((item, index) => {
                    return (
                      <tr className="hover" key={item.id}>
                        <td className="w-[10%]">{index + 1}</td>
                        {/* <td className="w-[40%]">{item.pic}</td> */}
                        <td className="w-[15%]">{item.name}</td>
                        <td className="w-[15%]">{item.start_date}</td>
                        <td className="w-[15%]">{item.graduated_at}</td>
                        <td className="items-center justify-center w-[10%]">
                          <AiFillEdit />
                        </td>
                        <td
                          className="items-center justify-center w-[10%]"
                          onClick={() => deleteClass(item.id)}
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
export default Class;
