import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 pt-[96px] pb-[80px]">
      <div className="container footer sm:footer-horizontal  text-base-content p-10">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-black font-poppins font-bold">
            Company
          </h6>
          <Link to={"/about"} className="link link-hover">
            About
          </Link>
          <Link to={"/careers"} className="link link-hover">
            Careers
          </Link>
          <Link to={"/mobile"} className="link link-hover">
            Mobile
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <Link to={"/help/faq"} className="link link-hover">
            Help/FAQ
          </Link>
          <Link to={"/press"} className="link link-hover">
            Press
          </Link>
          <Link to={"/affilates"} className="link link-hover">
            Affilates
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">More</h6>
          <Link to={"/airlinefees"} className="link link-hover">
            Airlinefees
          </Link>
          <Link to={"/airline"} className="link link-hover">
            Airline
          </Link>
          <Link to={"/low fare tips"} className="link link-hover">
            Low fare tips
          </Link>
        </nav>
        <nav>
          <ul className="flex justify-center gap-3 items-center">
            <li>
              <a
                href="/"
                className="rounded-full flex bg-white social_icon_hover size-10 transition all duration-100 hover:size-11 items-center justify-center group"
              >
                <svg
                  width="7"
                  height="13"
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.10837 2.24446C5.78831 2.14321 5.42023 2.0757 5.08417 2.0757C4.66809 2.0757 3.77191 2.36259 3.77191 2.91948V4.25266H5.90033V6.49712H3.77191V12.6905H1.6275V6.49712H0.571289V4.25266H1.6275V3.12199C1.6275 1.41755 2.36364 0 4.13999 0C4.7481 0 5.83632 0.0337513 6.42843 0.253134L6.10837 2.24446Z"
                    fill="#080809"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="rounded-full flex bg-white social_icon_hover size-10 transition all duration-100 hover:size-11 items-center justify-center group"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_511)">
                    <path
                      d="M13.6562 0H2.34375C1.05156 0 0 1.05156 0 2.34375V13.6562C0 14.9487 1.05156 16 2.34375 16H13.6562C14.9487 16 16 14.9487 16 13.6562V2.34375C16 1.05156 14.9487 0 13.6562 0ZM15.0625 13.6562C15.0625 14.4316 14.4316 15.0625 13.6562 15.0625H2.34375C1.56844 15.0625 0.9375 14.4316 0.9375 13.6562V2.34375C0.9375 1.56844 1.56844 0.9375 2.34375 0.9375H13.6562C14.4316 0.9375 15.0625 1.56844 15.0625 2.34375V13.6562Z"
                      fill="white"
                    />
                    <path
                      d="M13.1562 1.90625C12.6394 1.90625 12.2188 2.32687 12.2188 2.84375C12.2188 3.36063 12.6394 3.78125 13.1562 3.78125C13.6731 3.78125 14.0938 3.36063 14.0938 2.84375C14.0938 2.32687 13.6731 1.90625 13.1562 1.90625Z"
                      fill="white"
                    />
                    <path
                      d="M8 3.78125C5.67375 3.78125 3.78125 5.67375 3.78125 8C3.78125 10.3263 5.67375 12.2188 8 12.2188C10.3263 12.2188 12.2188 10.3263 12.2188 8C12.2188 5.67375 10.3263 3.78125 8 3.78125ZM8 11.2812C6.19062 11.2812 4.71875 9.80937 4.71875 8C4.71875 6.19062 6.19062 4.71875 8 4.71875C9.80937 4.71875 11.2812 6.19062 11.2812 8C11.2812 9.80937 9.80937 11.2812 8 11.2812Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_511">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="rounded-full flex bg-white social_icon_hover size-10 transition all duration-100 hover:size-11 items-center justify-center group"
              >
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:fill-white transition-all duration-100 "
                    d="M16 1.539C15.405 1.8 14.771 1.973 14.11 2.057C14.79 1.651 15.309 1.013 15.553 0.244C14.919 0.622 14.219 0.889 13.473 1.038C12.871 0.397 12.013 0 11.077 0C9.261 0 7.799 1.474 7.799 3.281C7.799 3.541 7.821 3.791 7.875 4.029C5.148 3.896 2.735 2.589 1.114 0.598C0.831 1.089 0.665 1.651 0.665 2.256C0.665 3.392 1.25 4.399 2.122 4.982C1.595 4.972 1.078 4.819 0.64 4.578C0.64 4.588 0.64 4.601 0.64 4.614C0.64 6.208 1.777 7.532 3.268 7.837C3.001 7.91 2.71 7.945 2.408 7.945C2.198 7.945 1.986 7.933 1.787 7.889C2.212 9.188 3.418 10.143 4.852 10.174C3.736 11.047 2.319 11.573 0.785 11.573C0.516 11.573 0.258 11.561 0 11.528C1.453 12.465 3.175 13 5.032 13C11.068 13 14.368 8 14.368 3.666C14.368 3.521 14.363 3.381 14.356 3.242C15.007 2.78 15.554 2.203 16 1.539Z"
                    fill="#080809"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <h3>Discover our app</h3>
          <div className="grid grid-cols-2 gap-2">
            <a href="https://play.google.com/store/apps?hl=en">
              <img src="GooglePlay.svg" alt="image" />
            </a>
            <a href="https://www.apple.com/store">
              <img src="PlayStore.svg" alt="image" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
