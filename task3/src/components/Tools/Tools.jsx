import React from 'react';
import './Tools.scss';

export default function Tools() {
  return (
    <div className="tools-container">
      <div className="container">
        <div className="heading-holder">
          <h2 className="heading-2-desktop">
            About my relationships with
            web&#8209;development
          </h2>
        </div>
        <div className="tools-content">
          <div>
            <img src="images/html.svg" alt="Html icon" />
            <div>
              <h3 className="heading-3-desktop">I&apos;m in love with HTML</h3>
              <p className="paragraph-2">
                Hypertext Markup Language (HTML) is the standard markup
                language for creating web pages and web applications.
              </p>
            </div>
          </div>
          <div className="css-block">
            <img src="images/css.svg" alt="Html icon" />
            <div>
              <h3 className="heading-3-desktop">CSS is my best friend</h3>
              <p className="paragraph-2">
                Cascading Style Sheets (CSS)
                is a style sheet language used for describing the
                presentation of a document written in a markup language like HTML.
              </p>
            </div>
          </div>
          <div className="js-block">
            <img src="images/javascript.svg" alt="Html icon" />
            <div>
              <h3 className="heading-3-desktop">JavaScript is my passion</h3>
              <p className="paragraph-2">
                JavaScript is a high-level, interpreted programming language.
                It is a language which is also characterized as dynamic,
                weakly typed, prototype-based and multi-paradigm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
