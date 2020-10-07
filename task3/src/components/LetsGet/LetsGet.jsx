import React from 'react';
import './LetsGet.scss';
import '../Typography/Typography.css';

export default function LetsGetComponent() {
  return (
    <div className="lets-container">
      <div className="container">
        <h2 className="heading-2-desktop">Let&apos;s get acquainted</h2>
        <div className="lets-block">
          <div className="lets-image-holder">
            <picture>
              <source srcSet="images/man-cool.svg" />
              <img src="images/man-cool.svg" alt="Cool man from lets get as block" />
            </picture>
          </div>
          <div className="lets-text-block">
            <h4 className="heading-3-desktop">I am cool frontend developer</h4>
            <p className="paragraph-2">
              When real users have a slow experience on mobile, they&apos;re much
              less likely to find
              what they are looking for or purchase from you in the future. For many
              sites this equates to a huge missed opportunity, especially when more
              than half of visits are abandoned if a mobile page takes over 3 seconds to load.
            </p>
            <p className="paragraph-2">
              Last week, Google Search and Ads teams announced two new speed
              initiatives to help improve user-experience on the web.
            </p>
            <a className="text-link" rel="stylesheet" href="">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
