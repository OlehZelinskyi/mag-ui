import React from "react";

export interface Props {
  svgClasses: string;
}

export default (props: Props) => {
  const { svgClasses } = props;
  return (
    <div className={svgClasses}>
      <svg
        width="264px"
        height="142px"
        viewBox="0 0 264 142"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="87.8967404%"
            y1="45.0312853%"
            x2="-100.563772%"
            y2="45.0312853%"
            id="linearGradient-1"
          >
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
            <stop
              stop-color="#FFFFFF"
              stop-opacity="0.359408602"
              offset="56.1070381%"
            ></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g
          id="Web"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Web_Get_in_touch"
            transform="translate(-833.000000, -712.000000)"
          >
            <g
              id="Macbook-illustration"
              transform="translate(833.000000, 702.000000)"
            >
              <polygon
                id="Rectangle"
                fill="url(#linearGradient-1)"
                transform="translate(179.979672, 31.000000) rotate(-90.000000) translate(-179.979672, -31.000000) "
                points="151.979672 -53.9796721 207.979672 -42.9043227 207.979672 115.979672 151.979672 104.030041"
              ></polygon>
              <path
                d="M55,146 L230,146 L230,146 C230,149.313708 227.313708,152 224,152 L55,152 L55,146 Z"
                id="Rectangle-17"
                fill="#B8C0D0"
              ></path>
              <path
                d="M0,146 L77,146 C78.6568542,146 80,147.343146 80,149 L80,149 C80,150.656854 78.6568542,152 77,152 L6,152 C2.6862915,152 4.05812251e-16,149.313708 0,146 Z"
                id="Rectangle-17-Copy"
                fill="#D5D8DE"
              ></path>
              <path
                d="M108.434958,34 L246.891245,34 C252.414093,34 256.891245,38.4771525 256.891245,44 C256.891245,44.6344336 256.83087,45.2674275 256.710935,45.8904216 L239.384732,135.890422 C238.478477,140.597911 234.358971,144 229.565042,144 L91.1087548,144 C85.5859073,144 81.1087548,139.522847 81.1087548,134 C81.1087548,133.365566 81.1691304,132.732573 81.2890651,132.109578 L98.6152683,42.1095784 C99.521523,37.4020891 103.641029,34 108.434958,34 Z"
                id="Rectangle-16"
                fill="#E2E5EB"
              ></path>
              <circle
                id="Oval-8"
                fill="#FFFFFF"
                cx="172"
                cy="89"
                r="12"
              ></circle>
            </g>
          </g>
        </g>
      </svg>
      ;
    </div>
  );
};
