import React, { useState } from "react";
import image from "../../assets/Loginimage.png";
function AdminLogin({ setViewSidebar }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleClick = () => {
    console.log(email, password);
    email === "purabsingla83@gmail.com" &&
      password === "1234567890" &&
      setViewSidebar(true);
  };
  return (
    <>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
        <div className="flex shadow-md">
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[24rem] h-[32rem]">
            <div className="w-72">
              <h1 className="text-xl font-semibold">Welcome back</h1>
              <small className="text-gray-400">
                Welcome back Admin! Please enter your details
              </small>

              <form className="mt-4">
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-9">
                  <label className="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="*****"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <button
                    type="button"
                    className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                    onClick={HandleClick}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-wrap content-center justify-center rounded-r-md w-[24rem] h-[32rem]">
            <img
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
              src={image}
              alt="Something Broo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminLogin;
