import React from 'react';
import { useTranslation } from 'react-i18next';

export default function RegistrationBanner() {
  const { t } = useTranslation();
  return (
    <div className="image-container">
      <picture>
        <source srcSet="reg-banner/bg-3840-x2.webp 2x ,reg-banner/bg-3840.webp 1x" media="(min-width: 3840px)" type="image/webp" />
        <source srcSet="reg-banner/bg-3840-x2.jpg 2x ,reg-banner/bg-3840.jpg 1x" media="(min-width: 3840px)" type="image/jpeg" />

        <source srcSet="reg-banner/bg-2560-x2.webp 2x ,reg-banner/bg-2560.webp 1x" media="(min-width: 2560px)" type="image/webp" />
        <source srcSet="reg-banner/bg-2560-x2.jpg 2x ,reg-banner/bg-2560.jpg 1x" media="(min-width: 2560px)" type="image/jpeg" />

        <source srcSet="reg-banner/bg-1920-x2.webp 2x ,reg-banner/bg-1920.webp 1x" media="(min-width: 1920px)" type="image/webp" />
        <source srcSet="reg-banner/bg-1920-x2.jpg 2x ,reg-banner/bg-1920.jpg 1x" media="(min-width: 1920px)" type="image/jpeg" />

        <source srcSet="reg-banner/bg-1440-x2.webp 2x ,reg-banner/bg-1440.webp 1x" media="(min-width: 1440px)" type="image/webp" />
        <source srcSet="reg-banner/bg-1440-x2.jpg 2x ,reg-banner/bg-1440.jpg 1x" media="(min-width: 1440px)" type="image/jpeg" />

        <source srcSet="reg-banner/bg-1024-x2.webp 2x ,reg-banner/bg-1024.webp 1x" media="(min-width: 1024px)" type="image/webp" />
        <source srcSet="reg-banner/bg-1024-x2.jpg 2x ,reg-banner/bg-1024.jpg 1x" media="(min-width: 1024px)" type="image/jpeg" />

        <source srcSet="reg-banner/bg-992-x2.webp 2x ,reg-banner/bg-992.webp 1x" media="(min-width: 992px)" type="image/webp" />
        <source srcSet="reg-banner/bg-992-x2.jpg 2x ,reg-banner/bg-992.jpg 1x" media="(min-width: 992px)" type="image/jpeg" />

        <source srcSet="reg-banner/bg-768-x2.webp 2x ,reg-banner/bg-768.webp 1x" media="(min-width: 500px)" type="image/webp" />
        <source srcSet="reg-banner/bg-768-x2.jpg 2x ,reg-banner/bg-768.jpg 1x" media="(min-width: 500px)" type="image/jpeg" />

        <source srcSet="reg-banner/bg-320-x2.webp 2x ,reg-banner/bg-320.webp 1x" media="(min-width: 320px)" type="image/webp" />
        <source srcSet="reg-banner/bg-320-x2.jpg 2x ,reg-banner/bg-320.jpg 1x" media="(min-width: 320px)" type="image/jpeg" />
        <img src="reg-banner/bg-1024.jpg" alt="Main banner of home page" />
      </picture>
      <div className="banner-container">
        <div className="registration-banner-text container">
          <div className="registration-text-block">
            <h1 className="heading-2-desktop">
              General requirements for the test task
            </h1>
            <div className="registration-banner-content">
              <div className="paragraphs-banner">
                <p className="paragraph-2">Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.</p>
                <p className="paragraph-2">If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.</p>
                <p className="paragraph-2">Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.</p>
              </div>
              <div className="image-container">
                <picture>
                  <source srcSet="images/man-laptop-v1.svg" media="(min-width: 320px) and (min-width: 1024px)" />
                  <source srcSet="images/man-laptop-v2.svg" media="(min-width: 500px)" />
                  <img src="images/man-laptop-v1.svg" alt="Man from registration page" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
