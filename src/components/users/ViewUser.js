import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    dob: "",
    gender: "",
    course: "",
    email: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Student Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">dob: {user.dob}</li>
        <li className="list-group-item">gender: {user.gender}</li>
        <li className="list-group-item">course: {user.course}</li>
        <li className="list-group-item">Email: {user.email}</li>
      </ul>
    </div>
  );
};

export default ViewUser;