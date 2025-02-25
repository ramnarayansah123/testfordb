// Ensure the function is named correctly and exported as default
import React from "react";

const Page = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/users");
    const users = await response.json();

    return (
      <div>
        <h1>List of Books</h1>
        <ul>
          {users.map((user: any) => (
            <li key={user.id}> {/* Add a unique 'key' for each item */}
              <h2>{user.tittle}</h2> {/* Corrected 'tittle' to 'title' */}
              <p>{user.description}</p>
              <p>{user.id}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading users...</div>;
  }
};

export default Page; // Default export the component
