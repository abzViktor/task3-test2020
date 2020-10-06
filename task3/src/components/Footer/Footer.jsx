import React from 'react';
import Logo from '../Logo/Logo';
import './Footer.scss';
import { boolean } from '@storybook/addon-knobs';

export default function Footer() {
  const defaultLink = 'localhost:3000';

  return (
    <footer>
      <div className="container">
        <div className="top-footer">
          <div className="logo-container">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <a href={defaultLink}><Logo /></a>
          </div>
          <nav>
            <ul>
              <li><a className="secondary" href={defaultLink}>About me</a></li>
              <li><a className="secondary" href={defaultLink}>Relationships</a></li>
              <li><a className="secondary" href={defaultLink}>Users</a></li>
              <li><a className="secondary" href={defaultLink}>Sign up</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="middle-footer">
          <div className="flex footer-contacts-container">
            <div className="footer-contacts">
              <div>
                <a className="contact-link" href="mailto:work.of.future@gmail.com">
                  <svg width="24px" height="18px" viewBox="0 0 24 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>mail</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="mail" fill="#FFFFFF" fillRule="nonzero">
                        <path d="M12,12 L9,9.4 L0.54,16.68 C0.866201973,16.9751046 1.29012116,17.1389725 1.73,17.14 L22.27,17.14 C22.7073374,17.141329 23.1289494,16.9769718 23.45,16.68 L15,9.4 L12,12 Z" id="Shape" />
                        <path d="M23.46,0.46 C23.133798,0.16489541 22.7098788,0.0010274873 22.27,2.628411e-16 L1.73,2.628411e-16 C1.29071508,-0.00167652558 0.867834678,0.166758888 0.55,0.47 L12,10.29 L23.46,0.46 Z" id="Shape" />
                        <polygon id="Shape" points="0 1.5 0 15.75 8.29 8.71" />
                        <polygon id="Shape" points="15.71 8.71 24 15.75 24 1.5" />
                      </g>
                    </g>
                  </svg>
                  work.of.future@gmail.com
                </a>
              </div>
              <div>
                <a href="tel:+38 (050) 789 24 98" className="contact-link">
                  <svg width="16px" height="28px" viewBox="0 0 16 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>cellphone</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="cellphone" transform="translate(-1.000000, -1.000000)" fill="#FFFFFF" fillRule="nonzero">
                        <path d="M14.54,28.12 C15.1983329,28.1338691 15.8336713,27.8777603 16.2983409,27.4112018 C16.7630104,26.9446434 17.0165397,26.3082712 17,25.65 L17,3.47 C17.0165397,2.81172879 16.7630104,2.17535661 16.2983409,1.70879818 C15.8336713,1.24223974 15.1983329,0.986130854 14.54,1 L3.46,1 C2.80166711,0.986130854 2.16632868,1.24223974 1.70165914,1.70879818 C1.23698961,2.17535661 0.983460258,2.81172879 1,3.47 L1,25.65 C0.983460258,26.3082712 1.23698961,26.9446434 1.70165914,27.4112018 C2.16632868,27.8777603 2.80166711,28.1338691 3.46,28.12 L14.54,28.12 Z M9,27.09 C8.32068976,27.09 7.77,26.5393102 7.77,25.86 C7.77,25.1806898 8.32068976,24.63 9,24.63 C9.67931024,24.63 10.23,25.1806898 10.23,25.86 C10.23,26.5393102 9.67931024,27.09 9,27.09 Z M5.92,2.5 C5.91994966,2.42662478 5.94976459,2.35638915 6.00258333,2.30545679 C6.05540208,2.25452443 6.12667511,2.22728238 6.2,2.23 L11.8,2.23 C11.9508172,2.22990379 12.0746137,2.34927899 12.08,2.5 L12.08,2.58 C12.0800503,2.65337522 12.0502354,2.72361085 11.9974167,2.77454321 C11.9445979,2.82547557 11.8733249,2.85271762 11.8,2.85 L6.2,2.85 C6.0491828,2.85009621 5.9253863,2.73072101 5.92,2.58 L5.92,2.5 Z M2.23,4.08 L15.77,4.08 L15.77,23.77 L2.23,23.77 L2.23,4.08 Z" id="Shape" />
                      </g>
                    </g>
                  </svg>
                  +38 (050) 789 24 98
                </a>
              </div>
              <div>
                <a href="tel:+38 (095) 556 08 45" className="contact-link">
                  <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>phone</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="phone" transform="translate(-1.000000, -1.000000)" fill="#FFFFFF" fillRule="nonzero">
                        <path d="M5,9.67 C6.63875251,12.8035952 9.19640481,15.3612475 12.33,17 L14.78,14.56 C15.0447716,14.2234982 15.5133179,14.1264121 15.89,14.33 C17.172896,14.7893687 18.5274372,15.0162543 19.89,15 C20.1939534,14.9642379 20.4975473,15.0696327 20.7139573,15.2860427 C20.9303673,15.5024527 21.0357621,15.8060466 21,16.11 L21,19.89 C21.0357621,20.1939534 20.9303673,20.4975473 20.7139573,20.7139573 C20.4975473,20.9303673 20.1939534,21.0357621 19.89,21 C14.8784332,21.0053145 10.0705993,19.0168305 6.52688443,15.4731156 C2.98316955,11.9294007 0.994685503,7.12156683 1,2.11 C0.964237915,1.80604663 1.06963274,1.50245274 1.28604274,1.28604274 C1.50245274,1.06963274 1.80604663,0.964237915 2.11,1 L6,1 C6.30395337,0.964237915 6.60754726,1.06963274 6.82395726,1.28604274 C7.04036726,1.50245274 7.14576209,1.80604663 7.11,2.11 C7.11301768,3.47100709 7.33935839,4.82229492 7.78,6.11 C7.86871201,6.49443712 7.78863529,6.89846054 7.56,7.22 L5,9.67 Z" id="Shape" />
                      </g>
                    </g>
                  </svg>
                  +38 (095) 556 08 45
                </a>

              </div>
            </div>
            <div className="other-links">
              <ul>
                <li><a className="secondary" href={defaultLink}>News</a></li>
                <li><a className="secondary" href={defaultLink}>Blog</a></li>
                <li><a className="secondary" href={defaultLink}>Partners</a></li>
                <li><a className="secondary" href={defaultLink}>Shop</a></li>
              </ul>
              <ul>
                <li><a className="secondary" href={defaultLink}>Overview</a></li>
                <li><a className="secondary" href={defaultLink}>Design</a></li>
                <li><a className="secondary" href={defaultLink}>Code</a></li>
                <li><a className="secondary" href={defaultLink}>Collaborate</a></li>
              </ul>
              <ul>
                <li><a className="secondary" href={defaultLink}>Tutorials</a></li>
                <li><a className="secondary" href={defaultLink}>Resources</a></li>
                <li><a className="secondary" href={defaultLink}>Guides</a></li>
                <li><a className="secondary" href={defaultLink}>Examples</a></li>
              </ul>
              <ul>
                <li><a className="secondary" href={defaultLink}>FAQ</a></li>
                <li><a className="secondary" href={defaultLink}>Terms</a></li>
                <li><a className="secondary" href={defaultLink}>Conditions</a></li>
                <li><a className="secondary" href={defaultLink}>Help</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="copyright">
            <span>
              © abz.agency specially for the test task
            </span>
          </div>
          <div className="lang">
            <button type="button" className="inactive">DE</button>
            <button type="button" className="active">EN</button>
          </div>
          <div className="social-networks">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="social-link" href="#">
              <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>twitter</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g stroke="none" strokeWidth="1">
                  <g id="twitter" fill="#FFFFFF" fillRule="nonzero">
                    <path d="M19.46,7.28306304e-16 L6.52,7.28306304e-16 C2.92138684,0.00550668626 0.00550668626,2.92138684 0,6.52 L0,19.52 C0.0274315433,23.1029825 2.93691658,25.9946179 6.52,26 L19.52,26 C23.1107807,25.9725091 26.0056043,23.0508815 26,19.46 L26,6.52 C25.9780675,2.92042909 23.0596212,0.0109076877 19.46,7.28306304e-16 Z M19.46,9.73 L19.46,10.16 C19.4602817,12.6562666 18.4591612,15.048311 16.680925,16.8002308 C14.9026889,18.5521506 12.4959849,19.5174976 10,19.48 C8.19000448,19.4867595 6.41622306,18.9730224 4.89,18 C5.15,18 5.4,18 5.67,18 C7.16223419,18.0132772 8.61479321,17.5196892 9.79,16.6 C8.37561454,16.5831002 7.12725167,15.6719157 6.68,14.33 C6.88427783,14.3697436 7.09189196,14.3898353 7.3,14.39 C7.60084102,14.3921681 7.90047618,14.3517678 8.19,14.27 C6.66427306,13.9526392 5.57050009,12.6083839 5.57,11.05 C6.0217923,11.3070617 6.53033511,11.4479418 7.05,11.46 C5.59406692,10.5233733 5.13165333,8.60765978 6,7.11 C7.7046071,9.15917995 10.1880503,10.4027143 12.85,10.54 C12.7856439,10.2953301 12.7553582,10.0429497 12.76,9.79 C12.7652348,8.91217787 13.1210623,8.07285034 13.7483257,7.45873325 C14.375589,6.84461615 15.2222639,6.50664339 16.1,6.52 C17.01496,6.51037738 17.8949546,6.87103093 18.54,7.52 C19.2825303,7.37679112 19.9936288,7.1025103 20.64,6.71 C20.3847923,7.47073445 19.86727,8.11586494 19.18,8.53 C19.8393074,8.44842923 20.4829326,8.26983166 21.09,8 C20.6493718,8.67188324 20.0902844,9.25807788 19.44,9.73 L19.46,9.73 Z" id="Shape" />
                  </g>
                </g>
              </svg>
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="social-link" href="#">
              <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>facebook</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g stroke="none" strokeWidth="1">
                  <g id="facebook" fill="#FFFFFF" fillRule="nonzero">
                    <path d="M19.48,0 L6.5,0 C2.90919977,0.0164928064 0.00546111025,2.92916605 0,6.52 L0,19.52 C0.0273388392,23.0952131 2.92471965,25.9836789 6.5,26 L19.5,26 C23.0908002,25.9835072 25.9945389,23.0708339 26,19.48 L26,6.48 C25.9725685,2.89701754 23.0630834,0.00538210981 19.48,0 Z M16.48,13 L14,13 L14,21.05 L10.94,21.05 L10.94,13 L9.29,13 L9.29,9.7 L10.73,9.7 L10.73,8.3 C10.6658193,7.37030647 11.0101041,6.45882183 11.6728924,5.80371807 C12.3356806,5.1486143 13.2511181,4.81498213 14.18,4.89 L16.71,4.89 L16.71,7.63 L14.92,7.63 C14.63,7.63 14.24,7.82 14.24,8.46 L14.24,9.7 L16.78,9.7 L16.48,13 Z" id="Shape" />
                  </g>
                </g>
              </svg>
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="social-link" href="#">
              <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>linkedin</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="linkedin" fill="#FFFFFF" fillRule="nonzero">
                    <path d="M19.46,7.28306304e-16 L6.52,7.28306304e-16 C2.92138684,0.00550668626 0.00550668626,2.92138684 0,6.52 L0,19.52 C0.0274315433,23.1029825 2.93691658,25.9946179 6.52,26 L19.52,26 C23.1107807,25.9725091 26.0056043,23.0508815 26,19.46 L26,6.52 C25.9780675,2.92042909 23.0596212,0.0109076877 19.46,7.28306304e-16 Z M8.66,21 L5,21 L5,10.31 L8.66,10.31 L8.66,21 Z M6.78,8.66 C5.73065898,8.66 4.88,7.80934102 4.88,6.76 C4.88,5.71065898 5.73065898,4.86 6.78,4.86 C7.82934102,4.86 8.68,5.71065898 8.68,6.76 C8.66391582,7.80260607 7.82260607,8.64391582 6.78,8.66 Z M21.05,21 L17.94,21 L17.94,15.84 C17.94,14.58 17.77,12.97 16.06,12.97 C14.35,12.97 14.06,14.33 14.06,15.75 L14.06,21 L10.93,21 L10.93,10.31 L13.81,10.31 L13.81,11.75 L13.9,11.75 C14.6007249,10.7200391 15.8111802,10.1590027 17.05,10.29 C20.45,10.29 21.05,12.29 21.05,15.15 L21.05,21 Z" id="Shape" />
                  </g>
                </g>
              </svg>
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="social-link" href="#">
              <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>instagram</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="instagram" fill="#FFFFFF" fillRule="nonzero">
                    <path d="M15.3,11.32 C14.7722708,10.5663332 13.9100607,10.1174981 12.99,10.1174981 C12.0699393,10.1174981 11.2077292,10.5663332 10.68,11.32 C10.3310448,11.8109066 10.1424294,12.3977102 10.14,13 C10.14,14.5740115 11.4159885,15.8499999 12.99,15.8499999 C14.5640115,15.8499999 15.84,14.5740115 15.84,13 C15.8375706,12.3977102 15.6489552,11.8109066 15.3,11.32 Z" id="Shape" />
                    <path d="M17.09,11.34 C17.3171443,11.8634612 17.4296627,12.4294627 17.42,13 C17.42,15.4466214 15.4366214,17.43 12.99,17.43 C10.5433786,17.43 8.56,15.4466214 8.56,13 C8.54894702,12.4325683 8.66155427,11.869532 8.89,11.35 L6.39,11.35 L6.39,18 C6.43576145,18.8661414 7.13335431,19.5550685 8,19.59 L18,19.59 C18.8588477,19.5451003 19.5451003,18.8588477 19.59,18 L19.59,11.34 L17.09,11.34 Z" id="Shape" />
                    <polygon id="Shape" points="18.84 6.76 16.45 6.76 16.45 9.51 19.18 9.51 19.18 7.11 19.18 6.74" />
                    <path d="M19.46,7.28306304e-16 L6.52,7.28306304e-16 C2.92138684,0.00550668626 0.00550668626,2.92138684 0,6.52 L0,19.52 C0.0274315433,23.1029825 2.93691658,25.9946179 6.52,26 L19.52,26 C23.1107807,25.9725091 26.0056043,23.0508815 26,19.46 L26,6.52 C25.9780675,2.92042909 23.0596212,0.0109076877 19.46,7.28306304e-16 Z M21,11.32 L21,18 C21,19.6568542 19.6568542,21 18,21 L8,21 C6.34314575,21 5,19.6568542 5,18 L5,8 C5,6.34314575 6.34314575,5 8,5 L18,5 C19.6568542,5 21,6.34314575 21,8 L21,11.3 L21,11.32 Z" id="Shape" />
                  </g>
                </g>
              </svg>
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="social-link" href="#">
              <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>pinterest</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="pinterest" fill="#FFFFFF" fillRule="nonzero">
                    <path d="M19.48,0 L6.5,0 C2.90919977,0.0164928064 0.00546111025,2.92916605 0,6.52 L0,19.52 C0.0273388392,23.0952131 2.92471965,25.9836789 6.5,26 L19.5,26 C23.0908002,25.9835072 25.9945389,23.0708339 26,19.48 L26,6.48 C25.9725685,2.89701754 23.0630834,0.00538210981 19.48,0 Z M14.3,16.61 C13.3922361,16.6221996 12.5348986,16.1935309 12,15.46 C12,15.46 11.44,17.6 11.32,18.01 C10.9217186,19.1231301 10.3329528,20.1585458 9.58,21.07 C9.56067003,21.1445584 9.48455844,21.18933 9.41,21.17 C9.33544156,21.15067 9.29067003,21.0745584 9.31,21 C9.11363262,19.8248132 9.11363262,18.6251868 9.31,17.45 C9.49,16.68 10.55,12.37 10.55,12.37 C10.3416799,11.9116819 10.2358855,11.413424 10.24,10.91 C10.24,9.52 11.06,8.49 12.09,8.49 C12.45579,8.47941767 12.8083672,8.62713527 13.0573736,8.89529597 C13.3063799,9.16345668 13.4276118,9.52599494 13.39,9.89 C13.2081478,11.0159435 12.9270523,12.1235937 12.55,13.2 C12.4342718,13.6566014 12.54755,14.1409651 12.8537706,14.4988852 C13.1599911,14.8568053 13.62099,15.0436746 14.09,15 C15.91,15 17.15,12.73 17.15,10.05 C17.15,8.05 15.72,6.48 13.15,6.48 C11.9200004,6.40863989 10.714718,6.84585185 9.81652758,7.68920538 C8.91833715,8.53255892 8.40616379,9.70794755 8.4,10.94 C8.36538152,11.6034004 8.57930964,12.2558812 9,12.77 C9.15667616,12.8932016 9.21364218,13.1047896 9.14,13.29 C9.14,13.45 9,13.87 8.94,14.03 C8.92057673,14.133319 8.85308778,14.2212013 8.75828084,14.2666296 C8.6634739,14.3120579 8.55269494,14.3095957 8.46,14.26 C7.11190535,13.6058248 6.31384622,12.1812892 6.46,10.69 C6.46,8.05 8.77,4.87 13.33,4.87 C17.01,4.87 19.42,7.45 19.42,10.21 C19.48,13.89 17.4,16.61 14.3,16.61 Z" id="Shape" />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
