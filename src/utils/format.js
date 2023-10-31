import moment from 'moment';

export const formatDate = date => {
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

export const getTimeForTimePicker = (value = new Date()) => {
  const date = new Date(value);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const result = moment().hour(hours).minute(minutes);
  return result;
};

export const formatTime = (timeData, format = 24) => {
  const time = new Date(timeData);
  let hours = time.getHours();
  const minutes = time.getMinutes();

  if (format === 12) {
    if (hours > 12) {
      hours -= 12;
      const result =
        hours.toString().padStart(2, '0') +
        ':' +
        minutes.toString().padStart(2, '0') +
        ' pm';
      return result;
    } else {
      const result =
        hours.toString().padStart(2, '0') +
        ':' +
        minutes.toString().padStart(2, '0') +
        ' am';
      return result;
    }
  } else {
    const result =
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0');
    return result;
  }
};
