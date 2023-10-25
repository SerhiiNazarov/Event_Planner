import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  Input,
  Textarea,
  Wrapper,
  SelectItem,
  PickerD,
  ArrowDown,
  ArrowUp,
  TextPicker,
  PickerWrapper,
  ReactCalendar,
  CancelBtn,
  BtnWrapper,
} from './CreateEventForm.styled';
import 'react-calendar/dist/Calendar.css';
import { StyledTimePicker } from 'components/TimePicker';
import { CloseBtn } from 'components/CloseBtn';
import { Label } from 'components/Label';

const categoryOpt = [
  { value: 'All', label: 'All' },
  { value: 'Art', label: 'Art' },
  { value: 'Music', label: 'Music' },
  { value: 'Business', label: 'Business' },
  { value: 'Conference', label: 'Conference' },
  { value: 'Workshop', label: 'Workshop' },
  { value: 'Party', label: 'Party' },
  { value: 'Sport', label: 'Sport' },
];

const priorityOpt = [
  { value: 'High', label: 'High' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Low', label: 'Low' },
];

const formatDate = date => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const result =
    day.toString().padStart(2, '0') +
    '.' +
    month.toString().padStart(2, '0') +
    '.' +
    year;
  return result;
};

export const CreateEventForm = () => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [isOpenTimePicker, setIsOpenTimePicker] = useState(false);
  const [dataValue, setDataValue] = useState(formatDate(new Date()));
  const [timeValue, setTimeValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [picture, setPicture] = useState('');

  const calendarToggle = () => {
    setIsOpenCalendar(!isOpenCalendar);
  };

  const timePickerToggle = () => {
    setIsOpenTimePicker(!isOpenTimePicker);
  };

  const resetDate = () => {
    setDataValue('Dateless');
    setIsOpenCalendar(!isOpenCalendar);
  };

  const onTitleInputChange = e => {
    setTitleValue(e.currentTarget.value);
  };

  const onLocationInputChange = e => {
    setLocationValue(e.currentTarget.value);
  };

  const onPictureInputChange = e => {
    setPicture(e.currentTarget.value);
  };

  const onDeleteInfo = setFun => {
    setFun('');
  };

  return (
    <Formik>
      {() => (
        <Wrapper>
          <Label>
            Title
            <Input
              type="text"
              value={titleValue}
              name="title"
              placeholder="Input"
              onChange={onTitleInputChange}
            />
            <CloseBtn onClickDelete={onDeleteInfo} setFun={setTitleValue} />
          </Label>

          <Label>
            Description
            <Textarea
              as="textarea"
              name="description"
              // onBlur={handleTextareaBlur}
              placeholder="Input"
            />
          </Label>
          <Label>
            Date
            <PickerD onClick={calendarToggle}>
              <TextPicker color={isOpenCalendar ? '#7b61ff' : '#aca7c3'}>
                {dataValue}
              </TextPicker>
              {isOpenCalendar ? <ArrowUp /> : <ArrowDown />}
            </PickerD>
            {isOpenCalendar && (
              <PickerWrapper>
                <ReactCalendar
                  //   onChange={(date, event) => console.log(date)}
                  onClickDay={date => {
                    setDataValue(formatDate(date));
                  }}
                  // view="month"
                  locale="en-En"
                  calendarType="hebrew"
                  minDate={new Date()}
                  showNeighboringMonth={false}
                  // showFixedNumberOfWeeks={true}
                />
                <BtnWrapper>
                  <CancelBtn type="button" onClick={resetDate}>
                    Dateless
                  </CancelBtn>
                </BtnWrapper>
              </PickerWrapper>
            )}
          </Label>
          <Label>
            Time
            {/* <PickerD onClick={timePickerToggle}>
                  <TextPicker color={isOpenTimePicker ? '#7b61ff' : '#aca7c3'}>
                    {timeValue}
                  </TextPicker>
                  {isOpenTimePicker ? <ArrowUp /> : <ArrowDown />}
                </PickerD>
                {isOpenTimePicker && (
                  <PickerWrapper>
                    <StyledTimePicker />
                  </PickerWrapper>
                )} */}
            <StyledTimePicker />
          </Label>
          <Label>
            Location
            <Input
              type="text"
              value={locationValue}
              name="location"
              placeholder="Input Location"
              onChange={onLocationInputChange}
            />
            <CloseBtn onClickDelete={onDeleteInfo} setFun={setLocationValue} />
          </Label>
          <Label>
            Category
            <SelectItem
              name="category"
              className="сustom-select-container"
              classNamePrefix="сustom-select"
              // defaultValue={optionMesure.find(
              //   ({ value }) => value === ingredient.measure
              // )}
              // isSearchable={false}
              options={categoryOpt}
              // onChange={option => {
              //   if (!option) return;
              //   return (values.ingredients[idx].measure = option.value);
              // }}
              placeholder="Select Category"
              // idx={idx}
            />
          </Label>
          <Label>
            Add picture
            <Input
              type="text"
              value={picture}
              name="picture"
              placeholder="Input"
              onChange={onPictureInputChange}
            />
            <CloseBtn onClickDelete={onDeleteInfo} setFun={setPicture} />
          </Label>
          <Label>
            Priority
            <SelectItem
              name="priority"
              className="сustom-select-container"
              classNamePrefix="сustom-select"
              // defaultValue={optionMesure.find(
              //   ({ value }) => value === ingredient.measure
              // )}
              // isSearchable={false}
              options={priorityOpt}
              // onChange={option => {
              //   if (!option) return;
              //   return (values.ingredients[idx].measure = option.value);
              // }}
              placeholder="Select Priority"
              // idx={idx}
            />
          </Label>
        </Wrapper>
      )}
    </Formik>
  );
};
