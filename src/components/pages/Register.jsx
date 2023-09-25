import { useState } from "react";
import api from "../../api/api";
import HeaderLogin from "./HeaderLogin/";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async e => {
    e.preventDefault();
    const response = await api.post("/register", {
      username,
      password,
    });
    console.log(response);
    if (response.status === 200) {
      window.location.href = "/";
    }
    console.log(response);
  };

  return (
    <>
      <HeaderLogin
        heading="Singup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <div className="container mx-auto py-8">
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md ">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              onChange={submitForm}
              className="w-full px-6 py-2 border border-gray-700 rounded-md focus:outline-none"
              type="text"
              id="username"
              placeholder="Enter your username"
              autoComplete="username"
              value={username}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              onChange={submitForm}
              className="w-full px-6 py-2 border border-gray-700 rounded-md focus:outline-none"
              type="password"
              id="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={password}
            />
          </div>

          <button
            onSubmit={submitForm}
            className="bg-gray-500 text-white  w-full py-1 font-bold cursor-pointer  hover:bg-black hover:text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
