import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

function AddUser() {
  const [createuser, setCreateuser] = useState({
    full_name: "",
    email: "",
    password: "",
    team_id: "",
    role: "user",
  });

  const postUser = async (e) => {
    e.preventDefault();
    const { full_name, email, password, team_id, role } = createuser;
    axios
      .post(
        `http://13.215.208.143:80/users`,
        {
          full_name,
          email,
          password,
          team_id: parseInt(team_id),
          role,
        },
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  console.log(createuser);
  return (
    <>
      <div className="grid grid-cols-6 w-full min-h-screen">
        <Sidebar className="lg:col-span-1" />

        <div className="pr-[10%] pl-[10%] pt-5 col-span-6 lg:col-span-5">
          <p className="text-4xl pb-5">Immersive Dashboard</p>
          <p className="text-2xl pb-5">Add User</p>
          <form class="w-4/5" onSubmit={(e) => postUser(e)}>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  full Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder="name"
                  onChange={(e) =>
                    setCreateuser({ ...createuser, full_name: e.target.value })
                  }
                  value={createuser.name}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  email
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder="email"
                  onChange={(e) =>
                    setCreateuser({ ...createuser, email: e.target.value })
                  }
                  value={createuser.email}
                />
              </div>
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  password
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder="password"
                  onChange={(e) =>
                    setCreateuser({ ...createuser, password: e.target.value })
                  }
                  value={createuser.password}
                />
              </div>
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  team id
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder="id team"
                  onChange={(e) =>
                    setCreateuser({ ...createuser, team_id: e.target.value })
                  }
                  value={createuser.team_id}
                />
              </div>
            </div>

            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button
                  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Add User
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUser;
