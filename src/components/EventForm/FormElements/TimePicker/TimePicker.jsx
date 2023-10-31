import React, { useState } from 'react';
import TimePicker from 'rc-time-picker';
import moment from 'moment';

import { formatTime } from 'utils/format';

import { PickerD, TextPicker, ArrowDown, ArrowUp } from './index';

import 'rc-time-picker/assets/index.css';

export const DeliTimePicker = ({
  className,
  props: { name, values, setFieldValue, setFieldTouched },
}) => {
  const [isOpenTimePicker, setIsOpenTimePicker] = useState(false);
  const [timeValue, setTimeValue] = useState('');

  const timePickerToggle = () => {
    setIsOpenTimePicker(!isOpenTimePicker);
  };

  return (
    <>
      <PickerD onClick={timePickerToggle}>
        <TextPicker color={isOpenTimePicker ? '#7b61ff' : '#aca7c3'}>
          {timeValue}
        </TextPicker>
        {isOpenTimePicker ? <ArrowUp /> : <ArrowDown />}
      </PickerD>
      {isOpenTimePicker && (
        <TimePicker
          className={className}
          popupClassName={className}
          showSecond={false}
          defaultValue={null}
          onClose={() => setIsOpenTimePicker(!isOpenTimePicker)}
          onChange={async value => {
            await setFieldValue('time', formatTime(value._d));
            setTimeValue(formatTime(value._d));
            setFieldTouched('time');
            // setShowTimePicker(true);
            // setIsValue(true);
          }}
          // open={isOpenTimePicker}
          // defaultValue="open"
          // onChange={onChange}

          hideDisabledOptions
          minuteStep={1}
          // format="hh:mm a"
          // use12Hours
          id="time"

          // value={value}
        />
      )}
    </>
  );
};
