import { useState, useEffect } from "react"

const UseFetch = (url) => {
    const [data,setData] = useState();

    useEffect(()=>{
        fetch(url).then((res)=>res.json()) // Converts from the server to JSON
        .then((data)=>setData(data)) // Set retrieved data to the state variable data
    }, [])

    return [data]
}

export default UseFetch
