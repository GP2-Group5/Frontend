import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

function AddClass() {
  const [createclass, setCreateclass] = useState({
    name: "",
    user_id: ``,
    pic: "",
    start_date: "",
    graduated_at: "",
  });

  const postClass = async (e) => {
    e.preventDefault();
    const { name, user_id, start_date, graduated_at } = createclass;
    axios
      .post(
        `http://13.215.208.143:80/class`,
        {
          name,
          user_id: parseInt(user_id),
          start_date,
          graduated_at,
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

  console.log(createclass);
  return (
    <>
      <div className="grid grid-cols-6 w-full min-h-screen">
        <Sidebar className="lg:col-span-1" />

        <div className="pr-[10%] pl-[10%] pt-5 col-span-6 lg:col-span-5">
          <p className="text-4xl pb-5">Immersive Dashboard</p>
          <p className="text-2xl pb-5">Add Class List</p>
          <form class="w-4/5" onSubmit={(e) => postClass(e)}>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder="name"
                  onChange={(e) =>
                    setCreateclass({ ...createclass, pic: e.target.value })
                  }
                  value={createclass.pic}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Class Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder="name"
                  onChange={(e) =>
                    setCreateclass({ ...createclass, name: e.target.value })
                  }
                  value={createclass.name}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  id
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder=""
                  onChange={(e) =>
                    setCreateclass({ ...createclass, user_id: e.target.value })
                  }
                  value={createclass.user_id}
                />
              </div>
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Start Date
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder=""
                  onChange={(e) =>
                    setCreateclass({
                      ...createclass,
                      start_date: e.target.value,
                    })
                  }
                  value={createclass.start_date}
                />
              </div>
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Graduated date
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder=""
                  onChange={(e) =>
                    setCreateclass({
                      ...createclass,
                      graduated_at: e.target.value,
                    })
                  }
                  value={createclass.graduated_at}
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
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddClass;
