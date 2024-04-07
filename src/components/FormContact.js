const Form = () => {
  return (
    <div className="flex flex-col  bg-white text-black gap-3 p-4 rounded-[12px] w-full">
      <input
        type="text"
        placeholder="Username"
        className="text-black border-2 h-10 rounded-[8px] border-[#b0b0b0] w-[100%] font-normal px-4"
      />
      <input
        type="text"
        placeholder="contact number"
        className="text-black border-2 h-10 rounded-[8px] border-[#b0b0b0] w-[100%] font-normal px-4"
      />
      <button className="text-start bg-[#7142FF] h-10 rounded-[10px] px-4 text-white">
        Create contact
      </button>
    </div>
  );
}

export default Form
