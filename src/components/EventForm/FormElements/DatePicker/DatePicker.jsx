import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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

import { formatDateForm } from 'utils/format';

export const DatePicker = ({ meta, props: { name, setFieldValue } }) => {
  const [dataValue, setDataValue] = useState('');

  const { t } = useTranslation();
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  useEffect(() => {
    if (meta.value !== '') {
      setDataValue(meta.value);
    }
  }, [meta]);

  const calendarToggle = () => {
    setIsOpenCalendar(!isOpenCalendar);
  };

  const resetDate = () => {
    setDataValue('');
    setIsOpenCalendar(!isOpenCalendar);
  };

  const onClose = () => {
    setIsOpenCalendar(!isOpenCalendar);
  };

  return (
    <>
      <PickerD onClick={calendarToggle}>
        <TextPicker color={isOpenCalendar ? '#7b61ff' : '#3F3F3F'}>
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
            view="month"
            locale="en-En"
            calendarType="hebrew"
            name={name}
            showNeighboringMonth={false}
          />
          <BtnWrapper>
            <ButtonType2 type="button" onClick={resetDate}>
              {t('dateless')}
            </ButtonType2>
            <ButtonType1 type="button" onClick={onClose}>
              {t('choose_date')}
            </ButtonType1>
          </BtnWrapper>
        </PickerWrapper>
      )}
    </>
  );
};
