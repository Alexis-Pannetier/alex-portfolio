import * as React from "react";

import angularSvg from "@/components/icons/brand/angular.svg?raw";
import ansibleSvg from "@/components/icons/brand/ansible.svg?raw";
import cssSvg from "@/components/icons/brand/css.svg?raw";
import dockerSvg from "@/components/icons/brand/docker.svg?raw";
import figmaSvg from "@/components/icons/brand/figma.svg?raw";
import gitSvg from "@/components/icons/brand/git.svg?raw";
import htmlSvg from "@/components/icons/brand/html.svg?raw";
import javascriptSvg from "@/components/icons/brand/javascript.svg?raw";
import kubernetesSvg from "@/components/icons/brand/kubernetes.svg?raw";
import laravelSvg from "@/components/icons/brand/laravel.svg?raw";
import mysqlSvg from "@/components/icons/brand/mysql.svg?raw";
import phpSvg from "@/components/icons/brand/php.svg?raw";
import postgresqlSvg from "@/components/icons/brand/postgresql.svg?raw";
import postmanSvg from "@/components/icons/brand/postman.svg?raw";
import reactSvg from "@/components/icons/brand/react.svg?raw";
import shopifySvg from "@/components/icons/brand/shopify.svg?raw";
import symfonySvg from "@/components/icons/brand/symfony.svg?raw";
import typescriptWebp from "@/components/icons/brand/typescript.webp";
import vscodeSvg from "@/components/icons/brand/vscode.svg?raw";
import wordpressSvg from "@/components/icons/brand/wordpress.svg?raw";

type SVGProps = React.SVGProps<SVGSVGElement>;

export const BikeIcon = (props: SVGProps) => (
  <svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    id="bike"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    {...props}
  >
    <path
      id="secondary"
      d="M18,20a4,4,0,1,1,4-4A4,4,0,0,1,18,20Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,18,14ZM6,20a4,4,0,1,1,4-4A4,4,0,0,1,6,20Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,6,14Z"
      style={{ fill: "#FAE081" }}
    />
    <path
      id="primary"
      d="M18.45,5.89a1,1,0,1,0-.9-1.78l-1.32.65A2,2,0,0,0,15.17,7l.34,1.72L12,10.94l-.47-2.33A2,2,0,0,0,9.58,7H8A1,1,0,0,0,8,9H9.58l.62,3.1L5.46,15.16A1,1,0,0,0,6,17a1,1,0,0,0,.54-.16l9.4-6.06L17,16.2a1,1,0,0,0,1,.8l.2,0A1,1,0,0,0,19,15.8L17.13,6.55Z"
      style={{ fill: "#FAE081" }}
    />
  </svg>
);

export const TableTopIcon = (props: SVGProps) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none">
      <path
        d="M20 81.772h90.18v90.18H20Z"
        style={{
          fillOpacity: 0,
          stroke: "#FAE081",
          strokeWidth: 8,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          paintOrder: "stroke fill markers",
        }}
      />
      <path
        d="M135.072 110.516H172V20H81.873v37.191h53.199v53.213"
        style={{
          fill: "#FAE081",
          fillOpacity: 0,
          stroke: "#FAE081",
          strokeWidth: 8,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          paintOrder: "stroke fill markers",
        }}
        fill="none"
      />
      <path
        d="M109.622 38.405a9.405 9.405 0 0 1-9.406 9.406 9.405 9.405 0 0 1-9.405-9.406A9.405 9.405 0 0 1 100.216 29a9.405 9.405 0 0 1 9.406 9.405zm-61.598 62.146a9.405 9.405 0 0 1-9.406 9.406 9.405 9.405 0 0 1-9.405-9.406 9.405 9.405 0 0 1 9.405-9.405 9.405 9.405 0 0 1 9.406 9.405zm26.29 26.39a9.405 9.405 0 0 1-9.405 9.406 9.405 9.405 0 0 1-9.406-9.406 9.405 9.405 0 0 1 9.406-9.405 9.405 9.405 0 0 1 9.405 9.405zm26.928 26.639a9.405 9.405 0 0 1-9.406 9.406 9.405 9.405 0 0 1-9.405-9.406 9.405 9.405 0 0 1 9.405-9.405 9.405 9.405 0 0 1 9.406 9.405zm61.847-115.175a9.405 9.405 0 0 1-9.406 9.406 9.405 9.405 0 0 1-9.405-9.406A9.405 9.405 0 0 1 153.683 29a9.405 9.405 0 0 1 9.406 9.405zm0 53.72a9.405 9.405 0 0 1-9.406 9.406 9.405 9.405 0 0 1-9.405-9.406 9.405 9.405 0 0 1 9.405-9.405 9.405 9.405 0 0 1 9.406 9.405z"
        style={{
          fillOpacity: 0,
          stroke: "#FAE081",
          strokeWidth: 8,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          paintOrder: "stroke fill markers",
        }}
      />
    </g>
  </svg>
);

export const MovieIcon = (props: SVGProps) => (
  <svg
    fill="#FAE081"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.466l-2.667-4H20l.001 4zm-5.466 0-2.667-4h2.596l2.667 4h-2.596zm-2.404 0H9.535L6.869 5h2.596l2.666 4zM4 5h.465l2.667 4H4V5z" />
  </svg>
);

export const TechIcon = (props: SVGProps) => (
  <svg
    fill="#FAE081"
    width="800px"
    height="800px"
    viewBox="0 -2.2 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path d="M8,7.8a2,2,0,1,1,2-2A2,2,0,0,1,8,7.8Zm0-3a1,1,0,1,0,1,1A1,1,0,0,0,8,4.8Zm5.66,6.66a8,8,0,0,0,0-11.31.5.5,0,0,0-.71,0,.48.48,0,0,0,0,.7,7,7,0,0,1,0,9.9.5.5,0,0,0,0,.71.49.49,0,0,0,.35.15A.51.51,0,0,0,13.66,11.46ZM11.54,9.34a5,5,0,0,0,0-7.07.5.5,0,0,0-.71,0,.48.48,0,0,0,0,.7,4,4,0,0,1,0,5.66.5.5,0,0,0,0,.71.49.49,0,0,0,.35.15A.51.51,0,0,0,11.54,9.34Zm-6.37,0a.5.5,0,0,0,0-.71A4,4,0,0,1,5.17,3a.48.48,0,0,0,0-.7.5.5,0,0,0-.71,0,5,5,0,0,0,0,7.07.51.51,0,0,0,.36.15A.49.49,0,0,0,5.17,9.34ZM3.05,11.46a.5.5,0,0,0,0-.71,7,7,0,0,1,0-9.9.48.48,0,0,0,0-.7.5.5,0,0,0-.71,0,8,8,0,0,0,0,11.31.51.51,0,0,0,.36.15A.49.49,0,0,0,3.05,11.46Z" />
      </g>
    </g>
  </svg>
);

export const IdeaIcon = (props: SVGProps) => (
  <svg
    width="800px"
    height="800px"
    viewBox="-7.77 0 61.035 61.035"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="Group_29"
      data-name="Group 29"
      transform="translate(-788.374 -1136.157)"
    >
      <path
        id="Path_73"
        data-name="Path 73"
        d="M827.765,1167.51a16.353,16.353,0,1,0-21.69,15.443v12.239H816.75v-12.239A16.346,16.346,0,0,0,827.765,1167.51Z"
        fill="#FAE081"
        stroke="#231f20"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <rect
        id="Rectangle_13"
        data-name="Rectangle 13"
        width={14.217}
        height={5.549}
        transform="translate(804.387 1187.563)"
        fill="#d1d3d4"
        stroke="#FAE081"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <line
        id="Line_34"
        data-name="Line 34"
        y2={3.813}
        transform="translate(811.413 1138.157)"
        fill="#d1d3d4"
        stroke="#FAE081"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <line
        id="Line_35"
        data-name="Line 35"
        x1={2.419}
        y2={2.948}
        transform="translate(828.636 1145.697)"
        fill="#d1d3d4"
        stroke="#FAE081"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <line
        id="Line_36"
        data-name="Line 36"
        x2={2.419}
        y2={2.948}
        transform="translate(791.188 1145.697)"
        fill="#d1d3d4"
        stroke="#FAE081"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
    </g>
  </svg>
);

export const EyesIcon = (props: SVGProps) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    className="iconify iconify--noto"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      d="M34.16 106.51C18.73 106.51 6.19 87.44 6.19 64c0-23.44 12.55-42.51 27.97-42.51c15.42 0 27.97 19.07 27.97 42.51c0 23.44-12.55 42.51-27.97 42.51z"
      fill="#fafafa"
    />
    <path
      d="M34.16 23.49c6.63 0 12.98 4 17.87 11.27c5.22 7.75 8.1 18.14 8.1 29.24s-2.88 21.49-8.1 29.24c-4.89 7.27-11.24 11.27-17.87 11.27s-12.98-4-17.87-11.27C11.06 85.49 8.19 75.1 8.19 64s2.88-21.49 8.1-29.24c4.89-7.27 11.23-11.27 17.87-11.27m0-4C17.61 19.49 4.19 39.42 4.19 64s13.42 44.51 29.97 44.51S64.13 88.58 64.13 64S50.71 19.49 34.16 19.49z"
      fill="#b0bec5"
    />
    <linearGradient
      id="IconifyId17ecdb2904d178eab7946"
      gradientUnits="userSpaceOnUse"
      x1={22.523}
      y1={46.676}
      x2={22.523}
      y2={82.083}
    >
      <stop offset={0} stopColor="#424242" />
      <stop offset={1} stopColor="#212121" />
    </linearGradient>
    <path
      d="M25.63 59.84c-2.7-2.54-2.1-7.58 1.36-11.26c.18-.19.36-.37.55-.54c-1.54-.87-3.23-1.36-5.01-1.36c-7.19 0-13.02 7.93-13.02 17.7s5.83 17.7 13.02 17.7s13.02-7.93 13.02-17.7c0-1.75-.19-3.45-.54-5.05c-3.24 2.33-7.11 2.64-9.38.51z"
      fill="url(#IconifyId17ecdb2904d178eab7946)"
    />
    <g>
      <ellipse cx={93.84} cy={64} rx={29.97} ry={44.51} fill="#eee" />
      <path
        d="M93.84 106.51c-15.42 0-27.97-19.07-27.97-42.51c0-23.44 12.55-42.51 27.97-42.51c15.42 0 27.97 19.07 27.97 42.51c0 23.44-12.54 42.51-27.97 42.51z"
        fill="#fafafa"
      />
      <path
        d="M93.84 23.49c6.63 0 12.98 4 17.87 11.27c5.22 7.75 8.1 18.14 8.1 29.24s-2.88 21.49-8.1 29.24c-4.89 7.27-11.24 11.27-17.87 11.27s-12.98-4-17.87-11.27c-5.22-7.75-8.1-18.14-8.1-29.24s2.88-21.49 8.1-29.24c4.89-7.27 11.24-11.27 17.87-11.27m0-4c-16.55 0-29.97 19.93-29.97 44.51s13.42 44.51 29.97 44.51S123.81 88.58 123.81 64s-13.42-44.51-29.97-44.51z"
        fill="#b0bec5"
      />
      <linearGradient
        id="IconifyId17ecdb2904d178eab7947"
        gradientUnits="userSpaceOnUse"
        x1={82.209}
        y1={46.676}
        x2={82.209}
        y2={82.083}
      >
        <stop offset={0} stopColor="#424242" />
        <stop offset={1} stopColor="#212121" />
      </linearGradient>
      <path
        d="M85.31 59.84c-2.7-2.54-2.1-7.58 1.36-11.26c.18-.19.36-.37.55-.54c-1.54-.87-3.23-1.36-5.01-1.36c-7.19 0-13.02 7.93-13.02 17.7s5.83 17.7 13.02 17.7c7.19 0 13.02-7.93 13.02-17.7c0-1.75-.19-3.45-.54-5.05c-3.23 2.33-7.11 2.64-9.38.51z"
        fill="url(#IconifyId17ecdb2904d178eab7947)"
      />
    </g>
  </svg>
);

export const OrganisationIcon = (props: SVGProps) => (
  <svg
    id="Uploaded to svgrepo.com"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="800px"
    height="800px"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">{"\n\t.stone_een{fill:#FAE081;}\n"}</style>
    <path
      className="stone_een"
      d="M10,19H4c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h6c0.552,0,1-0.448,1-1v-7 C11,19.448,10.552,19,10,19z M10,11H4c-0.552,0-1,0.448-1,1v5c0,0.552,0.448,1,1,1h6c0.552,0,1-0.448,1-1v-5 C11,11.448,10.552,11,10,11z M19,4h-6c-0.552,0-1,0.448-1,1v8c0,0.552,0.448,1,1,1h6c0.552,0,1-0.448,1-1V5C20,4.448,19.552,4,19,4z  M19,15h-6c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h6c0.552,0,1-0.448,1-1v-4C20,15.448,19.552,15,19,15z M28,20h-6 c-0.552,0-1,0.448-1,1v6c0,0.552,0.448,1,1,1h6c0.552,0,1-0.448,1-1v-6C29,20.448,28.552,20,28,20z M28,4h-6c-0.552,0-1,0.448-1,1v5 c0,0.552,0.448,1,1,1h6c0.552,0,1-0.448,1-1V5C29,4.448,28.552,4,28,4z M11,4.5C11,4.776,10.776,5,10.5,5h-7C3.224,5,3,4.776,3,4.5 S3.224,4,3.5,4h7C10.776,4,11,4.224,11,4.5z M11,6.5C11,6.776,10.776,7,10.5,7h-7C3.224,7,3,6.776,3,6.5S3.224,6,3.5,6h7 C10.776,6,11,6.224,11,6.5z M11,8.5C11,8.776,10.776,9,10.5,9h-7C3.224,9,3,8.776,3,8.5S3.224,8,3.5,8h7C10.776,8,11,8.224,11,8.5z  M20,23.5c0,0.276-0.224,0.5-0.5,0.5h-7c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7C19.776,23,20,23.224,20,23.5z M20,25.5 c0,0.276-0.224,0.5-0.5,0.5h-7c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7C19.776,25,20,25.224,20,25.5z M20,27.5 c0,0.276-0.224,0.5-0.5,0.5h-7c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7C19.776,27,20,27.224,20,27.5z M29,13.5 c0,0.276-0.224,0.5-0.5,0.5h-7c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7C28.776,13,29,13.224,29,13.5z M29,15.5 c0,0.276-0.224,0.5-0.5,0.5h-7c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7C28.776,15,29,15.224,29,15.5z M29,17.5 c0,0.276-0.224,0.5-0.5,0.5h-7c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7C28.776,17,29,17.224,29,17.5z"
    />
  </svg>
);

export const SmileIcon = (props: SVGProps) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#FAE081"
      d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M7.08636434,11.3988285 L6.98544668,11.403483 C6.61156677,11.4483113 6.34481775,11.7877414 6.38964607,12.1616213 C6.60761388,13.9795299 8.15440149,15.361378 10,15.361378 C11.8365892,15.361378 13.378445,13.9926929 13.6073722,12.1858044 C13.6547026,11.812233 13.3902319,11.4710247 13.0166605,11.4236943 C12.6430891,11.376364 12.3018808,11.6408346 12.2545505,12.014406 C12.1116922,13.1419649 11.1476397,13.9977416 10,13.9977416 C8.84672907,13.9977416 7.8796076,13.1337478 7.74358499,11.9992836 C7.69875667,11.6254037 7.35932659,11.3586547 6.98544668,11.403483 Z M5.81395349,6.27906977 C5.0433236,6.27906977 4.41860465,6.90378872 4.41860465,7.6744186 C4.41860465,8.44504849 5.0433236,9.06976744 5.81395349,9.06976744 C6.58458337,9.06976744 7.20930233,8.44504849 7.20930233,7.6744186 C7.20930233,6.90378872 6.58458337,6.27906977 5.81395349,6.27906977 Z M14.1860465,6.27906977 C13.4154166,6.27906977 12.7906977,6.90378872 12.7906977,7.6744186 C12.7906977,8.44504849 13.4154166,9.06976744 14.1860465,9.06976744 C14.9566764,9.06976744 15.5813953,8.44504849 15.5813953,7.6744186 C15.5813953,6.90378872 14.9566764,6.27906977 14.1860465,6.27906977 Z"
    />
  </svg>
);


export const DocumentationIcon = (props: SVGProps) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    fill="#FAE081"
    viewBox="0 0 296.999 296.999"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <g>
        <g>
          <path d="M169.197,43.09H18.808c-7.176,0-13.014,5.838-13.014,13.014v227.444c0,7.176,5.838,13.014,13.014,13.014h150.389 c7.176,0,13.014-5.838,13.014-13.014V56.105C182.211,48.928,176.373,43.09,169.197,43.09z M151.794,274.258H36.21 c-4.479,0-8.111-3.632-8.111-8.111s3.632-8.111,8.111-8.111h115.584c4.479,0,8.111,3.632,8.111,8.111 S156.273,274.258,151.794,274.258z M151.794,235.73H36.21c-4.479,0-8.111-3.632-8.111-8.111s3.632-8.111,8.111-8.111h115.584 c4.479,0,8.111,3.632,8.111,8.111C159.905,232.098,156.273,235.73,151.794,235.73z M151.794,197.202H36.21 c-4.479,0-8.111-3.632-8.111-8.111s3.632-8.111,8.111-8.111h115.584c4.479,0,8.111,3.632,8.111,8.111 S156.273,197.202,151.794,197.202z M151.794,158.674H36.21c-4.479,0-8.111-3.632-8.111-8.111s3.632-8.111,8.111-8.111h115.584 c4.479,0,8.111,3.632,8.111,8.111S156.273,158.674,151.794,158.674z M151.794,120.146H36.21c-4.479,0-8.111-3.632-8.111-8.111 s3.632-8.111,8.111-8.111h115.584c4.479,0,8.111,3.632,8.111,8.111S156.273,120.146,151.794,120.146z M151.794,81.618H36.21 c-4.479,0-8.111-3.632-8.111-8.111c0-4.479,3.632-8.111,8.111-8.111h115.584c4.479,0,8.111,3.632,8.111,8.111 C159.905,77.986,156.273,81.618,151.794,81.618z" />
          <path d="M213.642,0H57.336c-7.177,0-13.014,5.838-13.014,13.014v13.854h124.875c16.121,0,29.237,13.115,29.237,29.237v201.931 h15.208c7.176,0,13.014-5.838,13.014-13.014V13.014C226.656,5.838,220.818,0,213.642,0z" />
          <path d="M291.205,23.324C291.204,10.464,281.88,0,270.42,0c-11.461,0-20.785,10.464-20.785,23.324v13.584h41.57V23.324z" />
          <path d="M249.635,53.13v214.537h0c0,1.2,0.342,2.373,0.983,3.371l14.921,23.249c1.087,1.694,2.919,2.712,4.881,2.712 c1.961,0,3.794-1.018,4.881-2.712l14.921-23.249c0.641-0.998,0.983-2.171,0.983-3.371V53.13H249.635z" />
        </g>
      </g>
    </g>
  </svg>
);

const QualityIcon = (props: SVGProps) => (
  <svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    id="quality"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <circle
      id="secondary"
      cx={12}
      cy={10}
      r={3}
      style={{
        fill: "none",
        stroke: "#FAE081",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <polyline
      id="primary"
      points="5.79 13.57 3 17.56 6.03 18.46 7.91 21 10.79 16.89"
      style={{
        fill: "none",
        stroke: "#FAE081",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <polyline
      id="primary-2"
      data-name="primary"
      points="18.21 13.57 21 17.56 17.97 18.46 16.09 21 13.21 16.89"
      style={{
        fill: "none",
        stroke: "#FAE081",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <circle
      id="primary-3"
      data-name="primary"
      cx={12}
      cy={10}
      r={7}
      style={{
        fill: "none",
        stroke: "#FAE081",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);

const asDataUrl = (rawSvg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(rawSvg)}`;

const brandSvgUrls = {
  angular: asDataUrl(angularSvg),
  ansible: asDataUrl(ansibleSvg),
  css: asDataUrl(cssSvg),
  docker: asDataUrl(dockerSvg),
  figma: asDataUrl(figmaSvg),
  git: asDataUrl(gitSvg),
  html: asDataUrl(htmlSvg),
  javascript: asDataUrl(javascriptSvg),
  kubernetes: asDataUrl(kubernetesSvg),
  laravel: asDataUrl(laravelSvg),
  mysql: asDataUrl(mysqlSvg),
  php: asDataUrl(phpSvg),
  postgresql: asDataUrl(postgresqlSvg),
  postman: asDataUrl(postmanSvg),
  react: asDataUrl(reactSvg),
  shopify: asDataUrl(shopifySvg),
  symfony: asDataUrl(symfonySvg),
  typescript: typescriptWebp.src,
  vscode: asDataUrl(vscodeSvg),
  wordpress: asDataUrl(wordpressSvg),
} as const;

const createBrandIcon = (name: keyof typeof brandSvgUrls) => (props: SVGProps) => (
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" {...props}>
    <image
      href={brandSvgUrls[name]}
      x={0}
      y={0}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    />
  </svg>
);

export const AngularIcon = createBrandIcon("angular");
export const AnsibleIcon = createBrandIcon("ansible");
export const CssIcon = createBrandIcon("css");
export const DockerIcon = createBrandIcon("docker");
export const FigmaIcon = createBrandIcon("figma");
export const GitIcon = createBrandIcon("git");
export const HtmlIcon = createBrandIcon("html");
export const JavascriptIcon = createBrandIcon("javascript");
export const KubernetesIcon = createBrandIcon("kubernetes");
export const LaravelIcon = createBrandIcon("laravel");
export const MysqlIcon = createBrandIcon("mysql");
export const ReactIcon = createBrandIcon("react");
export const PhpIcon = createBrandIcon("php");
export const PostgresqlIcon = createBrandIcon("postgresql");
export const PostmanIcon = createBrandIcon("postman");
export const ShopifyIcon = createBrandIcon("shopify");
export const SymfonyIcon = createBrandIcon("symfony");
export const TypescriptIcon = createBrandIcon("typescript");
export const VscodeIcon = createBrandIcon("vscode");
export const WordpressIcon = createBrandIcon("wordpress");

export const skillIconRegistry: Record<string, React.ComponentType<SVGProps>> = {
  documentation: DocumentationIcon,
  bike: BikeIcon,
  eyes: EyesIcon,
  idea: IdeaIcon,
  movie: MovieIcon,
  organisation: OrganisationIcon,
  quality: QualityIcon,
  smile: SmileIcon,
  tabletop: TableTopIcon,
  tech: TechIcon,
// Brands
  ansible: AnsibleIcon,
  angular: AngularIcon,
  css: CssIcon,
  docker: DockerIcon,
  figma: FigmaIcon,
  git: GitIcon,
  html: HtmlIcon,
  javascript: JavascriptIcon,
  kubernetes: KubernetesIcon,
  laravel: LaravelIcon,
  mysql: MysqlIcon,
  php: PhpIcon,
  postgresql: PostgresqlIcon,
  postman: PostmanIcon,
  react: ReactIcon,
  shopify: ShopifyIcon,
  symfony: SymfonyIcon,
  typescript: TypescriptIcon,
  vscode: VscodeIcon,
  wordpress: WordpressIcon,
};