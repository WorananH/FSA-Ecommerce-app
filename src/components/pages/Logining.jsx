import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { loginUser } from "../../api/api";
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

    if (!user.email || !user.password) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const token = await loginUser(user.username, user.password);
      login(token);
      navigate("/");
    } catch (err) {
      console.log("login failed", err);
    }
  };

  return (
    <div className="  mt-20 container mx-auto py-10 ">
      <div className="w-[500px] ">
        <form className="flex flex-col gap-2 ">
          <h1 className="text-[2.5rem]">Login to your account</h1>
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              className="border border-gray-500 pl-2"
              type="text"
              id="username"
              placeholder="Enter your username"
              autoComplete="username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              className="border border-gray-500 pl-2"
              type="password"
              id="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white  w-full py-1 font-bold"
          >
            Login
          </button>
          <div>
            <p>Don't have an account? </p>

            <Link
              className="text-right text-[1rem] text-blue-500 hover:text-blue-600 text-bold"
              to="/register"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
