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
      id="high"
      xmlns="http://www.w3.org/2000/svg"
      width="95"
      height="95"
      viewBox="0 0 95 95"
    >
      <path
        id="Path"
        d="M2,20a2,2,0,0,1-2-2V2A2,2,0,0,1,4,2V18A2,2,0,0,1,2,20Z"
        transform="translate(45 75)"
        fill="#b1ade3"
      />
      <path
        id="Path-2"
        data-name="Path"
        d="M38,4H2A2,2,0,0,1,2,0H38a2,2,0,0,1,0,4Z"
        transform="translate(27 91)"
        fill="#b1ade3"
      />
      <path
        id="Path-3"
        data-name="Path"
        d="M89.063,63H5.938A5.929,5.929,0,0,1,0,57.094V5.906A5.929,5.929,0,0,1,5.938,0H21.771a1.969,1.969,0,1,1,0,3.938H5.938A1.977,1.977,0,0,0,3.958,5.906V57.094a1.977,1.977,0,0,0,1.979,1.969H89.063a1.977,1.977,0,0,0,1.979-1.969V5.906a1.977,1.977,0,0,0-1.979-1.969H85.1A1.969,1.969,0,1,1,85.1,0h3.958A5.929,5.929,0,0,1,95,5.906V57.094A5.929,5.929,0,0,1,89.063,63Z"
        transform="translate(0 16)"
        fill="#b1ade3"
      />
      <path
        id="Shape"
        d="M14.865,46.42.584,32.139a1.976,1.976,0,0,1-.071-2.731l11.7-12.986C20.518,6.825,33.7.211,44.978,0A1.87,1.87,0,0,1,46.42.58,1.979,1.979,0,0,1,47,2.02c-.215,11.284-6.825,24.465-16.453,32.8L17.592,46.492A1.953,1.953,0,0,1,16.27,47,1.993,1.993,0,0,1,14.865,46.42Z"
        transform="translate(34)"
        fill="#b1ade3"
      />
      <path
        id="Path-4"
        data-name="Path"
        d="M4.807,25a1.936,1.936,0,0,1-.542-.076,1.993,1.993,0,0,1-1.4-1.468L.055,11.589A2.017,2.017,0,0,1,1.528,9.163a1.986,1.986,0,0,1,2.4,1.488L5.8,18.528C9.256,13.065,9.949,6.07,10.021,1.975A2.1,2.1,0,0,1,12.048,0,2.005,2.005,0,0,1,14,2.047c-.167,9.517-2.932,17.458-7.787,22.361A1.968,1.968,0,0,1,4.807,25Z"
        transform="translate(51 31)"
        fill="#b1ade3"
      />
      <path
        id="Path-5"
        data-name="Path"
        d="M13.877,14a1.891,1.891,0,0,1-.467-.056L1.543,11.128A1.981,1.981,0,0,1,.59,7.787C5.494,2.931,13.43.167,22.952,0A2.1,2.1,0,0,1,25,1.956a2,2,0,0,1-1.975,2.027c-4.1.072-11.086.761-16.549,4.222l7.876,1.868a1.987,1.987,0,0,1,1.488,2.4A2.018,2.018,0,0,1,13.877,14Z"
        transform="translate(25 16)"
        fill="#b1ade3"
      />
      <path
        id="Shape-2"
        data-name="Shape"
        d="M.584,20.417a1.994,1.994,0,0,1-.5-1.984c.659-2.2,4.08-13.325,6.763-16.007A8.293,8.293,0,0,1,18.576,14.153c-2.682,2.679-13.8,6.108-16.008,6.767A2.14,2.14,0,0,1,2,21,2,2,0,0,1,.584,20.417Z"
        transform="translate(22 38)"
        fill="#534ce9"
      />
    </svg>
  ),
  "Out of the box": (
    <svg
      id="outofbox"
      xmlns="http://www.w3.org/2000/svg"
      width="97"
      height="97"
      viewBox="0 0 97 97"
    >
      <path
        id="Shape"
        d="M18.578,68a3.056,3.056,0,0,1-3.062-3.05V55.166A29.307,29.307,0,0,1,29.5,0,29.355,29.355,0,0,1,43.485,55.242V64.95A3.055,3.055,0,0,1,40.423,68Z"
        transform="translate(18 20)"
        fill="#b1ade3"
      />
      <path
        id="Path"
        d="M20.923,0H3.077A3.039,3.039,0,0,0,0,3,3.039,3.039,0,0,0,3.077,6H20.923A3.039,3.039,0,0,0,24,3,3.039,3.039,0,0,0,20.923,0Z"
        transform="translate(37 91)"
        fill="#534ce9"
      />
      <rect
        id="Rectangle"
        width="6"
        height="13"
        transform="translate(46)"
        fill="#b1ade3"
      />
      <rect
        id="Rectangle-2"
        data-name="Rectangle"
        width="13"
        height="6"
        transform="translate(0 46)"
        fill="#b1ade3"
      />
      <path
        id="Rectangle-3"
        data-name="Rectangle"
        d="M0,0H13V6H0Z"
        transform="translate(84 46)"
        fill="#b1ade3"
      />
      <path
        id="Rectangle-4"
        data-name="Rectangle"
        d="M0,0,6.2.012l.025,12.941-6.2-.012Z"
        transform="translate(12.128 16.339) rotate(-45.324)"
        fill="#b1ade3"
      />
      <path
        id="Rectangle-5"
        data-name="Rectangle"
        d="M0,0,12.941.025l.012,6.2L.012,6.2Z"
        transform="translate(71.281 21.02) rotate(-44.676)"
        fill="#b1ade3"
      />
    </svg>
  ),
  "Easy on the bundle": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="97"
      height="81"
      viewBox="0 0 97 81"
    >
      <g id="bundle" transform="translate(0.5 0.5)">
        <path
          id="Path"
          d="M86,71H78a1.972,1.972,0,1,1,0-3.944h8a5.966,5.966,0,0,0,6-5.917V17.75a5.966,5.966,0,0,0-6-5.917H40a2.029,2.029,0,0,1-1.416-.576L31.172,3.944H10A5.966,5.966,0,0,0,4,9.861V61.139a5.966,5.966,0,0,0,6,5.917h8A1.972,1.972,0,1,1,18,71H10A9.943,9.943,0,0,1,0,61.139V9.861A9.943,9.943,0,0,1,10,0H32a2.029,2.029,0,0,1,1.416.576l7.412,7.313H86A9.943,9.943,0,0,1,96,17.75V61.139A9.943,9.943,0,0,1,86,71Z"
          fill="#b1ade3"
          stroke="#b1ade3"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="Path-2"
          data-name="Path"
          d="M1.5,35C.672,35,0,34.1,0,33V2C0,.9.672,0,1.5,0S3,.9,3,2V33C3,34.108,2.328,35,1.5,35Z"
          transform="translate(47 32)"
          fill="#b1ade3"
          stroke="#b1ade3"
          stroke-width="1"
        />
        <path
          id="Path-3"
          data-name="Path"
          d="M12,14a2.009,2.009,0,0,1-1.416-.584l-10-10A2,2,0,0,1,3.413.585L12,9.171,20.587.585a2,2,0,0,1,2.828,2.829l-10,10A1.993,1.993,0,0,1,12,14Z"
          transform="translate(37 54)"
          fill="#b1ade3"
          stroke="#b1ade3"
          stroke-width="1"
        />
        <path
          id="Path-4"
          data-name="Path"
          d="M34,15H6A5.829,5.829,0,0,1,0,9.375v-7.5A1.941,1.941,0,0,1,2,0,1.941,1.941,0,0,1,4,1.875v7.5A1.944,1.944,0,0,0,6,11.25H34a1.944,1.944,0,0,0,2-1.875v-7.5a2,2,0,0,1,4,0v7.5A5.829,5.829,0,0,1,34,15Z"
          transform="translate(28 65)"
          fill="#534ce9"
          stroke="#b1ade3"
          stroke-width="1"
        />
      </g>
    </svg>
  ),
  Middleware: (
    <svg
      id="middle"
      xmlns="http://www.w3.org/2000/svg"
      width="93"
      height="92"
      viewBox="0 0 93 92"
    >
      <path
        id="Rectangle"
        d="M0,0,6.1.012l.023,11.9L.023,11.9Z"
        transform="translate(59.191 49.457) rotate(-65.19)"
        fill="#b1ade3"
      />
      <path
        id="Rectangle-2"
        data-name="Rectangle"
        d="M0,0,14.542.026l.011,6.1L.011,6.1Z"
        transform="matrix(0.926, -0.379, 0.379, 0.926, 20.856, 48.042)"
        fill="#b1ade3"
      />
      <path
        id="Rectangle-3"
        data-name="Rectangle"
        d="M0,0,12.752.031l.015,6.1L.015,6.1Z"
        transform="matrix(0.807, -0.591, 0.591, 0.807, 55.505, 26.983)"
        fill="#b1ade3"
      />
      <path
        id="Rectangle-4"
        data-name="Rectangle"
        d="M0,0,6.109.015,6.138,11.5.029,11.488Z"
        transform="matrix(0.77, -0.638, 0.638, 0.77, 30.167, 21.838)"
        fill="#b1ade3"
      />
      <rect
        id="Rectangle-5"
        data-name="Rectangle"
        width="6.124"
        height="18.482"
        transform="translate(44.664 53.377) rotate(-1.576)"
        fill="#b1ade3"
      />
      <path
        id="Shape"
        d="M0,13.5A13.5,13.5,0,1,1,13.5,27,13.515,13.515,0,0,1,0,13.5Z"
        transform="translate(13)"
        fill="#b1ade3"
      />
      <path
        id="Shape-2"
        data-name="Shape"
        d="M0,13.5A13.5,13.5,0,1,1,13.5,27,13.514,13.514,0,0,1,0,13.5Z"
        transform="translate(63 2)"
        fill="#b1ade3"
      />
      <path
        id="Shape-3"
        data-name="Shape"
        d="M0,13.5A13.5,13.5,0,1,1,13.5,27,13.514,13.514,0,0,1,0,13.5Z"
        transform="translate(0 40)"
        fill="#b1ade3"
      />
      <path
        id="Shape-4"
        data-name="Shape"
        d="M0,13.5A13.5,13.5,0,1,1,13.5,27,13.514,13.514,0,0,1,0,13.5Z"
        transform="translate(35 65)"
        fill="#b1ade3"
      />
      <path
        id="Shape-5"
        data-name="Shape"
        d="M0,13.5A13.5,13.5,0,1,1,13.5,27,13.515,13.515,0,0,1,0,13.5Z"
        transform="translate(66 43)"
        fill="#b1ade3"
      />
      <path
        id="Shape-6"
        data-name="Shape"
        d="M0,17A16.775,16.775,0,0,1,16.5,0,16.775,16.775,0,0,1,33,17,16.775,16.775,0,0,1,16.5,34,16.775,16.775,0,0,1,0,17Z"
        transform="translate(32 23)"
        fill="#b1ade3"
      />
      <circle
        id="Oval"
        cx="6.5"
        cy="6.5"
        r="6.5"
        transform="translate(42 34)"
        fill="#534ce9"
      />
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

const introSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="350"
    height="350"
    viewBox="0 0 784 784"
  >
    <g
      id="Group_55"
      data-name="Group 55"
      transform="translate(-14536.268 -1244.298)"
    >
      <g
        id="Group_36"
        data-name="Group 36"
        transform="translate(14536.268 1244.298)"
      >
        <path
          id="Path_18"
          data-name="Path 18"
          d="M90.106,0H464.6A90.106,90.106,0,0,1,554.71,90.106V464.6A90.106,90.106,0,0,1,464.6,554.71H90.106A90.106,90.106,0,0,1,0,464.6V90.106A90.106,90.106,0,0,1,90.106,0Z"
          transform="translate(405.689 0) rotate(47)"
          fill="var(--svg-intro-background-color)"
        />
        <g
          id="Group_34"
          data-name="Group 34"
          transform="translate(132.509 138.836)"
        >
          <g
            id="Group_31"
            data-name="Group 31"
            transform="translate(94.257 0) rotate(13)"
          >
            <path
              id="Path_21"
              data-name="Path 21"
              d="M57.374,46.411v65.78h104.7v46.046H57.374V266.042H0V0H174.681V46.411Z"
              transform="matrix(0.839, 0.545, -0.545, 0.839, 144.897, 100.754)"
              fill="var(--svg-intro-fill-color)"
            />
            <path
              id="Path_20"
              data-name="Path 20"
              d="M57.374,46.411v65.78h104.7v46.046H57.374V266.042H0V0H174.681V46.411Z"
              transform="matrix(-0.839, -0.545, 0.545, -0.839, 291.001, 318.259)"
              fill="var(--svg-intro-fill-color)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [starCount, setStarCount] = React.useState(0);

  React.useEffect(() => {
    fetch("https://api.github.com/repos/formstjs/formst")
      .then((response) => response.json())
      .then((data) => setStarCount(data.stargazers_count));
  }, []);

  return (
    <Layout
      title={`${siteConfig.title} | Model-driven Form Library for React`}
      description="Model-driven Form Library for React"
    >
      <Head>
        <meta
          name="keywords"
          content="React, JavaScript, Open Source, OSS, JS Library, Form, Forms, MST, MobX-State-Tree, Flat Form, Stepper Form, Nested Form"
        />
        <meta property="og:url" content="https://formst.geekyants.com/" />
        <meta property="og:title" content="Formst" />
        <meta
          property="og:description"
          content="A JS library for quickly building high-performance forms in React."
        />
        <meta property="og:site_name" content="Formst" />
        <meta name="twitter:image:alt" content="Formst JS Library" />
        <meta
          property="og:image"
          content="https://formst.geekyants.com/img/og-icon.png"
        ></meta>
        <meta
          name="twitter:image"
          content="https://formst.geekyants.com/img/og-icon.png"
        ></meta>
      </Head>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--7 ">
              <h1 className="hero__title hero__title--left">
                Model-driven Form Library <br />
                for React
              </h1>
              <p class="hero__subtitle hero__subtitle--left">
                Based on{" "}
                <a
                  href="https://mobx-state-tree.js.org/intro/welcome"
                  target="__blank"
                  class="text-white hover-text-white"
                  style={{ fontWeight: 600 }}
                >
                  MobX-State-Tree
                </a>{" "}
                to validate <br />& structure forms in React
              </p>
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    "button button--lg button--outline button--secondary "
                  )}
                  to={useBaseUrl("docs/")}
                >
                  Get Started
                </Link>

                <a href="https://github.com/formstjs/formst">
                  <div className="githubStarsConatiner">
                    <img
                      className="githubStarsImage"
                      src="/img/github_logo.png"
                    ></img>
                    <p id="stars" className="githubStarsText">
                      {starCount}
                    </p>
                    <p className="githubStarsText">stars</p>
                  </div>
                </a>
              </div>
            </div>
            {/* <div className="col col--1 hero-image"></div> */}
            <div className="col col--5 hero-image">{introSvg}</div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <h1 className="hero__title  text--center feature_section_padding">
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
              width="100%"
              height="600"
              frameBorder="0"
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
