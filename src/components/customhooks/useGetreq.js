import { useState,useEffect } from "react";
import axios from "axios";

const useGetreq =(url)=>{
    
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,seterror] = useState(null);
    
    useEffect(()=>{
        
        const fetchData =async()=>{
            try{
                const res = await axios.get(url)
                console.log(res)
                setData(res.data);
             }catch(er){
                 seterror(er.message);
             }finally{
                 setLoading(false)
             }
        }
        
    fetchData();

    },[])

    return { data, loading, error }
}


export default useGetreq