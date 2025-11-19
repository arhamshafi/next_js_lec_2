import React from "react";
import Client_component from "./Client_component";

async function Page() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json());

    return (
        <div className="w-full min-h-screen bg-black py-20 select-none">
            <h1 className="text-white font-bold text-3xl text-center mb-5">Product Detail Page</h1>

          <Client_component data={data} />
        </div>
    );
}

export default Page;
