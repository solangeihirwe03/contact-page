import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
const Location = () => {
  return (
    <div className="w-full text-[#dddddd] text-xl flex flex-col gap-5">
      <h2 className="text-bold">Contact us</h2>
      <p className="flex">
        <span>
          <FaLocationDot />
        </span>
        &nbsp;&nbsp;198 West 21th Street, Suite 721 New York NY 10016
      </p>
      <p className="flex">
        <span>
          <IoCall />
        </span>
        &nbsp;&nbsp;+250 787113254
      </p>
      <p className="flex">
        <span>
          <SiMinutemailer />
        </span>
        &nbsp;&nbsp;solangeihirwe@gmail.com
      </p>
    </div>
  );
};

export default Location;
