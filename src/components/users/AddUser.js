import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    area:"",
    category:"",
    openingdate:"",
    closingdate:"",
  });

  const { name, area, category,openingdate,closingdate } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Shop</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group mb-3">
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
              <option>Banglore</option>
              <option>Vadodara</option>
  
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


         

         
          <button className="btn btn-primary btn-block">Add Shop</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
