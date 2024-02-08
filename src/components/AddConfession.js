"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

const AddConfession = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/confessions", inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({});
        alert(
          "Confession Submitted. Confession will be reviewed and will be posted."
        );
        router.push("/");
        router.refresh();
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <main className="p-10 h-screen backgroundColor">
        <h1 className="flex justify-center text-2xl md:text-3xl font-bold italic ">
          Create Confession
        </h1>
        <div className="flex justify-center">
          <form className="w-full max-w-sm p-6" onSubmit={handleSubmit}>
            {/* <div className="flex items-center border-b border-black py-2 bg-black rounded">
              <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Topic Of Confession"
                name="crushName"
                autoComplete="off"
                value={inputs.crushName || ""}
                onChange={handleChange}
              />
            </div> */}
            {/* <div className="flex items-center border-b border-black mt-4 bg-black rounded py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Leave for Anonymous"
                autoComplete="off"
                name="crushClass"
                value={inputs.crushClass || ""}
                onChange={handleChange}
              />
            </div> */}
            <div className="mt-4 flex items-center border-b border-black bg-black rounded">
              <textarea
                className="appearance-none text-white bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                rows={6}
                placeholder="Confession to make"
                name="crushConfession"
                value={inputs.crushConfession}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              className="bg-slate-500 text-white rounded mt-4 p-3 hover:bg-slate-400"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddConfession;
