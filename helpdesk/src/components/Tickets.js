import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../data/data";

function Tickets() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Contact, setContact] = useState("");
  const navigate = useNavigate();

  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const contactChange = (event) => {
    setContact(event.target.value);
  };

  const addticket = () => {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const formattedDate = formatter.format(date);
    console.log(formattedDate);

    console.log(formattedDate);
    if (Title.length >= 4 && Contact !== "") {
      let requestData = {
        title: Title,
        description: Description,
        contact: Contact,
        created: formattedDate,
        status: "Pending",
        lastupdate: "",
      };
      data.push(requestData);
      console.log(data);
      alert("สร้าง Ticket เรียบร้อย")
      navigate("/");
    } else {
      alert(
        "ต้องใส่ Title มากกว่า 4 ตัวอักษร และ ใส่ contact information มาด้วย"
      );
    }
  };
  return (
    <div className="mx-auto container h-screen justify-center content-center">
      <div className="flex justify-center">
        <div
          className="card bg-neutral text-neutral-content"
          style={{ width: "50%" }}
        >
          <div
            className="card-body items-center text-center"
            style={{ maxwidth: "700px" }}
          >
            <h2 className="card-title">Add Ticket</h2>
            <div className="my-5" style={{ width: "90%" }}>
              <label class="form-control w-full ">
                <div class="label">
                  <span class="label-text text-white">Title</span>
                </div>
                <input
                  type="text"
                  placeholder="Title"
                  value={Title}
                  class="input input-bordered w-full text-black"
                  onChange={titleChange}
                />
                <div class="label">
                  <span class="label-text text-white">Description</span>
                </div>
                <input
                  type="text"
                  value={Description}
                  placeholder="Description"
                  class="input input-bordered w-full text-black"
                  onChange={descriptionChange}
                />
                <div class="label">
                  <span class="label-text text-white">Contact Information</span>
                </div>
                <input
                  type="text"
                  value={Contact}
                  placeholder="Contact Information"
                  class="input input-bordered w-full text-black"
                  onChange={contactChange}
                />
              </label>
            </div>
            <div className="card-actions justify-end">
              <button onClick={addticket} className="btn btn-primary">
                Create
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

export default Tickets;
