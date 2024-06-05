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
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <form class="container-fluid justify-content-start">
          <button
            class="btn btn-outline-success me-2"
            type="button"
            onClick={handleCalculator}
          >
            Calculator
          </button>
          <button
            class="btn btn-outline-success me-2"
            type="button"
            onClick={handletext}
          >
            Text Utils
          </button>
        </form>
      </nav>
    </>
  );
}

export default Navbar;
