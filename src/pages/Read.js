import axios from "axios"
import { useEffect } from "react";


const Read = () => {
    //const [data, setData] = useState([]);

    useEffect(()=>{
        axios
          .get("http://localhost:3000/users")
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
    }, [])
  return (
    <div className="flex justify-center flex-col items-center bg-lime-50 h-[100vh]">
      <h1>Lists of contact</h1>
      <div className="w-[75%] rounded bg-white shadow-sm p-4">

      </div>
    </div>
  )
}

export default Read
