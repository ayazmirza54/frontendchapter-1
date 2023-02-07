import { useState } from "react";
import heroimg from "../assets/image-product-desktop.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="grid grid-cols-2 content">
        <div>
          <img src="../assets/image-product-desktop.jpg" className="" />
        </div>
        <div className="flex flex-col gap-8 justify-start">
          <h2 classsName="header">PERFUME</h2>
          <p className="text-4xl">Gabrielle Essence Eau De Parfum </p>
          <p>
            {" "}
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>{" "}
          <div className="flex flex-row mx-20"><span className="text-4xl price text-[#1a4031]">$149.99 </span>
          <span className="inline">
           &nbsp;&nbsp; <del>$169.99</del>
          </span></div>
          <center>
            {" "}
            <button className="block bg-[#394c3b] text-[#e5faf3]">
              Add to Cart
            </button>
          </center>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
