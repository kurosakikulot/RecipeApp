import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer black footer">
      <div className="container">
        <div className="row">
          <div className="footer-copyright col s4">
            <h6>© 2020 Copyright Reserved</h6>
          </div>
          <div className="col s4">
            <h6> Follow Me </h6>
            <a
              className="footer-icon"
              href="https://www.facebook.com/Kurosakikulot"
            >
              <i className="fab fa-facebook-square small"></i>
            </a>
            <a className="footer-icon" href="https://github.com/kurosakikulot">
              <i className="fab fa-github small"></i>
            </a>{" "}
          </div>
          <div className="col s4">
            <h6 className="white-text">Powered by: </h6>
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
    </footer>
  );
}
