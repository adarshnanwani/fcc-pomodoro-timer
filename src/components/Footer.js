import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="grid">
        <p className="copyright">Copyright 2020 Adarsh Nanwani</p>
        <ul className="social">
          <li>
            <a
              href="https://github.com/adarshnanwani"
              target="_blank"
              className="button"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/AdyNanwani"
              target="_blank"
              className="button"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
