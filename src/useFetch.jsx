import{useState,useEffect} from 'react';

const useFetch=(url)=>{
const [data,setData]=useState(null);
  
const [dummy,setDummy]=useState("value");
const[error,setError]=useState(null)
 useEffect(()=>{
       setTimeout(()=>{
       console.log("effect");
       console.log(dummy);
       fetch(url)
       .then(response =>{
         console.log(response);
         return response.json()
       }).then(data=>setData(data))
        .catch((error)=>{
         console.log(error.message);
         setError(error.message);
       })
     },1000) 
   }
     ,[]); 
     return [data,dummy,error]
}
export default useFetch;