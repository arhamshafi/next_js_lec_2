import Link from "next/link";
import React from "react";

async function Page() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json());

    return (
        <div className="w-full min-h-screen bg-black py-20 select-none">
            <h1 className="text-white font-bold text-3xl text-center mb-5">Product Detail Page</h1>

            <div className="mt-10">
                {data &&
                    data.map((ele, idx) => (
                        <Link key={idx} href={`/prd_detail/${ele.id}`} >
                        <div className="text-white flex items-center gap-4 hover:translate-x-2 w-max hover:text-yellow-500 transition-all duration-150 cursor-pointer ease-in " >
                            <p className="ml-2" >{idx + 1} : </p>
                            <div>
                                {ele.title}
                            </div>
                        </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default Page;
