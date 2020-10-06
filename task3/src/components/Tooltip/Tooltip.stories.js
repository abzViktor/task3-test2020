import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Tooltip from '@material-ui/core/Tooltip';
import './Tooltip.css';
import Box from '@material-ui/core/Box';

export default {
  component: Tooltip,
  title: 'Tooltips',
  decorators: [withKnobs],
};

export function TooltipStory() {
  const [tip, setTip] = React.useState('');
  const refText = React.useRef(null);
  const refBlock = React.useRef(null);
  React.useEffect(() => {
    if (refText.current.offsetWidth + 18 > refBlock.current.offsetWidth) {
      setTip(text('Text:', 'Lorem ipsum check asdasd adsadsad'));
    } else {
      setTip('');
    }
  });

  const checkWidth = () => {
    text('Text:', 'Lorem ipsum check asdasd adsadsad');
  };

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div ref={refBlock} className="p-holder">
      <Tooltip title={tip}>
        <Box
          component="div"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
          bgcolor="background.paper"
        >
          <span onChange={checkWidth} ref={refText}>{text('Text:', 'Lorem ipsum check asdasd adsadsad')}</span>
        </Box>
      </Tooltip>
    </div>
  );
}
