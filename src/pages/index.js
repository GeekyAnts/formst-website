import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Head from "@docusaurus/Head";

const SVGs = {
  "High-performance": (
    <svg
      width="95px"
      height="95px"
      viewBox="0 0 95 95"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <title>high</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="LandingPage-Formst-Light"
          transform="translate(-186.000000, -1136.000000)"
          fill-rule="nonzero"
        >
          <g id="high" transform="translate(186.000000, 1136.000000)">
            <path
              d="M47,95 C45.896,95 45,94.104 45,93 L45,77 C45,75.896 45.896,75 47,75 C48.104,75 49,75.896 49,77 L49,93 C49,94.104 48.104,95 47,95 Z"
              id="Path"
              fill="var(--svg-fill-color)"
            ></path>
            <path
              d="M65,95 L29,95 C27.896,95 27,94.104 27,93 C27,91.896 27.896,91 29,91 L65,91 C66.104,91 67,91.896 67,93 C67,94.104 66.104,95 65,95 Z"
              id="Path"
              fill="var(--svg-fill-color)"
            ></path>
            <path
              d="M89.0625,79 L5.9375,79 C2.66395833,79 0,76.3500625 0,73.09375 L0,21.90625 C0,18.6499375 2.66395833,16 5.9375,16 L21.7708333,16 C22.8633333,16 23.75,16.882 23.75,17.96875 C23.75,19.0555 22.8633333,19.9375 21.7708333,19.9375 L5.9375,19.9375 C4.84895833,19.9375 3.95833333,20.8195 3.95833333,21.90625 L3.95833333,73.09375 C3.95833333,74.1805 4.84895833,75.0625 5.9375,75.0625 L89.0625,75.0625 C90.1510417,75.0625 91.0416667,74.1805 91.0416667,73.09375 L91.0416667,21.90625 C91.0416667,20.8195 90.1510417,19.9375 89.0625,19.9375 L85.1041667,19.9375 C84.0116667,19.9375 83.125,19.0555 83.125,17.96875 C83.125,16.882 84.0116667,16 85.1041667,16 L89.0625,16 C92.3360417,16 95,18.6499375 95,21.90625 L95,73.09375 C95,76.3500625 92.3360417,79 89.0625,79 Z"
              id="Path"
              fill="var(--svg-fill-color)"
            ></path>
            <path
              d="M50.2704279,47 C49.7622466,47 49.2540652,46.805457 48.8649888,46.4203413 L34.5842981,32.1392972 C33.8339366,31.3928873 33.8021752,30.1898969 34.5128351,29.4077547 L46.2129173,16.4210171 C54.5185066,6.82488596 67.6954909,0.210424058 78.9787055,0 C79.6417233,0.0079405305 80.0427102,0.202483528 80.4198761,0.579658726 C80.8010121,0.96080419 81.011431,1.48090894 80.9995205,2.02086501 C80.7851314,13.3043588 74.1748034,26.4856395 64.5471484,34.8192262 L51.5924935,46.491806 C51.2192978,46.8332489 50.7428778,47 50.2704279,47 L50.2704279,47 Z M38.7251823,30.6663288 L50.3418909,42.2833249 L61.9268382,31.8454976 C70.1689049,24.7109309 75.9931399,13.8165231 76.9102485,4.09334347 C67.1912797,5.01444501 56.3011116,10.8348539 49.1905425,19.0493327 L38.7251823,30.6663288 Z"
              id="Shape"
              fill="var(--svg-fill-color)"
            ></path>
            <path
              d="M55.806558,56 C55.6273163,56 55.4440914,55.9758648 55.2648497,55.923572 C54.5677985,55.7264682 54.0340565,55.1673371 53.8667642,54.45535 L51.0546607,42.5888978 C50.7997391,41.5068383 51.4609419,40.4247788 52.528426,40.1633146 C53.6038764,39.8978278 54.6753436,40.5736122 54.9302651,41.6516492 L56.7983623,49.5277554 C60.2557361,44.0651649 60.9488041,37.069992 61.0205008,32.9750603 C61.0404165,31.8688656 62.0083218,31.0563154 63.0479239,31 C64.14329,31.0201126 65.0195829,31.9412711 64.9996671,33.0474658 C64.8323749,42.5647627 62.0680691,50.5052293 57.2126098,55.4086887 C56.8342106,55.7948512 56.3243675,56 55.806558,56 L55.806558,56 Z"
              id="Path"
              fill="var(--svg-fill-color)"
            ></path>
            <path
              d="M38.8769617,30 C38.7240999,30 38.5672155,29.9840683 38.4103311,29.944239 L26.5434337,27.1283073 C25.8314199,26.9610242 25.2722677,26.4312945 25.0751566,25.7342817 C24.8780454,25.0412518 25.0751566,24.2964438 25.5900592,23.7866287 C30.4937026,18.9314367 38.4304445,16.1672831 47.9521212,16 C49.0020399,16.055761 49.9795505,16.85633 49.9996638,17.9556188 C50.0197772,19.0549075 49.1347883,19.9630156 48.0245294,19.9829303 C43.9294441,20.054623 36.9380313,20.74367 31.4752358,24.2048364 L39.3516376,26.0728307 C40.4337377,26.3277383 41.1015021,27.4031294 40.8400281,28.4745377 C40.6147582,29.3866287 39.7901094,30 38.8769617,30 Z"
              id="Path"
              fill="var(--svg-fill-color)"
            ></path>
            <path
              d="M23.9969287,59 C23.4739587,59 22.9629652,58.7964072 22.5837122,58.4171657 C22.0647344,57.8982036 21.8731118,57.1357285 22.084695,56.4331337 C22.7433976,54.2295409 26.164659,43.1077844 28.8473751,40.4251497 C32.0849982,37.1916168 37.3386505,37.1916168 40.5762736,40.4251497 C43.8099046,43.6586826 43.8059124,48.9201597 40.5762736,52.1536926 C37.8935575,54.8323353 26.7714639,58.261477 24.5678043,58.9201597 C24.3841659,58.9720559 24.1885512,59 23.9969287,59 Z M34.7158165,41.99002 C33.6179788,41.99002 32.5121569,42.4051896 31.6738081,43.243513 C30.5440333,44.3772455 28.5878862,49.3792415 27.066882,53.9341317 C31.6259025,52.4091816 36.6280501,50.4610778 37.7578249,49.3273453 C39.4305303,47.6506986 39.4305303,44.9201597 37.7578249,43.247505 C36.915484,42.4091816 35.8176463,41.99002 34.7158165,41.99002 L34.7158165,41.99002 Z"
              id="Shape"
              fill="#5650D8"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  "Out of the box": (
    <svg
      width="97px"
      height="97px"
      viewBox="0 0 97 97"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <title>outofbox</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="LandingPage-Formst-Light"
          transform="translate(-832.000000, -1134.000000)"
          fill-rule="nonzero"
        >
          <g id="outofbox" transform="translate(832.000000, 1134.000000)">
            <path
              d="M47.5005622,20 C31.234426,20 18,33.1770982 18,49.37527 C18,60.2391168 24.0276253,70.153478 33.5159393,75.1664558 L33.5159393,84.950748 C33.5159393,86.6349279 34.8868337,88 36.5781971,88 L58.4229274,88 C60.1142907,88 61.4851852,86.6358609 61.4851852,84.950748 L61.4851852,75.2416607 C70.9723747,70.0984272 77,60.1504757 77,49.37527 C77,33.1782179 63.7666984,20 47.5005622,20 Z M57.1418017,70.5935108 C56.0567054,71.0915802 55.3604822,72.173001 55.3604822,73.3634036 L55.3604822,81.9014959 L39.6406423,81.9014959 L39.6406423,73.2616997 C39.6406423,72.0573011 38.9271774,70.9644969 37.8216536,70.4755716 C29.5012706,66.7929559 24.1248904,58.5099632 24.1248904,49.37527 C24.1248904,36.5406061 34.611343,26.0986907 47.5007496,26.0986907 C60.3901563,26.0986907 70.8756718,36.5406061 70.8756718,49.37527 C70.8756718,58.4377441 65.4846738,66.7666435 57.1418017,70.5935108 Z"
              id="Shape"
              fill="var(--svg-fill-color)"
            ></path>
            <path
              d="M57.9231252,91 L40.0768748,91 C38.3774381,91 37,92.3430233 37,94 C37,95.6569767 38.3774381,97 40.0768748,97 L57.9231252,97 C59.6225619,97 61,95.6569767 61,94 C61,92.3430233 59.6227502,91 57.9231252,91 Z"
              id="Path"
              fill="#5650D8"
            ></path>
            <rect
              id="Rectangle"
              fill="var(--svg-fill-color)"
              x="46"
              y="0"
              width="6"
              height="13"
            ></rect>
            <rect
              id="Rectangle"
              fill="var(--svg-fill-color)"
              x="0"
              y="46"
              width="13"
              height="6"
            ></rect>
            <rect
              id="Rectangle"
              fill="var(--svg-fill-color)"
              x="84"
              y="46"
              width="13"
              height="6"
            ></rect>
            <polygon
              id="Rectangle"
              fill="var(--svg-fill-color)"
              transform="translate(18.923687, 18.678001) rotate(-45.324114) translate(-18.923687, -18.678001) "
              points="15.8092457 12.2012907 22.012806 12.2134302 22.0381292 25.1547122 15.834569 25.1425727"
            ></polygon>
            <polygon
              id="Rectangle"
              fill="var(--svg-fill-color)"
              transform="translate(78.076470, 18.680675) rotate(-44.675886) translate(-78.076470, -18.680675) "
              points="71.5997592 15.5662336 84.5410413 15.5915568 84.5531808 21.795117 71.6118988 21.7697938"
            ></polygon>
          </g>
        </g>
      </g>
    </svg>
  ),
  "Easy on the bundle": (
    <svg
      width="98px"
      height="81px"
      viewBox="0 0 98 81"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <title>bundle</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="LandingPage-Formst-Light"
          transform="translate(-1153.000000, -1135.000000)"
          fill-rule="nonzero"
        >
          <g id="bundle" transform="translate(1154.000000, 1136.000000)">
            <path
              d="M86,71 L78,71 C76.896,71 76,70.1164444 76,69.0277778 C76,67.9391111 76.896,67.0555556 78,67.0555556 L86,67.0555556 C89.308,67.0555556 92,64.4009444 92,61.1388889 L92,17.75 C92,14.4879444 89.308,11.8333333 86,11.8333333 L40,11.8333333 C39.468,11.8333333 38.96,11.6242778 38.584,11.2574444 L31.172,3.94444444 L10,3.94444444 C6.692,3.94444444 4,6.59905556 4,9.86111111 L4,61.1388889 C4,64.4009444 6.692,67.0555556 10,67.0555556 L18,67.0555556 C19.104,67.0555556 20,67.9391111 20,69.0277778 C20,70.1164444 19.104,71 18,71 L10,71 C4.484,71 0,66.5743333 0,61.1388889 L0,9.86111111 C0,4.42566667 4.484,0 10,0 L32,0 C32.532,0 33.04,0.209055556 33.416,0.575888889 L40.828,7.88888889 L86,7.88888889 C91.516,7.88888889 96,12.3145556 96,17.75 L96,61.1388889 C96,66.5743333 91.516,71 86,71 Z"
              id="Path"
              stroke="var(--svg-fill-color)"
              fill="var(--svg-fill-color)"
            ></path>
            <path
              d="M48.5,67 C47.672,67 47,66.104 47,65 L47,34 C47,32.896 47.672,32 48.5,32 C49.328,32 50,32.896 50,34 L50,65 C50,66.108 49.328,67 48.5,67 Z"
              id="Path"
              fill="var(--svg-fill-color)"
            ></path>
            <path
              d="M49.0020002,68 C48.4899575,68 47.9779148,67.803958 47.5858822,67.4158748 L37.5850488,57.4137315 C36.8049837,56.6335643 36.8049837,55.3652926 37.5850488,54.5851254 C38.3651138,53.8049582 39.6332194,53.8049582 40.4132844,54.5851254 L49.0020002,63.1709652 L57.5867156,54.5851254 C58.3667806,53.8049582 59.6348862,53.8049582 60.4149512,54.5851254 C61.1950163,55.3652926 61.1950163,56.6335643 60.4149512,57.4137315 L50.4141178,67.4158748 C50.0260855,67.803958 49.5140428,68 49.0020002,68 L49.0020002,68 Z"
              id="Path"
              fill="var(--svg-fill-color)"
            ></path>
            <path
              d="M62,80 L34,80 C30.692,80 28,77.47625 28,74.375 L28,66.875 C28,65.84 28.896,65 30,65 C31.104,65 32,65.84 32,66.875 L32,74.375 C32,75.41 32.9,76.25 34,76.25 L62,76.25 C63.1,76.25 64,75.41 64,74.375 L64,66.875 C64,65.84 64.896,65 66,65 C67.104,65 68,65.84 68,66.875 L68,74.375 C68,77.47625 65.308,80 62,80 Z"
              id="Path"
              fill="#5650D8"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  Middleware: (
    <svg
      width="93px"
      height="94px"
      viewBox="0 0 93 94"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <title>middle</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="LandingPage-Formst-Light"
          transform="translate(-511.000000, -1137.000000)"
        >
          <g id="middle" transform="translate(511.000000, 1137.000000)">
            <polygon
              id="Rectangle"
              fill="var(--svg-fill-color)"
              fill-rule="nonzero"
              transform="translate(65.882009, 49.179980) rotate(-65.190444) translate(-65.882009, -49.179980) "
              points="62.8230711 43.2221818 68.9180733 43.2339314 68.9409459 55.1377774 62.8459437 55.1260278"
            ></polygon>
            <path
              d="M26.5000977,0 C19.0557553,0 13,6.05555998 13,13.4999023 C13,20.9442447 19.05556,27 26.5000977,27 C33.9434634,27 40,20.94444 40,13.4999023 C40,6.05555998 33.94444,0 26.5000977,0 Z M26.5000977,20.5199922 C22.6292818,20.5199922 19.4800078,17.3707182 19.4800078,13.4999023 C19.4800078,9.62928184 22.6292818,6.47981249 26.5000977,6.47981249 C30.3707182,6.47981249 33.5201875,9.62908652 33.5201875,13.4999023 C33.5199922,17.3707182 30.3707182,20.5199922 26.5000977,20.5199922 Z"
              id="Shape"
              fill="var(--svg-fill-color)"
              fill-rule="nonzero"
            ></path>
            <path
              d="M76.4999023,2 C69.05556,2 63,8.05555998 63,15.5000977 C63,22.9446354 69.05556,29 76.4999023,29 C83.9442447,29 90,22.9432681 90,15.5000977 C90,8.05653662 83.94444,2 76.4999023,2 Z M76.4999023,22.5199922 C72.6292818,22.5199922 69.4798125,19.3707182 69.4798125,15.4999023 C69.4798125,11.6290865 72.6290865,8.47981249 76.4999023,8.47981249 C80.3707182,8.47981249 83.5199922,11.6290865 83.5199922,15.4999023 C83.5199922,19.3707182 80.3707182,22.5199922 76.4999023,22.5199922 Z"
              id="Shape"
              fill="var(--svg-fill-color)"
              fill-rule="nonzero"
            ></path>
            <path
              d="M13.4999023,40 C6.05555998,40 0,46.05556 0,53.5000977 C0,60.9446354 6.05555998,67 13.4999023,67 C20.9432681,67 27,60.94444 27,53.5000977 C27,46.0557553 20.9442447,40 13.4999023,40 Z M13.4999023,60.5199922 C9.62928184,60.5199922 6.47981249,57.3707182 6.47981249,53.4999023 C6.47981249,49.6292818 9.62908652,46.4798125 13.4999023,46.4798125 C17.3707182,46.4798125 20.5199922,49.6290865 20.5199922,53.4999023 C20.5197969,57.3707182 17.3705228,60.5199922 13.4999023,60.5199922 Z"
              id="Shape"
              fill="var(--svg-fill-color)"
              fill-rule="nonzero"
            ></path>
            <path
              d="M49.4999023,67 C42.05556,67 36,73.05556 36,80.4999023 C36,87.9442447 42.05556,94 49.4999023,94 C56.9442447,94 63,87.94444 63,80.4999023 C63,73.05556 56.94444,67 49.4999023,67 Z M49.4999023,87.5199922 C45.6292818,87.5199922 42.4800078,84.3707182 42.4800078,80.4999023 C42.4800078,76.6292818 45.6292818,73.4798125 49.4999023,73.4798125 C53.3707182,73.4798125 56.5199922,76.6290865 56.5199922,80.4999023 C56.5199922,84.3707182 53.3707182,87.5199922 49.4999023,87.5199922 Z"
              id="Shape"
              fill="var(--svg-fill-color)"
              fill-rule="nonzero"
            ></path>
            <path
              d="M79.5000977,43 C72.0557553,43 66,49.05556 66,56.5000977 C66,63.9446354 72.05556,70 79.5000977,70 C86.9434634,70 93,63.94444 93,56.5000977 C93,49.0557553 86.9446354,43 79.5000977,43 Z M79.5000977,63.5199922 C75.6292818,63.5199922 72.4800078,60.3707182 72.4800078,56.4999023 C72.4800078,52.6290865 75.6292818,49.4798125 79.5000977,49.4798125 C83.3707182,49.4798125 86.5201875,52.6290865 86.5201875,56.4999023 C86.5201875,60.3707182 83.3709135,63.5199922 79.5000977,63.5199922 Z"
              id="Shape"
              fill="var(--svg-fill-color)"
              fill-rule="nonzero"
            ></path>
            <polygon
              id="Rectangle"
              fill="var(--svg-fill-color)"
              fill-rule="nonzero"
              transform="translate(28.749558, 48.120807) rotate(-22.246131) translate(-28.749558, -48.120807) "
              points="21.4733673 45.0601804 36.0149357 45.0858817 36.0257481 51.1814339 21.4841797 51.1557325"
            ></polygon>
            <polygon
              id="Rectangle"
              fill="var(--svg-fill-color)"
              fill-rule="nonzero"
              transform="translate(47.979365, 62.530769) rotate(-1.575867) translate(-47.979365, -62.530769) "
              points="44.9174602 53.2895954 51.0386963 53.2904435 51.0412701 71.7719436 44.9200339 71.7710954"
            ></polygon>
            <polygon
              id="Rectangle"
              fill="var(--svg-fill-color)"
              fill-rule="nonzero"
              transform="translate(62.466503, 25.683164) rotate(-36.235048) translate(-62.466503, -25.683164) "
              points="56.0830038 22.6170589 68.8352919 22.6477583 68.8500029 28.74927 56.0977147 28.7185706"
            ></polygon>
            <polygon
              id="Rectangle"
              fill="var(--svg-fill-color)"
              fill-rule="nonzero"
              transform="translate(36.197806, 24.312309) rotate(-39.611906) translate(-36.197806, -24.312309) "
              points="33.1288574 18.5608029 39.2382286 18.5759591 39.2667546 30.0638149 33.1573835 30.0486588"
            ></polygon>
            <path
              d="M48.5004549,23 C39.4020766,23 32,30.6261717 32,40 C32,49.3738283 39.4020766,57 48.5004549,57 C57.5988332,57 65,49.3738283 65,40 C65,30.6261717 57.5988332,23 48.5004549,23 Z M48.5004549,50.7804649 C42.7313552,50.7804649 38.036774,45.9446944 38.036774,40 C38.036774,34.056243 42.7304454,29.2195351 48.5004549,29.2195351 C54.2695546,29.2195351 58.963226,34.0553056 58.963226,40 C58.963226,45.943757 54.2695546,50.7804649 48.5004549,50.7804649 Z"
              id="Shape"
              fill="var(--svg-fill-color)"
              fill-rule="nonzero"
            ></path>
            <circle
              id="Oval"
              fill="#5650D8"
              cx="48.5"
              cy="40.5"
              r="6.5"
            ></circle>
          </g>
        </g>
      </g>
    </svg>
  ),
};

const features = [
  {
    title: "High-performance",
    imageUrl: "img/High.svg",
    description: <> MST-based, making it fast and powerful. </>,
  },
  {
    title: "Middleware",
    imageUrl: "img/Middleware.svg",
    description: <>Use middleware to intercept and manipulate input</>,
  },
  {
    title: "Out of the box",
    imageUrl: "img/Responsive.svg",
    description: <>Get various validations for fields right out of the box</>,
  },
  {
    title: "Easy on the bundle",
    imageUrl: "img/form.svg",
    description: <>1.7KB, that's all</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--3", styles.feature)}>
      {imgUrl && (
        <div className="text--center " style={{ minHeight: "120px" }}>
          {SVGs[title]}
        </div>
      )}
      <div className="text--center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="High-performance Form Builder for React and Javascript"
    >
      <Head>
        <meta
          name="keywords"
          content="React, JavaScript, Open Source, OSS, JS Library, Form, Forms, MST, MobX-State-Tree, Flat Form, Stepper Form, Nested Form"
        />
        <meta property="og:url" content="https://formstjs.github.io/formst/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="Formst" />
        <meta
          property="og:description"
          content="A JS library for quickly building high-performance forms in React."
        />
        <meta property="og:site_name" content="Formst" />
        <meta name="twitter:image:alt" content="Formst JS Library" />
      </Head>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--5 padding-top--lg">
              <h1 className="hero__title hero__title--left">
                High-performance Form Builder for React and Javascript
              </h1>
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    "button button--lg button--secondary ",
                    styles.getStarted
                  )}
                  style={{ color: "var(--ifm-color-primary)" }}
                  to={useBaseUrl("docs/")}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col col--7 hero-image">
              <img
                style={{ height: "28rem" }}
                src="img/intro.png"
                alt="Introduction"
              ></img>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <h1 className="hero__title  text--center padding-bottom--xl">
                Why Formst?
              </h1>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.exampleSection}>
          <div className="container text--center">
            <div className={styles.exampleWrapper}>
              <h3 className="hero__title">Login Form Example</h3>
              <div className={styles.exampleDescription}>
                <p>
                  Let's take a quick look at Formst in action. This is a simple
                  login form with two inputs that are validated on submission
                  and it can display specific error messages for invalid input
                  values. It's this easy.
                </p>
              </div>
            </div>

            <iframe
              src="https://codesandbox.io/embed/formst-demo-ffw8v?fontsize=14&hidenavigation=1&theme=dark"
              height="600"
              width="100%"
              title="formst-demo"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
