import React from "react";

import Sidebar from "../components/Sidebar";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function MenteeList() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="grid grid-cols-6 w-full min-h-screen">
      <Sidebar className="lg:col-span-1" />

      <div className="pr-[10%] pl-[10%] pt-5 col-span-6 lg:col-span-5">
        <p className="text-4xl pb-5">Immersive Dashboard</p>
        <p className="text-2xl pb-5">Mentee List</p>

        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-info">Search</button>
          {/*Awal Modal*/}
          <>
            <button
              className="bg-primary text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Add New
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold text-black">
                          New Mentee
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>

                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          <p>Name</p>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="input w-full max-w-xs"
                          />

                          <p>Status</p>
                          <select className="select w-full max-w-xs">
                            <option disabled selected>
                              Option
                            </option>
                            <option>Placement</option>
                            <option>Active</option>
                            <option>Eliminate</option>
                          </select>
                          <p>Class</p>
                          <select className="select w-full max-w-xs">
                            <option disabled selected>
                              Option
                            </option>
                            <option>Front </option>
                            <option>Back</option>
                            <option>QA</option>
                          </select>
                          <p>Category</p>
                          <select className="select w-full max-w-xs">
                            <option disabled selected>
                              Option
                            </option>
                            <option>Informatics </option>
                            <option>Non-Informatics</option>
                          </select>
                          <p>Gender</p>
                          <select className="select w-full max-w-xs">
                            <option disabled selected>
                              Option
                            </option>
                            <option>Male </option>
                            <option>Female</option>
                          </select>
                        </p>
                      </div>

                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </>
          {/*Akhir Modal*/}
        </div>
        <div>
          <button className="btn btn-info">Export</button>
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text text-white">Class</span>
            </label>
            <select className="select select-bordered text-black">
              <option>
                <div>All Class</div>
              </option>
              <option>
                <div>FE</div>
              </option>
              <option>
                <div>BE</div>
              </option>
              <option>
                <div>QA</div>
              </option>
            </select>
          </div>
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text text-white">All Status</span>
            </label>
            <select className="select select-bordered text-black">
              <option>
                <div>Placement</div>
              </option>
              <option>
                <div>Active</div>
              </option>
              <option>
                <div>Eliminate</div>
              </option>
            </select>
          </div>
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text text-white">All Category</span>
            </label>
            <select className="select select-bordered text-black">
              <option>
                <div>Informatics</div>
              </option>
              <option>
                <div>Non-Informatics</div>
              </option>
            </select>
          </div>
          <button className="btn btn-info">Filter</button>
        </div>
        <div className="grid grid-cols-3 gap-6 pb-5"></div>
        <div className="overflow-x-auto bg-none">
          <table className="table w-full bg-none text-black">
            <thead>
              <tr>
                <th className="w-[10%]">ID</th>
                <th className="w-[20%]">Name</th>
                <th className="w-[10%]">Class</th>
                <th className="w-[10%]">Status</th>
                <th className="w-[10%]">Category</th>
                <th className="w-[10%]">Gender</th>
                <th className="w-[10%]">Detail</th>
                <th className="w-[10%]"></th>
                <th className="w-[10%]"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Wendy</td>
                <td>Mentee</td>
                <td>FE10</td>
                <td>FE10</td>
                <td>FE10</td>
                <td>FE10</td>
                <td className="items-center justify-center">
                  <AiFillEdit />
                </td>
                <td>
                  <AiFillDelete className="items-center justify-center" />
                </td>
              </tr>

              <tr>
                <th>1</th>
                <td>Wendy</td>
                <td>Mentee</td>
                <td>FE10</td>
                <td>FE10</td>
                <td>FE10</td>
                <td>FE10</td>
                <td className="items-center justify-center">
                  <AiFillEdit />
                </td>
                <td>
                  <AiFillDelete />
                </td>
              </tr>

              <tr>
                <th>1</th>
                <td>Wendy</td>
                <td>Mentee</td>
                <td>FE10</td>
                <td>FE10</td>
                <td>FE10</td>
                <td>FE10</td>

                <td className="items-center justify-center">
                  <AiFillEdit />
                </td>
                <td>
                  <AiFillDelete />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="btn-group">
            <button className="btn">prev</button>
            <button className="btn">next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenteeList;
