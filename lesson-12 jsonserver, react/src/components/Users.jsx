import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
     useEffect(() => {
       axios
         .get("http://localhost:3000/users")
         .then((response) => {
           setUsers(response.data);
         })
         .catch((err) => {
           console.log(err);
           setErrorMsg("Error!");
         });
     }, []);
  return (
    <>
      {users.length ? (
        <ul className="flex flex-wrap gap-[50px]">
          {users.map((e) => {
            return (
              <>
                <div>
                  <a
                    href="#"
                    className="block w-[300px] h-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <strong>Name: </strong>
                      {e.name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      <strong>Username: </strong>
                      {e.username}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      <strong>Email: </strong>
                      {e.email}
                    </p>
                  </a>
                </div>
              </>
            );
          })}
        </ul>
      ) : null}
    </>
  );
}

export default Users