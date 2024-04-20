import { useState } from "react"
import Search from "./Search";
import Details from "./Details";
import axios from 'axios'
import Loader from './Loader' 

function Pincode() {

    const[pincode,setPincode] = useState("");
    const[response, setResponse] = useState({apiStatus:0, data:null});

    const fetchData = async() =>{
        try {
            setResponse({...response,apiStatus:1})//loading
            const serverResponse = await axios(`https://api.postalpincode.in/pincode/${pincode}`);
            setResponse({apiStatus:2 ,data:serverResponse.data[0]});//fetched
        } catch (error) {
            setResponse({...response,apiStatus:3})//error
            console.log('Error in fetching data',error);
        }
    }

    const searchPincode = (e) =>{
        e.preventDefault();
        if(pincode.length !==6 ) alert("Please enter a 6-digit number for the pincode.");
        else 
            fetchData();
    }

  return (
    <div>
        {
            response.apiStatus==1?<Loader/>:
            (response.apiStatus==2 ? <Details data={response.data} pincode={pincode}/> 
            : 
            <Search setPincode={setPincode} searchPincode={searchPincode}/>
        )
           
        }
    </div>
  )
}

export default Pincode