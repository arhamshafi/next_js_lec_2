"use client"

import { useRouter } from "next/navigation"



function Client_component({ data }) {



    const router = useRouter()
    return (
        <div className="mt-10">
            {data &&
                data.map((ele, idx) => (
                    
                        <div key={idx} onClick={()=>router.push(`/prd_detail/${ele.id}`)} className="text-white flex items-center gap-4 hover:translate-x-2 w-max hover:text-yellow-500 transition-all duration-150 cursor-pointer ease-in " >
                            <p className="ml-2" >{idx + 1} : </p>
                            <div>
                                {ele.title}
                            </div>
                        </div>
                    
                ))}
        </div>
    )
}

export default Client_component
