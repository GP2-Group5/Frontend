import React from "react";

import Sidebar from "../components/Sidebar";
//https://genshin.honeyhunterworld.com/img/yae_058_icon.webp
function Detail() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="grid grid-cols-6 w-full min-h-screen">
      <Sidebar className="lg:col-span-1" />

      <div className="pr-[10%] pl-[10%] pt-5 col-span-6 lg:col-span-5">
        <p className="text-4xl pb-5">Immersive Dashboard</p>
        <p className="text-2xl pb-5">Mentee Log</p>
        <div className="grid grid-cols-8 pb-5">
          <div className="col-span-8 md:col-span-2 flex items-center justify-center mb-5">
            <img
              src="https://genshin.honeyhunterworld.com/img/yae_058_icon.webp"
              className="border-dotted border-2 rounded-lg"
            />
          </div>

          <div className="col-span-8 md:col-span-6 ml-[5%] mr-[5%] grid grid-cols-2 md:grid-cols-3">
            <div className="pb-2 md:pb-0">
              <p className="text-2xl xl:text-3xl pb-2 font-semibold flex text-center items-center justify-center">
                Name
              </p>
              <p className="text-lg lg:text-xl flex text-center items-center justify-center">
                Bagas
              </p>
            </div>
            <div className="pb-2 md:pb-0">
              <p className="text-2xl xl:text-3xl pb-2 font-semibold flex text-center items-center justify-center">
                Role
              </p>
              <p className="text-lg lg:text-xl flex text-center items-center justify-center">
                Mentor
              </p>
            </div>
            <div className="pb-2 md:pb-0">
              <p className="text-2xl xl:text-3xl pb-2 font-semibold flex text-center items-center justify-center">
                Class
              </p>
              <p className="text-lg lg:text-xl flex text-center items-center justify-center"></p>
            </div>
            <div className="pb-2 md:pb-0">
              <p className="text-2xl xl:text-3xl pb-2 font-semibold flex text-center items-center justify-center">
                Hobi
              </p>
              <p className="text-lg lg:text-xl flex text-center items-center justify-center">
                Kasih Mandat
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pb-5 flex items-center justify-center">
          {/*Awal Modal*/}
          <>
            <button
              className="bg-primary text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Add New Log
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold text-black">
                          New Log
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
                          <p>Status</p>
                          <select className="select w-full max-w-xs">
                            <option disabled selected>
                              Active
                            </option>
                            <option>Active</option>
                            <option></option>
                          </select>
                          <p>Feedback</p>
                          <textarea
                            className="textarea"
                            placeholder="Feddback"
                          ></textarea>
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
        <div className="flex flex-col gap-5">
          <p className="rounded border-2 min-h-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="rounded border-2 min-h-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
