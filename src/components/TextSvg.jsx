import React from "react";

const TextSvg = () => {
  const text = "Welcome to my World of Design! * ";
  return (
    <svg className="w-full " viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          id="path"
          d="
    M0 60
    Q 37.5 50, 75 60
    T 150 60
    T 225 60
    T 300 60
    T 375 60
    T 450 60
    T 525 60"
          fill="none"
          stroke="transparent"
          stroke-width="2"
        />
      </defs>

      <text fontSize="16px" fill="#fff">
        {/* Copy 1 */}
        <textPath href="#path" startOffset="-97.5%" method="align" spacing="auto">
          {text}
          <animate attributeName="startOffset" from="-97.5%" to="2.5%" dur="20s" repeatCount="indefinite" />
        </textPath>

        {/* Copy 2 */}
        <textPath href="#path" startOffset="-45%" method="align" spacing="auto">
          {text}
          <animate attributeName="startOffset" from="-45%" to="55%" dur="20s" repeatCount="indefinite" />
        </textPath>

        {/* Copy 3 */}
        <textPath href="#path" startOffset="7.5%" method="align" spacing="auto">
          {text}
          <animate attributeName="startOffset" from="7.5%" to="107.5%" dur="20s" repeatCount="indefinite" />
        </textPath>

        {/* Copy 4 */}
        <textPath href="#path" startOffset="60%" method="align" spacing="auto">
          {text}
          <animate attributeName="startOffset" from="60%" to="160%" dur="20s" repeatCount="indefinite" />
        </textPath>
      </text>
    </svg>
  );
};

export default TextSvg;
