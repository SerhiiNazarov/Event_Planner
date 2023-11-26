import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addEvent, editEvent } from 'redux/events/eventsSlice';

import { Wrapper, SubmitBtnWrp, Container } from './EventForm.styled';
import 'react-calendar/dist/Calendar.css';

import { Label } from 'components/Label';
import { ButtonType1 } from 'components/ButtonType1';
import { FormInput } from 'components/EventForm/FormElements/FormInput';
import { TextInput } from 'components/EventForm/FormElements/TextInput';
import { FormSelect } from 'components/EventForm/FormElements/FormSelect';
import { DatePicker } from 'components/EventForm/FormElements/DatePicker';
import { StyledTimePicker } from 'components/EventForm/FormElements/TimePicker';
import { PictureLoad } from 'components/EventForm/FormElements/PictureLoad';
import { nanoid } from 'nanoid';
import { defaultImages } from 'utils/defaultImages';

const initialValuesCreateEvent = {
  title: '',
  description: '',
  date: '',
  alt: 'default image',
  id: '',
  time: '',
  location: '',
  category: '',
  file: '',
  priority: '',
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

export const EventForm = ({ action }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categoryOpt = [
    { value: 'All', label: `${t('all')}` },
    { value: 'Art', label: `${t('art')}` },
    { value: 'Music', label: `${t('music')}` },
    { value: 'Business', label: `${t('business')}` },
    { value: 'Conference', label: `${t('conference')}` },
    { value: 'Workshop', label: `${t('workshop')}` },
    { value: 'Party', label: `${t('party')}` },
    { value: 'Sport', label: `${t('sport')}` },
  ];

  const priorityOpt = [
    { value: 'High', label: `${t('high')}` },
    { value: 'Medium', label: `${t('medium')}` },
    { value: 'Low', label: `${t('low')}` },
  ];

  const chooseInitValues = () => {
    if (action === 'createEvent') {
      return initialValuesCreateEvent;
    } else if (action === 'editEvent') {
      const {
        state: { event },
      } = location;

      const initialValuesEditEvent = {
        title: event.title,
        description: event.description,
        file: event.file,
        alt: event.alt,
        id: event.id,
        category: event.category,
        priority: event.priority,
        location: event.location,
        date: event.date,
        time: event.time,
      };
      return initialValuesEditEvent;
    }
  };

  const handlerSubmit = (values, actions) => {
    const {
      file,
      alt,
      id,
      title,
      description,
      category,
      time,
      date,
      location,
      priority,
    } = values;

    const idByAction = () => {
      if (action === 'createEvent') {
        return nanoid();
      }
      return id;
    };

    const fileByAction = () => {
      if (alt === 'default image') {
        return defaultImages.defaultImg;
      }
      return file;
    };

    const newEvent = (image, imageAlt) => {
      return {
        title,
        description,
        file: image,
        alt: imageAlt,
        id: `${idByAction()}`,
        category,
        priority,
        location,
        date,
        time,
      };
    };

    const submitByAction = event => {
      if (action === 'createEvent') {
        dispatch(addEvent(event));
      } else {
        dispatch(editEvent(event));
      }

      actions.setSubmitting(false);
      actions.resetForm();
      if (action === 'createEvent') {
        navigate('/');
      } else {
        navigate('/details', { state: { event } });
      }
    };

    if (typeof file === 'object') {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onloadend = () => {
        const event = newEvent(fileReader.result, file.name);

        submitByAction(event);
      };
    } else {
      const event = newEvent(`${fileByAction()}`, alt);

      submitByAction(event);
    }
  };

  return (
    <Formik initialValues={chooseInitValues()} onSubmit={handlerSubmit}>
      {props => {
        const { handleChange, setFieldTouched, setFieldValue } = props;

        return (
          <Container>
            <Wrapper>
              <Label>
                {t('title')}
                <FormInput
                  name="title"
                  CustomComponent={TextInput}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
              </Label>

              <Label>
                {t('descr')}
                <FormInput
                  name="description"
                  as="textarea"
                  CustomComponent={TextInput}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
              </Label>

              <Label>
                {t('date')}
                <FormInput
                  name="date"
                  CustomComponent={DatePicker}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  handleChange={handleChange}
                />
              </Label>
              <Label>
                {t('time')}
                <FormInput
                  name="time"
                  CustomComponent={StyledTimePicker}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  handleChange={handleChange}
                />
              </Label>
              <Label>
                {t('loc')}
                <FormInput
                  name="location"
                  CustomComponent={TextInput}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
              </Label>
              <Label>
                {t('category')}
                <FormInput
                  name="category"
                  CustomComponent={FormSelect}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  options={categoryOpt}
                />
              </Label>
              <Label>
                {t('add_pic')}
                <FormInput
                  name="file"
                  CustomComponent={PictureLoad}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  initialValues={chooseInitValues()}
                />
              </Label>
              <Label>
                {t('prior')}
                <FormInput
                  name="priority"
                  CustomComponent={FormSelect}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  options={priorityOpt}
                />
              </Label>
            </Wrapper>
            <SubmitBtnWrp>
              <ButtonType1 type="submit">
                {action === 'createEvent'
                  ? `${t('add_new')}`
                  : `${t('ed_event')}`}
              </ButtonType1>
            </SubmitBtnWrp>
          </Container>
        );
      }}
    </Formik>
  );
};
