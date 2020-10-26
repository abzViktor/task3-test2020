import React from 'react';
import './404.scss';
import { ReactComponent as NotFoundImage } from './404-image.svg';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="container">
        <div className="not-found-content">
          <h1 className="heading-2-desktop">Page is not found</h1>
          <p className="paragraph-1">Definitely, something went wrong, we can't find the page you searched</p>
          <div className="image-404">
            <NotFoundImage />
          </div>
        </div>
      </div>
    </div>
  );
}
