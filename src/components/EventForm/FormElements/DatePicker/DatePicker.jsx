import React, { useState } from 'react';
import {
  PickerD,
  TextPicker,
  PickerWrapper,
  ReactCalendar,
  BtnWrapper,
  ArrowDown,
  ArrowUp,
} from './DatePicker.styled';
import { ButtonType1 } from 'components/ButtonType1';
import { ButtonType2 } from 'components/ButtonType2';

import { formatDate, formatDateForm } from 'utils/format';

export const DatePicker = ({
  props: { name, values, setFieldValue, setFieldTouched },
}) => {
  const [dataValue, setDataValue] = useState('');
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const calendarToggle = () => {
    setIsOpenCalendar(!isOpenCalendar);
  };

  const resetDate = () => {
    setDataValue('Dateless');
    setIsOpenCalendar(!isOpenCalendar);
  };

  const onClose = () => {
    setIsOpenCalendar(!isOpenCalendar);
  };

  return (
    <>
      <PickerD onClick={calendarToggle}>
        <TextPicker color={isOpenCalendar ? '#7b61ff' : '#aca7c3'}>
          {dataValue}
        </TextPicker>
        {isOpenCalendar ? <ArrowUp /> : <ArrowDown />}
      </PickerD>

      {isOpenCalendar && (
        <PickerWrapper>
          <ReactCalendar
            onChange={(date, event) => setDataValue(formatDateForm(date))}
            onClickDay={async date => {
              await setFieldValue('date', formatDateForm(date));
            }}
            defaultValue={new Date()}
            activeStartDate={new Date()}
            // view="month"

            locale="en-En"
            calendarType="hebrew"
            // minDate={new Date()}
            name={name}
            showNeighboringMonth={false}
            // showFixedNumberOfWeeks={true}
          />
          <BtnWrapper>
            <ButtonType2 type="button" onClick={resetDate}>
              Dateless
            </ButtonType2>
            <ButtonType1 type="button" onClick={onClose}>
              Choose date
            </ButtonType1>
          </BtnWrapper>
        </PickerWrapper>
      )}
    </>
  );
};
