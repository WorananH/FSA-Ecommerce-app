import { Link } from "react-router-dom";

export default function Header({ heading, paragraph, linkName, linkUrl }) {
  return (
    <div className="mb-50">
      <div className="flex justify-center">
        <img
          className=" rounded-md mt-7"
          alt="image-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2XdJWdTIDWUPukTJ-2XSqSZUwCEE1WIM67PR_2WN63S1aapy-oWHPOhGxgUwJ-6QAoo&usqp=CAU"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="text-center text-sm text-gray-600 mt-5">
        {paragraph} {""}
        <Link
          to={linkUrl}
          className="font-medium text-blue-700 hover:text-blue-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
