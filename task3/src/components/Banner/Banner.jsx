import React from 'react';
import './Banner.scss';
import '../Button/Button.scss';
import '../Typography/Typography.css';

export default function Banner() {
  return (
    <div className="image-container">
      <picture>
        <source srcSet="banner/bg-3840.jpg" media="(min-width: 3840px)" />
        <source srcSet="banner/bg-2560.jpg" media="(min-width: 2560px)" />
        <source srcSet="banner/bg-1920.jpg" media="(min-width: 1920px)" />
        <source srcSet="banner/bg-1440.jpg" media="(min-width: 1440px)" />
        <source srcSet="banner/bg-1024.jpg" media="(min-width: 1024px)" />
        <source srcSet="banner/bg-992.jpg" media="(min-width: 992px)" />
        <source srcSet="banner/bg-768.jpg" media="(min-width: 768px)" />
        <source srcSet="banner/bg-320.jpg" media="(min-width: 320px)" />
        <img src="banner/bg-320.jpg" alt="" />
      </picture>
      <div className="banner-container">
        <div className="banner-text container">
          <div className="text-block">
            <h1 className="heading-1-desktop">
              Test assignment for
              <br />
              {' '}
              Frontend Developer
              <br />
              {' '}
              position
            </h1>
            <p className="paragraph-1">
              We kindly remind you that your test assignment should
              be submitted as a link to github/bitbucket repository.
              <span className="desktop-visible">
                Please be patient, we consider and respond to every application
                that meets minimum requirements. We look forward to your submission. Good luck!
              </span>
            </p>
            <button type="button" className="primary">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
