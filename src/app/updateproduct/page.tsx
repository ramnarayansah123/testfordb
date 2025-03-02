"use client"

import { useState } from "react"

export default function Page(props: any) {
  const [id, setId] = useState(""); // New state for the product ID
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");

  const updateProduct = async () => {
    if (!id) {
      alert("Please enter a valid product ID");
      return;
    }

    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tittle, description }),
    });

    const productData = await response.json();

    if (response.ok) {
      alert("Product has been updated");
    } else {
      alert(productData.error || "Failed to update the product");
    }
  };

  return (
    <>
      <div>
        <h1>Update Product</h1>
        <input 
          type="text" 
          onChange={(e) => setId(e.target.value)} 
          placeholder="Enter product ID" 
          value={id}
        />
        <input 
          type="text" 
          onChange={(e) => setTittle(e.target.value)} 
          placeholder="Enter title" 
          value={tittle} 
        />
        <input 
          type="text" 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Enter description" 
          value={description} 
        />
        <button onClick={updateProduct}>Update</button>
      </div>
    </>
  );
}
