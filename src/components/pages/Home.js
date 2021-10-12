import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Shop Name</th>
              <th scope="col">Area</th>
              {/* <th scope="col">Age-Years</th> */}
              <th scope="col">Category</th>
              <th scope="col">opening</th>
              <th scope="col">closing</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.area}</td>
                {/* {user.age <= 10 ? (
                  <td style={{ color: "red" }}>{user.age}</td>
                ) : (
                  <td>{user.age}</td>
                )}
                 */}
                <td>{user.category}</td>
                <td>{user.openingdate}</td>
                <td>{user.closingdate}</td>
                {/* <td>{user.status}</td> */}
                {/* {let todaydate= new Date().toISOString().slice(0, 10);} */}
                

                {new Date().toISOString().slice(0, 10) >= user.openingdate && new Date().toISOString().slice(0, 10) <= user.closingdate?(<td>Open</td>):(<td>close</td>)}
                <td>
                  <Link
                    className="btn btn-primary  "
                    STYLE="margin:0px 5px 0px 0px"
                    to={`/users/${user.id}`}
                  >
                    Details
                  </Link>
                  <Link
                    className="btn btn-outline-primary  "
                    STYLE="margin:0px 5px 0px 0px"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>

                  <Link
                    className="btn btn-danger"
                    onClick={() =>
                      window.confirm(
                        "Are you sure you wish to delete this Shop?"
                      ) && deleteUser(user.id)
                    }
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
