import React from 'react';
import TimePicker from 'rc-time-picker';

import 'rc-time-picker/assets/index.css';
import { CloseBtn } from 'components/CloseBtn';

const DeliTimePicker = ({ className }) => (
  <TimePicker
    className={className}
    popupClassName={className}
    showSecond={false}
    // onChange={onChange}
    hideDisabledOptions
    minuteStep={1}
    // clearIcon={<CloseBtn />}

    // value={value}
  />
);

export default DeliTimePicker;
