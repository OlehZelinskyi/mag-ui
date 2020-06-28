import React from "react";

export interface Props {
  svgClasses: string;
}

export default function MediumSVG(props: Props) {
  const { svgClasses } = props;

  return (
    <div className={svgClasses}>
      <svg width="23px" height="19px" viewBox="0 0 23 19" version="1.1">
        <defs></defs>
        <g
          id="Symbols"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Element/Footer"
            transform="translate(-1229.000000, -160.000000)"
            fill="#707E8C"
          >
            <g id="Element/Footer-Copy">
              <g>
                <g id="Group" transform="translate(1024.000000, 146.000000)">
                  <polygon
                    id="Path-12"
                    points="207.717813 18.116244 207.717813 29.0072014 205.010129 32.3151575 205.010129 32.8057688 211.679974 32.8057688 211.679974 32.3005734 209.052445 29.0072014 209.052445 19.9542302 214.82362 32.8057688 215.631469 32.8057688 220.613456 19.9542302 220.613456 30.4715767 218.692031 32.3151575 218.692031 32.8057688 227.575313 32.8057688 227.575313 32.3151575 225.670664 30.4715767 225.670664 17.091384 227.575313 15.2661744 227.575313 14.8057688 221.297743 14.8057688 216.911894 25.8679629 211.895458 14.8057688 205.310724 14.8057688 205.310724 15.2661744"
                  ></polygon>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
