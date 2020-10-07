import React from 'react';
import './Tools.scss';

export default function Tools() {
  return (
    <div className="tools-container">
      <div className="container">
        <h2 className="heading-2-desktop">
          About my relationships with
          web-development
        </h2>
        <div className="tools-content">
          <div>
            <img src="images/html.svg" alt="Html icon" />
            <h4>I&apos;m in love with HTML</h4>
            <p className="paragraph-2">
              Hypertext Markup Language (HTML) is the standard markup
              language for creating web pages and web applications.
            </p>
          </div>
          <div>
            <img src="images/css.svg" alt="Html icon" />
            <h4>CSS is my best friend</h4>
            <p className="paragraph-2">
              Cascading Style Sheets (CSS)
              is a style sheet language used for describing the
              presentation of a document written in a markup language like HTML.
            </p>
          </div>
          <div>
            <img src="images/javascript.svg" alt="Html icon" />
            <h4>JavaScript is my passion</h4>
            <p className="paragraph-2">
              JavaScript is a high-level, interpreted programming language.
              It is a language which is also characterized as dynamic,
              weakly typed, prototype-based and multi-paradigm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
