import { useState } from "react";
import HeaderLogin from "./HeaderLogin/";
import { Link } from "react-router-dom";
import { registerUser } from "../../api/api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async e => {
    e.preventDefault();
    const data = await registerUser(username, password); //sendint the post request
    console.log(data);
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
        <form
          className="w-full max-w-sm mx-auto bg-white p-8 rounded-md "
          onSubmit={submitForm}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              onChange={e => setUsername(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
              className="w-full px-6 py-2 border border-gray-700 rounded-md focus:outline-none"
              type="password"
              id="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={password}
            />
          </div>

          <button
            type="submit"
            className="bg-gray-500 text-white  w-full py-1 font-bold cursor-pointer  hover:bg-black hover:text-white"
          >
            Sign Up <Link to="/login">Login</Link>
          </button>
        </form>
      </div>
    </>
  );
}
