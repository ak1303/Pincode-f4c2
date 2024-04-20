import { useEffect, useState } from "react"

let count=0;
function Details({data, pincode}) {
    const[name,setName]= useState("");//schedules update
    const [filteredData,setFilteredData] = useState(null);
    useEffect(()=>{
        if(name!=='' && data.PostOffice !== null){
            const arr = data.PostOffice.filter(postoffice => postoffice.Name.toLowerCase().includes(name.trim().toLowerCase()));
            setFilteredData(arr); 
        }
    },[name])//will compare on third render because name is changed on 2nd render every time

  return (
    <div className="flex flex-col gap-6 m-10">
        <div className="font-bold text-xl" >Pincode: {pincode}</div>
        <div className="text-xl" ><span className="font-bold">Message:</span> {data.Message}</div>
        {data.PostOffice === null?"":<input onChange={(e)=>setName(e.target.value)} placeholder="Filter" className="p-1 w-3/4 border-2 border-black rounded-md placeholder:text-black text-lg " />}
        
        <div className="grid justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                data.PostOffice === null ?<div className="font-bold text-xl" >Couldn't find the postal data you're looking for…</div>
                :(
                    name==="" ?
                    ( data.PostOffice.map(postoffice=>{
                        return(
                            <div key={postoffice.Name} className="p-2 border-2 border-black flex flex-col gap-2 w-full rounded-md" >
                                <div>Name: {postoffice.Name}</div>
                                <div>Branch Type: {postoffice.BranchType}</div>
                                <div>Delivery Status: {postoffice.DeliveryStatus}</div>
                                <div>District: {postoffice.District}</div>
                                <div>Division: {postoffice.Division}</div>
                            </div>
                        )
                    }))
                    :
                    (  filteredData && filteredData.map(postoffice=>{
                        return(
                            <div key={postoffice.Name} className="p-2 border-2 border-black flex flex-col gap-2 w-full rounded-md" >
                                <div>Name: {postoffice.Name}</div>
                                <div>Branch Type: {postoffice.BranchType}</div>
                                <div>Delivery Status: {postoffice.DeliveryStatus}</div>
                                <div>District: {postoffice.District}</div>
                                <div>Division: {postoffice.Division}</div>
                            </div>
                        )
                        })
                    )
                )
            }
        </div>
        
    </div>
  )
}

export default Details;

// ( filteredData.map(postoffice=>{
//     return(
//         <div key={postoffice.Name} className="p-2 border-2 flex flex-col gap-2" >
//             <div>Name: {postoffice.Name}</div>
//             <div>Branch Type: {postoffice.BranchType}</div>
//             <div>Delivery Status: {postoffice.DeliveryStatus}</div>
//             <div>District: {postoffice.District}</div>
//             <div>Division: {postoffice.Division}</div>
//         </div>
//     )
//     }))