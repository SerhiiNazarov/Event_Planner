import React, { useState } from 'react';
import { Formik } from 'formik';

import { categoryOpt, priorityOpt } from 'utils/options';

import { Wrapper, SubmitBtnWrp } from './EventForm.styled';
import 'react-calendar/dist/Calendar.css';

import { Label } from 'components/Label';
import { ButtonType1 } from 'components/ButtonType1';
import { FormInput } from 'components/EventForm/FormElements/FormInput';
import { TextInput } from 'components/EventForm/FormElements/TextInput';
import { FormSelect } from 'components/EventForm/FormElements/FormSelect';
import { DatePicker } from 'components/EventForm/FormElements/DatePicker';
import { StyledTimePicker } from 'components/EventForm/FormElements/TimePicker';

// import moment from 'moment';

// const getTimeForTimePicker = (value = new Date()) => {
//   const date = new Date(value);
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const result = moment().hour(hours).minute(minutes);
//   return result;
// };

const initialValuesCreateEvent = {
  title: '',
  description: '',
  date: '',
  time: '',
  location: '',
  category: '',
  picture: '',
  priority: '',
  // createAt: new Date(),
  // updateAt: new Date(),
};

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

export const formatDateForm = date => {
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

export const EventForm = ({
  action = 'createEvent',
  initialValues = initialValuesCreateEvent,
}) => {
  // const onTitleInputChange = e => {
  //   setTitleValue(e.currentTarget.value);
  // };

  // const onClose = () => {
  //   setIsOpenCalendar(!isOpenCalendar);
  // };

  // const onLocationInputChange = e => {
  //   setLocationValue(e.currentTarget.value);
  // };

  // const onPictureInputChange = e => {
  //   setPicture(e.currentTarget.value);
  // };

  // const onDeleteInfo = setFun => {
  //   setFun('');
  // };

  const handlerSubmit = (values, { resetForm }) => {
    //  const data = {
    //    ...values,
    //    ordersObj,
    //    totalPrice: totalPrice,
    //    shopName: 'Mac',
    //  };
    //  ordersData(data);
    //  setTotalPriceObj({});
    //  resetForm();
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handlerSubmit}>
      {props => {
        const { values, errors, handleChange, setFieldTouched, setFieldValue } =
          props;

        return (
          <Wrapper>
            <Label>
              Title
              <FormInput
                name="title"
                CustomComponent={TextInput}
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
              />
            </Label>

            <Label>
              Description
              <FormInput
                name="description"
                as="textarea"
                CustomComponent={TextInput}
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
              />
            </Label>

            <Label>
              Date
              <FormInput
                name="date"
                CustomComponent={DatePicker}
                // values={values}
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                handleChange={handleChange}
              />
            </Label>
            <Label>
              Time
              <FormInput
                name="time"
                CustomComponent={StyledTimePicker}
                // values={values}
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                handleChange={handleChange}
              />
            </Label>
            <Label>
              Location
              <FormInput
                name="location"
                CustomComponent={TextInput}
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
              />
            </Label>
            <Label>
              Category
              <FormInput
                name="category"
                CustomComponent={FormSelect}
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                options={categoryOpt}
                // values={values.category}
              />
            </Label>
            <Label>
              Add picture
              <FormInput
                name="picture"
                CustomComponent={TextInput}
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
              />
            </Label>
            <Label>
              Priority
              <FormInput
                name="priority"
                CustomComponent={FormSelect}
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                options={priorityOpt}
                // values={values.priority}
              />
            </Label>
            <SubmitBtnWrp>
              <ButtonType1 type="submit">Add event</ButtonType1>
            </SubmitBtnWrp>
          </Wrapper>
        );
      }}
    </Formik>
  );
};
