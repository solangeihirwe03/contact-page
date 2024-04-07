import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
const Location = () => {
  return (
    <div>
      <h2 className="text-bold">Contact us</h2>
      <p>
        <span>
          <FaLocationDot />
        </span>
        198 West 21th Street, Suite 721 New York NY 10016
      </p>
      <p>
        <span>
          <IoCall />
        </span>
        +250 787113254
      </p>
      <p>
        <span>
          <SiMinutemailer />
        </span>
        solangeihirwe@gmail.com
      </p>
      <p>
        <span>
          <SiMinutemailer />
        </span>
        solangeihirwe@gmail.com
      </p>
    </div>
  );
};

export default Location;
