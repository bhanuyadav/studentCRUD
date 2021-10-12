import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    area:"",
    category:"",
    openingdate:"",
    closingdate:"",
  });

  const { name, area, category,closingdate,openingdate} = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Shop</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group  mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Shop Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <label>Pick Area</label>
            <select
              class="form-control"
              id="sel1"
              name="area"
              value={area}
              onChange={(e) => onInputChange(e)}
            >
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Nagpur</option>
              <option>Vadodara</option>
              <option>Banglore</option>
            </select>
          </div>
          
          <div className="form-group mb-3">
            <label>Pick Category</label>
            <select
              class="form-control"
              id="sel1"
              name="category"
              value={category}
              onChange={(e) => onInputChange(e)}
            >
              <option>Salon</option>
              <option>Chemist</option>
              <option>Restaurant</option>
              <option>Grocery</option>
              <option>Juice</option>
  
            
      
     
            </select>
          </div>

          <div className="form-group mb-3">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your Date Of Birth"
              name="openingdate"
              value={openingdate}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your Date Of Birth"
              name="closingdate"
              value={closingdate}
              onChange={(e) => onInputChange(e)}
            />
          </div>

        



          <button className="btn btn-warning btn-block">Update Shop</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
