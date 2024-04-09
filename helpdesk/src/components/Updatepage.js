import React, { useState } from "react";
import { useLocation, Navigate, useNavigate, Link } from "react-router-dom";
import data from "../data/data";
function Updatepage() {
  const [selectedOption, setSelectedOption] = useState("Accept");
  let { state } = useLocation();
  const navigate = useNavigate();
  const result = state.data;
  const number = state.index;

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const updateticket = () => {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const lastest = formatter.format(date);

    let requestData = {
      title: result.title,
      description: result.description,
      contact: result.contact,
      created: result.created,
      status: selectedOption,
      lastupdate: lastest,
    };
    data.push(requestData);
    data.splice(number, 1);
    console.log(data);
    alert("Update Ticket Status เรียบร้อย");
    navigate("/");
  };
  return (
    <div className="mx-auto container h-screen justify-center content-center">
      <div className="flex justify-center">
        <div
          className="card bg-neutral text-neutral-content"
          style={{ width: "50%" }}
        >
          <div className="card-body items-center" style={{ maxwidth: "700px" }}>
            <h2 className="card-title">Update Ticket</h2>
            <div className="my-5" style={{ width: "90%" }}>
              <label class="form-control w-full ">
                <div class="label">
                  <span class="label-text text-white">Title</span>
                </div>
                <div class="bg-white p-3 rounded-lg">
                  <p class="text-black text-lg">{result.title}</p>
                </div>
                <div class="label">
                  <span class="label-text text-white">Description</span>
                </div>
                <textarea
                  rows={5}
                  cols={"100%"}
                  class="text-black text-lg rounded-lg p-3"
                  readOnly
                >
                  {result.description}
                </textarea>
                <div class="label">
                  <span class="label-text text-white">Contact Information</span>
                </div>
                <div class="bg-white p-3 rounded-lg">
                  <p class="text-black text-lg">{result.contact}</p>
                </div>
                <div class="label">
                  <span class="label-text text-white">State</span>
                </div>
                <select
                  onChange={handleSelectChange}
                  className="dropdown btn text-lg"
                >
                  <option
                    value="Accept"
                    class="text-blue-600 text-lg font-semibold"
                    selected
                  >
                    Accept
                  </option>
                  <option
                    value="Resolved"
                    class="text-green-600 text-lg font-semibold"
                  >
                    Resolved
                  </option>
                  <option
                    value="Rejected"
                    class="text-zinc-500 text-lg font-semibold"
                  >
                    Rejected
                  </option>
                </select>
              </label>
            </div>
            <div className="card-actions justify-end">
              <button onClick={updateticket} className="btn btn-primary">
                Accept
              </button>
              <Link to="/">
                <button className="btn btn-ghost">Deny</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updatepage;
