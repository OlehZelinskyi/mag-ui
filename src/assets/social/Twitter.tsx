import React from "react";

export interface Props {
  svgClasses: string;
}

export default function TwitterSVG(props: Props) {
  const { svgClasses } = props;

  return (
    <div className={svgClasses}>
      <svg
        width="20px"
        height="16px"
        viewBox="0 0 20 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <polygon id="path-1" points="0 24 0 0 24 0 24 24"></polygon>
        </defs>
        <g
          id="Symbols"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Element/Footer"
            transform="translate(-1103.000000, -162.000000)"
          >
            <g id="Element/Footer-Copy">
              <g>
                <g id="Group" transform="translate(1024.000000, 146.000000)">
                  <g
                    id="social-icon_tw"
                    transform="translate(77.000000, 12.000000)"
                  >
                    <mask id="mask-2" fill="white">
                      <use xlinkHref="#path-1"></use>
                    </mask>
                    <g id="Clip-2"></g>
                    <path
                      d="M22,5.89398041 C21.2642,6.21528769 20.4733,6.43244574 19.6434,6.52999951 C20.4904,6.03012256 21.1411,5.23856869 21.4475,4.29531919 C20.6546,4.75828124 19.7765,5.09435448 18.8418,5.27548359 C18.0934,4.49042674 17.027,4 15.8468,4 C13.5808,4 11.7435,5.80843628 11.7435,8.03908057 C11.7435,8.35566275 11.7798,8.66397598 11.8498,8.95959049 C8.4396,8.79116011 5.4161,7.18304868 3.3924,4.73928237 C3.0392,5.33582714 2.8368,6.0297288 2.8368,6.76999557 C2.8368,8.17138357 3.5612,9.40768814 4.6622,10.1320077 C3.9896,10.11104 3.3569,9.92932027 2.8037,9.62681498 C2.8033,9.64364818 2.8033,9.66048137 2.8033,9.67760988 C2.8033,11.6345917 4.2177,13.2671162 6.0948,13.638234 C5.7505,13.7305705 5.388,13.7799872 5.0138,13.7799872 C4.7494,13.7799872 4.4923,13.7545898 4.2418,13.7074371 C4.7639,15.3121032 6.2792,16.4799921 8.0748,16.5124772 C6.6705,17.5959049 4.9013,18.2416695 2.9788,18.2416695 C2.6476,18.2416695 2.321,18.2224738 2,18.1851651 C3.8159,19.3312005 5.9727,20 8.2899,20 C15.8372,20 19.9645,13.8451543 19.9645,8.50745681 C19.9645,8.33233253 19.9604,8.15819265 19.9525,7.98493872 C20.7543,7.41536644 21.4499,6.70404095 22,5.89398041"
                      id="Fill-1"
                      fill="#707E8C"
                      mask="url(#mask-2)"
                    ></path>
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
