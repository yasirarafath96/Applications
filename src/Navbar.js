import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleCalculator = () => {
    navigate("/Calculator");
  };

  const handletext = () => {
    navigate("/Textutils");
  };

  const handleQr = () => {
    navigate("/QrGenerator");
  };
  return (
    <>
      <nav class="navbar bg-body-secondary mt-5">
        <form class="container-fluid justify-content-start">
          <button
            class="btn btn-outline-success me-2 m-2"
            type="button"
            onClick={handleCalculator}
          >
            Calculator
          </button>
          <button
            class="btn btn-outline-success me-2 m-2"
            type="button"
            onClick={handletext}
          >
            Text Utils
          </button>
          <button
            class="btn btn-outline-success me-2 m-2"
            type="button"
            onClick={handleQr}
          >
            Qr Code Generator
          </button>
        </form>
      </nav>
    </>
  );
}

export default Navbar;
