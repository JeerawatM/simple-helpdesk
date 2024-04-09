import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/data";
function Mainpage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [Ticket, setTicket] = useState(data);

  // sratch
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(Ticket);
  const handleSearch = async () => {
    if (!searchTerm) {
      setSearchResults(Ticket);
      console.log(searchResults);
      return;
    }
    try {
      const results = Ticket.filter((item) =>
        item.status.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  // option in sort
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "status") {
      Ticket.sort((a, b) => a.status.localeCompare(b.status));
    }
    if (event.target.value === "latest update") {
      Ticket.sort((a, b) => a.lastupdate.localeCompare(b.lastupdate));
    }
  };

  // loop all ticket
  const allticket = searchResults.map((val, index) => {
    return (
      <tr>
        <th>{index + 1}</th>
        {val.status !== "Rejected" && (
          <Link to="/update" state={{ data: val, index: index }}>
            <td class="text-lg font-semibold underline">{val.title}</td>
          </Link>
        )}
        {val.status === "Rejected" && <td>{val.title}</td>}
        <td>{val.description}</td>
        <td>{val.contact}</td>
        <td>{val.created}</td>
        <td>{val.lastupdate}</td>
        {val.status === "Pending" && (
          <td class="text-lg font-semibold">{val.status}</td>
        )}
        {val.status === "Accept" && (
          <td class="text-blue-700 text-lg font-semibold">{val.status}</td>
        )}
        {val.status === "Resolved" && (
          <td class="text-green-600 text-lg font-semibold">{val.status}</td>
        )}
        {val.status === "Rejected" && (
          <td class="text-lg text-zinc-300 font-semibold">{val.status}</td>
        )}
      </tr>
    );
  });
  return (
    <div>
      <div className="mx-20 h-screen">
        <div className="my-10 flex">
          <div className=" content-center">
            <select
              onChange={handleSelectChange}
              className="dropdown btn text-lg"
            >
              <option value="" selected>
                sort
              </option>
              <option value="status">status</option>
              <option value="latest update">latest update</option>
            </select>
          </div>
          <div className="ml-10 content-center">
            <input
              className="input input-bordered input-sm join-item"
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              placeholder="Search by Task Name"
            />
            <div className="indicator">
              <button
                className="btn join-item btn-sm btn-info border-white"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          <div className="ml-10 content-center">
            <Link to="/addticket">
              <button className="btn btn-outline btn-accent">
                Create Ticket
              </button>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto rounded-xl">
          <table className="table table-lg text-center">
            <thead className="font-medium bg-blue-900 text-white">
              <tr className="text-xl">
                <th></th>
                <th className="font-medium">Title (update status)</th>
                <th>Description</th>
                <th>Contact</th>
                <th>created</th>
                <th>Last update</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>{allticket}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
