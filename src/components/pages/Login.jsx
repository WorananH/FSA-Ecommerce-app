import { useState, useContext } from "react";
import HeaderLogin from "./HeaderLogin";
//import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { loginUser } from "../../api/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = e => {
    setUser(prev => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // login(user);

    if (!user.username || !user.password) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const token = await loginUser(user.email, user.password);
      login(token);
      navigate("/");
    } catch (err) {
      console.log("login failed", err);
    }
  };

  return (
    <>
      <HeaderLogin
        heading="Login to your account"
        paragraph="Don't have an account yet?"
        linkName="Register"
        linkUrl="/signup"
      />

      <form
        className="w-full max-w-sm mx-auto bg-white p-8 rounded-md "
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            onChange={handleChange}
            className="w-full px-6 py-2 border border-gray-700 rounded-md focus:outline-none"
            type="text"
            id="username"
            placeholder="Enter your username"
            autoComplete="username"
            value={user.username}
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
            onChange={handleChange}
            className="w-full px-6 py-2 border border-gray-700 rounded-md focus:outline-none"
            type="password"
            id="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            value={user.password}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-black border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-blue-800 hover:text-blue-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <br />
        <button
          type="submit"
          className="bg-gray-500 text-white  w-full py-1 font-bold cursor-pointer  hover:bg-black hover:text-white"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
