import React from "react";
import Sidebar from "../components/Sidebar";

function AddMentee() {
  return (
    <div className="grid grid-cols-6 w-full min-h-screen">
      <Sidebar className="lg:col-span-1" />

      <div className="pr-[10%] pl-[10%] pt-5 col-span-6 lg:col-span-5">
        <p className="text-4xl pb-5">Immersive Dashboard</p>
        <p className="text-2xl pb-5">Add New Mentee</p>
        <div>
          <div className="form-control mx-3 my-3">
            <label className="input-group input-group-lg">
              <a className="mx-0">Name</a>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-lg w-2/3 mx-20"
              />
            </label>
          </div>
          <div className="form-control mx-3 my-3">
            <label className="input-group input-group-lg">
              <a className="mx-0">Adress</a>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-lg w-2/3 mx-20"
              />
            </label>
          </div>
          <div className="form-control mx-3 my-3">
            <label className="input-group input-group-lg">
              <a className="mx-0">Home Adress</a>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-lg w-2/3 mx-10"
              />
            </label>
          </div>
          <div className="form-control mx-3 my-3">
            <label className="input-group input-group-lg">
              <a className="mx-0">Email</a>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-lg w-2/3 mx-20"
              />
            </label>
          </div>
          <div>
            <div className="form-control mx-3 my-3">
              <label className="input-group input-group-lg">
                <a className="mx-0">Gender</a>
                <div className="form-control mx-20">
                  <label className="label cursor-pointer">
                    <span className="label-text">Male</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-red-500"
                      checked
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Female</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500"
                      checked
                    />
                  </label>
                </div>
              </label>
            </div>
          </div>
          <div className="form-control mx-3 my-3">
            <label className="input-group input-group-lg">
              <a className="mx-0">Telegram </a>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-lg w-2/3 mx-16"
              />
            </label>
          </div>
          <div className="form-control mx-3 my-3">
            <label className="input-group input-group-lg">
              <a className="mx-0">Phone</a>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-lg w-2/3 mx-20"
              />
            </label>
          </div>
          <div>
            Emergency Data
            <div className="form-control mx-3 my-3">
              <label className="input-group input-group-lg">
                <a className="mx-0">Name </a>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-lg w-2/3 mx-20"
                />
              </label>
            </div>
            <div className="form-control mx-3 my-3">
              <label className="input-group input-group-lg">
                <a className="mx-0">Phone</a>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-lg w-2/3 mx-20"
                />
              </label>
            </div>
            <div className="form-control mx-3 my-3">
              <label className="input-group input-group-lg">
                <a className="mx-0">Status</a>
                <select className="select w-full max-w-xs text-black mx-20">
                  <option disabled selected>
                    option
                  </option>
                  <option>Saudara Kandung</option>
                  <option>Orangtua</option>
                  <option>Kakek Nenek</option>
                  <option>Saudara dari Orang tua</option>
                </select>
              </label>
            </div>
          </div>
          <div>
            Education Data
            <div className="form-control mx-3 my-3">
              <label className="input-group input-group-lg">
                <a className="mx-0">Type</a>
                <div className="form-control mx-20">
                  <label className="label cursor-pointer">
                    <span className="label-text">Informatics</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-red-500"
                      checked
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Non-Informatics</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500"
                      checked
                    />
                  </label>
                </div>
              </label>
            </div>
            <div className="form-control mx-3 my-3">
              <label className="input-group input-group-lg">
                <a className="mx-0">Major</a>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-lg w-2/3 mx-20"
                />
              </label>
            </div>
            <div className="form-control mx-3 my-3">
              <label className="input-group input-group-lg">
                <a className="mx-0">Graduate</a>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-lg w-2/3 mx-14"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="mx-60">
          <button className="btn btn-active mx-10">Cancel</button>
          <button className="btn">Save</button>
        </div>
      </div>
    </div>
  );
}
export default AddMentee;
