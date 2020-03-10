import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer black">
      <div className="container">
        <div className="row">
          <div className="col l6 s6">
            <h5 className="white-text">Follow Me</h5>
            <p className="grey-text text-lighten-4">
              <a
                className="footer-icon"
                href="https://www.facebook.com/Kurosakikulot"
              >
                <i className="fab fa-facebook-square small"></i>
              </a>
              <a
                className="footer-icon"
                href="https://github.com/kurosakikulot"
              >
                <i className="fab fa-github small"></i>
              </a>
            </p>
          </div>
          <div className="col l6 s6">
            <h5 className="white-text">Powered by</h5>
            <a
              className="grey-text text-lighten-4"
              href="https://www.edamam.com/"
              target="_blank"
            >
              edamam.com
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2020 Copyright Reserved</div>
      </div>
    </footer>
  );
}
