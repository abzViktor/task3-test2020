import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import styles from '../users.module.scss';

export default function UserInfo(props) {
  const {
    name, email, position, phone,
  } = props;
  const [tip, setTip] = React.useState('');
  const refText = React.useRef(null);
  const refBlock = React.useRef(null);
  React.useEffect(() => {
    if (refText.current.offsetWidth > refBlock.current.offsetWidth + 4) {
      setTip(email);
    } else {
      setTip('');
    }
  });
  return (
    <div className={styles.userInfo} ref={refBlock}>
      <p className={styles.userName}>{name}</p>
      <p className="paragraph-3">{position}</p>
      <p>
        <Tooltip title={tip} placement="bottom">
          <Box
            component="a"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
            className="paragraph-3"
            href={`mailto:${email}`}
            ref={refText}
          >
            {email}
          </Box>
        </Tooltip>
      </p>
      <p>
        <a className="paragraph-3" href={`tel: ${phone}`}>
          {phone.toString().slice(0, 3)}
                    &nbsp;(0
          {phone.toString().slice(4, 6)}
          )&nbsp;
          {phone.toString().slice(6, 9)}
                    &nbsp;
          {phone.toString().slice(9, 11)}
                    &nbsp;
          {phone.toString().slice(11, 13)}
        </a>
      </p>
    </div>
  );
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
