import React from "react";

export default function MesaDivider({ from = "#5c2d14", to = "#6a3422" }) {
  return (
    <div
      className="h-10 overflow-hidden leading-none"
      style={{ backgroundColor: from }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
        className="block h-10 w-full"
      >
        <path
          fill={to}
          d="M0 13H8V17H18V9H31V15H43V6H55V14H67V10H79V18H91V12H100V40H0Z"
        />
      </svg>
    </div>
  );
}
