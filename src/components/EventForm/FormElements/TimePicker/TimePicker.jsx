import React, { useState, useEffect } from 'react';
import TimePicker from 'rc-time-picker';

import { useTranslation } from 'react-i18next';

import { formatTime } from 'utils/format';

import {
  PickerD,
  TextPicker,
  ArrowDown,
  ArrowUp,
  PickerWrapper,
  BtnWrapper,
} from './index';

import 'rc-time-picker/assets/index.css';
import { ButtonType1 } from 'components/ButtonType1';
import { ButtonType2 } from 'components/ButtonType2';

export const DeliTimePicker = ({
  className,
  meta,
  props: { name, values, setFieldValue, setFieldTouched },
}) => {
  const [isOpenTimePicker, setIsOpenTimePicker] = useState(false);
  const [timeValue, setTimeValue] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    if (meta.value !== '') {
      setTimeValue(meta.value);
    }
  }, [meta]);

  const timePickerToggle = () => {
    setIsOpenTimePicker(!isOpenTimePicker);
  };

  const resetTime = () => {
    setTimeValue('');

    setIsOpenTimePicker(!isOpenTimePicker);
  };

  const onClose = () => {
    setIsOpenTimePicker(!isOpenTimePicker);
  };

  return (
    <>
      <PickerD onClick={timePickerToggle}>
        <TextPicker color={isOpenTimePicker ? '#7b61ff' : '#3F3F3F'}>
          {timeValue}
        </TextPicker>
        {isOpenTimePicker ? <ArrowUp /> : <ArrowDown />}
      </PickerD>
      {isOpenTimePicker && (
        <PickerWrapper>
          <TimePicker
            className={className}
            popupClassName={className}
            showSecond={false}
            // onClose={() => setIsOpenTimePicker(!isOpenTimePicker)}
            onChange={async value => {
              await setFieldValue('time', formatTime(value._d));
              setTimeValue(formatTime(value._d));
              setFieldTouched('time');
              // setShowTimePicker(true);
              // setIsValue(true);
            }}
            // onClose={onClose}
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
          <BtnWrapper>
            <ButtonType2 type="button" onClick={resetTime}>
              {t('timeless')}
            </ButtonType2>
            <ButtonType1 type="button" onClick={onClose}>
              {t('choose_time')}
            </ButtonType1>
          </BtnWrapper>
        </PickerWrapper>
      )}
    </>
  );
};
