const Form = () => {
  return (
    <div className="flex flex-col  bg-white text-black gap-3 p-4 rounded-[12px]">
      <input type="text" placeholder="Username" className="text-black outline-1 w-[100%]"/>
      <input type="text" placeholder="contact number"/>
      <button>Create contact</button>   
    </div>
  )
}

export default Form
