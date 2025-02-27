"use client"


import { useState } from "react"

export default function Page(){
    const [tittle,setTittle] =useState("");
    const [description,setDescription] =useState("");

    const addProduct=async ()=>{
        console.log(tittle,description);
        let result = await fetch("http://localhost:3000/api/users",{
        method:"POST",
        body:JSON.stringify({tittle,description})
    })
}
    return(
        <>
        <div>
        <h1>Add Products</h1>
        <input type="text"onChange={(e)=>setTittle(e.target.value)} placeholder="enter tittle"></input>
        <input type="text"onChange={(e)=>setDescription(e.target.value)} placeholder="enter discription"></input>
        <button onClick={addProduct}>add</button>
        </div>
        </>
    )
}