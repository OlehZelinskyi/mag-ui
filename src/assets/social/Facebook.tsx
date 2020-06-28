import React from "react";

export interface Props {
  svgClasses: string;
}

export default function FacebookSVG(props: Props) {
  const { svgClasses } = props;

  return (
    <div className={svgClasses}>
      <svg
        width="9px"
        height="17px"
        viewBox="0 0 9 17"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs></defs>
        <g
          id="Symbols"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Element/Footer"
            transform="translate(-1043.000000, -161.000000)"
          >
            <g id="Element/Footer-Copy">
              <g>
                <g id="Group" transform="translate(1024.000000, 146.000000)">
                  <g
                    id="facebook-logo"
                    transform="translate(12.000000, 12.000000)"
                  >
                    <path
                      d="M15.6610864,3.00353713 L13.5023957,3 C11.0771806,3 9.50990013,4.64211479 9.50990013,7.18372294 L9.50990013,9.11269935 L7.33943312,9.11269935 C7.151879,9.11269935 7,9.26797957 7,9.45951541 L7,12.2543824 C7,12.4459183 7.15205218,12.6010216 7.33943312,12.6010216 L9.50990013,12.6010216 L9.50990013,19.6533608 C9.50990013,19.8448966 9.66177914,20 9.84933326,20 L12.6811753,20 C12.8687294,20 13.0206084,19.8447198 13.0206084,19.6533608 L13.0206084,12.6010216 L15.5583906,12.6010216 C15.7459447,12.6010216 15.8978237,12.4459183 15.8978237,12.2543824 L15.8988628,9.45951541 C15.8988628,9.36754991 15.8630145,9.27947526 15.7994574,9.21439198 C15.7359002,9.1493087 15.6493102,9.11269935 15.5592565,9.11269935 L13.0206084,9.11269935 L13.0206084,7.47748198 C13.0206084,6.69153064 13.2040062,6.29254185 14.2065462,6.29254185 L15.6607401,6.29201128 C15.848121,6.29201128 16,6.13673106 16,5.94537208 L16,3.35017634 C16,3.15899421 15.8482942,3.00389085 15.6610864,3.00353713 Z"
                      id="Shape"
                      fill="#707E8C"
                      fillRule="nonzero"
                    ></path>
                    <rect
                      id="Rectangle-3"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    ></rect>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
