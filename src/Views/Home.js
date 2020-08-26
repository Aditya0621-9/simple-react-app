import React from "react";
import HelloWorld from "../Components/HelloWorld";

export default function Home() {
  return (
    <div>
      <HelloWorld name="Aditya" />
      <h1 className="font-bold text-2xl">This is HomePage</h1>
    </div>
  );
}
