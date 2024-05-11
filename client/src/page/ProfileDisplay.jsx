import React, { useEffect, useState } from "react";React;
import axios from "axios";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import Navbarl from "../component/Navbarl";

const ProfileDisplay = () => {
  const [SupllierProfile, setSupllierProfile] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/server/supplier/getallProfile")
      .then((result) => {
        setSupllierProfile(result.data ? Object.values(result.data.data) : []);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/server/supplier/Profiledelete/${id}`)
      .then(() => {
        alert('Supplier Profile details deleted successfully!');
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <div>
        <Navbarl />
        <div className='flex justify-between mt-4 px-14'>
        </div>
      </div>
      <div className='flex flex-row'>
          <div className="flex w-[300px] h-[1000px] bg-lime-900 ">
          <div className="p-5">
          <button className="w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3">
          <Link to="/supplierAccount">Profile</Link>
          </button>
          <button className="w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3"><Link to="/productdetails">Product Details</Link></button>
          
          <button className="w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3"><Link to="/createproduct">Product History</Link></button>

          <button className="w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3"><Link to="/PaymentDisplay">Payment Details</Link></button>
            </div>
        </div>

        <div className="w-[20%] h-[650px] flex-grow border">
          <div className="w-1/2 p-3 ml-[300px]">
            <div className="bg-gray-200 rounded-lg p-4">
              <h2 className="text-2xl font-bold mb-4 font-serif text-center">
                Profile
              </h2>

              <div className="mb-2 font-serif">
                <label htmlFor="Id">ID</label>
                <input
                  type="text"
                  placeholder="***"
                  className="w-full p-2 border rounded"
                  readOnly
                />
              </div>
              <div className="mb-2 font-serif">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  placeholder="Harish"
                  className="w-full p-2 border rounded"
                  readOnly
                />
              </div>
              <div className="mb-2 font-serif">
                <label htmlFor="Email_address">Email address</label>
                <input
                  type="text"
                  placeholder="harish@gmail.com"
                  className="w-full p-2 border rounded"
                  readOnly
                />
              </div>
              <div className="mb-2 font-serif">
                <label htmlFor="Contact_No">Contact Number</label>
                <input
                  type="text"
                  placeholder="0774355655"
                  className="w-full p-2 border rounded"
                  readOnly
                />
              </div>
              <div className="mb-2 font-serif">
                <label htmlFor="NIC_number">NIC number</label>
                <input
                  type="text"
                  placeholder="200202802433"
                  className="w-full p-2 border rounded"
                  readOnly
                />
              </div>
              <div className='mb-2 font-serif'>
              </div>
              <div className='flex flex-row justify-center font-serif text-center'>
                <Link to='/profile' className='bg-green-950  rounded-md p-2 m-5 cursor-pointer hover:scale-[1.1] active:bg-slate-500
    w-[150px] h-8 flex items-center justify-center font-serif ml-4 text-white'>Create New Profile</Link>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded p-3 ml-6 pb-20">
              <table className="w-full border mt-5">
                <thead>
                  <tr className="bg-gray-300 font-serif">
                    <th className="p-3 text-center">ID</th>
                    <th className="p-3 text-center">Name</th>
                    <th className="p-3 text-center">Email address</th>
                    <th className="p-3 text-center">Contact Number</th>
                    <th className="p-3 text-center">NIC number</th>
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {SupllierProfile.map((profile, index) => (
                    <tr key={index}>
                      <td className="text-center">{'*'.repeat(profile.Id.toString().length)}</td>
                      <td className="text-center">{profile.Name}</td>
                      <td className="text-center">{profile.Email_address}</td>
                      <td className="text-center">{profile.Contact_No}</td>
                      <td className="text-center">{profile.NIC_number}</td>
                      <td className="flex text-center ">
                        <Link to={`/UpdateProfileDetails/${profile._id}`} className="bg-green-950 rounded-md p-2 m-5 cursor-pointer hover:scale-[1.1] active:bg-slate-500
    w-[150px] h-8 flex items-center justify-center font-serif ml-4 text-white ">Update</Link>
                        <button className="bg-red-500  rounded-md p-2 m-5 cursor-pointer hover:scale-[1.1] active:bg-slate-500
    w-[150px] h-8 flex items-center justify-center font-serif ml-4 btn-red text-white " onClick={() => handleDelete(profile._id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileDisplay;
