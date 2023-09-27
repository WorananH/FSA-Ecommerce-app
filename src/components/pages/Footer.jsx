import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-300 justify-center py-12 mt-10">
        <h6 className="font-size-9">Coming soon on</h6>
        <div className="flex flex-row space justify-center justify-space gap-3 text-3xl">
          <AiFillFacebook className="bg-slate-200 box-content px-2 py-2 rounded-lg shadow-sm shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 " />
          <AiFillTwitterCircle className="bg-slate-200 box-content px-2 py-2 rounded-lg shadow-sm shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 " />
          <AiOutlineWhatsApp className="bg-slate-200 box-content px-2 py-2 rounded-lg shadow-sm shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 " />
          <AiFillYoutube className="bg-slate-200 box-content px-2 py-2 rounded-lg shadow-sm shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 " />
          <AiFillGoogleCircle className="bg-slate-200 box-content px-2 py-2 rounded-lg shadow-sm shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 " />
        </div>
        <hr></hr>
        <div className="flex flex-row space justify-center justify-space gap-20 mt-6">
          <div className="font-serif text-blue-800">
            <p>
              @{new Date().getFullYear()} © Meya's Shop. All rights reserved.
            </p>
          </div>
          <div className="flex flex-row space justify-center justify-space gap-3 text-blue-800 text-underline font-serif ">
            <p>Terms & Conditions</p>
            <p>Privacy</p>
            <p>Security</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
