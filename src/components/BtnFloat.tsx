"use client";
import React from "react";

const BtnFloat = () => {
  return (
    <button
      onClick={() => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="hidden md:block md:fixed right-3 bottom-3 rounded-md bg-orange-600 hover:bg-orange-500
    text-white font-semibold text-xl p-4 z-20 opacity-80"
    >
      Top
    </button>
  );
};

export default BtnFloat;
