
function Search({setPincode,searchPincode}) {
  return (
    <form className="flex flex-col gap-6 m-10" onSubmit={ searchPincode} action="/">
        <h1 className="text-2xl" >Enter Pincode</h1>
        <input onChange={(e)=>setPincode(e.target.value)} placeholder="Pincode" className="p-1 w-3/4 border-2 border-black rounded-md placeholder:text-black text-lg " />
        <button className="w-fit py-2 px-3 bg-black text-white rounded-lg" >Lookup</button>
    </form>
  )
}

export default Search