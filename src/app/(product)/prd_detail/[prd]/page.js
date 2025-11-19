"use client"

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {

    const router = useRouter()
    const params = useParams()
    const { prd } = params
    const [data, setdata] = useState([])
    const detail = data?.find(ele => ele.id == prd)


    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const json_convrt = await res.json()
            setdata(json_convrt)
        }
        fetchdata()

    }, [])

    return (
        <div className="w-full min-h-screen bg-black py-20 select-none " >
            <p onClick={() => router.back()} className="text-white ml-10 cursor-pointer text-xl hover:scale-110 hover:text-yellow-400 transition-all duration-150 ease-linear w-max ">Back</p>

            <div className="w-[800px] mx-auto mt-15 text-center ">
                <h1 className="text-white font-bold text-3xl mt-14 " >{detail?.id}</h1>
                <h1 className="text-white font-bold text-3xl mt-5 " >{detail?.title}</h1>
                <h1 className="text-white font-bold text-3xl mt-5 " >{detail?.body}</h1>
            </div>

        </div>
    );
}

export default Page
