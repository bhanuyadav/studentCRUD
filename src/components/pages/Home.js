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
              <th scope="col">Name</th>
              <th scope="col">Date Of Birth</th>
              <th scope="col">Age-Years</th>
              <th scope="col">Gender</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.dob}</td>
                {user.age <= 10 ? (
                  <td style={{color:'red'}}>{user.age}</td>
                ) : (
                  <td>{user.age}</td>
                )}
                
                <td>{user.gender}</td>
                <td>
                  <Link className="btn btn-primary  " STYLE="margin:0px 5px 0px 0px" to={`/users/${user.id}`}>
                    Details
                  </Link>
                  <Link
                    className="btn btn-outline-primary  " STYLE="margin:0px 5px 0px 0px"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>

                  <Link
                    className="btn btn-danger"
                    onClick={() =>
                      window.confirm(
                        "Are you sure you wish to delete this Student?"
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
