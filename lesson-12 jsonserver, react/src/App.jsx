import React, { useEffect, useState } from "react";
import Users from "./components/Users";

const App = () => {
  
  return (
    <div className="container mx-auto bg-slate-400">
      <h1 className="font-bold text-xl text-center my-10">All users</h1>

      <Users/>
    </div>
  );
}

export default App;