import React from "react";

export default function MesaDivider({ from = "#5c2d14", to = "#6a3422" }) {
  return (
    <div
      className="h-8 overflow-hidden leading-none sm:h-10 md:h-14 lg:h-16"
      style={{ backgroundColor: from }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
        className="block h-full w-full"
      >
        <path
          fill={to}
          d="M0 9H4V15H10V21H16V13H22V7H29V17H36V23H43V12H50V6H57V16H64V20H71V11H78V5H85V15H92V22H97V13H100V40H0Z"
        />
      </svg>
    </div>
  );
}
