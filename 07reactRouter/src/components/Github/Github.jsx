import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/0xy-doxy')
    //     .then(Response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    return(
        <div className="text-center m-5 bg-gray-500 text-white p-4 text-3xl">Github followers:{data.followers}
        <img  src={data.avatar_url} alt="Git picture" width={300} />
         </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/0xy-doxy')
    return response.json()
}