import Location from "./components/Location";
import Form from "./components/FormContact";

function App() {
  return (
    <div className="w-full bg-[url('https://preview.colorlib.com/theme/bootstrap/contact-form-10/images/bg_1.jpg')] bg-no-repeat bg-cover font-bold text-[#f8f8f8] flex flex-col justify-center items-center h-[100%]">
      <h2 className="text-blue">Contact page</h2>
      <div className="flex justify-around">
        <Location />
        <Form />
      </div>
    </div>
  );
}

export default App;
