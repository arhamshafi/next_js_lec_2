import React from "react";

async function Page() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json());

    return (
        <div className="w-full min-h-screen bg-black py-20 flex flex-col justify-center items-center select-none">
            <h1 className="text-white font-bold text-3xl mb-5">Product Detail Page</h1>
            {data &&
                data.map((ele, idx) => (
                    <div key={idx} className="text-white mb-2">
                        {ele.title}
                    </div>
                ))}
        </div>
    );
}

export default Page;
