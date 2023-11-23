import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useDispatch } from 'react-redux';
import { deleteEvent } from 'redux/events/eventsSlice';

import {
  getCategoryValue,
  getEvents,
  getSortBy,
  getSearchTerm,
} from 'redux/events/eventsSelectors';

import { Container } from './Card.list.styled';
import { Card } from 'components/Card';

export const CardList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const eventsList = useSelector(getEvents);
  const category = useSelector(getCategoryValue);
  const sort = useSelector(getSortBy);
  const searchTerm = useSelector(getSearchTerm);

  const getEventsBySearchTerm = () => {
    const regex = new RegExp(searchTerm, 'i');
    const filteredResults = eventsList.filter(item => {
      return (
        regex.test(item.title) ||
        regex.test(item.description) ||
        regex.test(item.location)
      );
    });
    return filteredResults;
  };

  const getEventsByCategory = () => {
    const eventsBySearchTerm = getEventsBySearchTerm();
    if (category === 'All' || category === '') {
      return eventsBySearchTerm;
    }
    return eventsBySearchTerm.filter(el => el.category === category);
  };

  const getFilteredAndSortedEventList = () => {
    const eventsByCategory = getEventsByCategory();
    const priorityOrder = { Low: 1, Medium: 2, High: 3 };
    let sortList;

    switch (sort) {
      case 'By name ascending':
        sortList = [...eventsByCategory].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        return sortList;

      case 'By name descending':
        sortList = [...eventsByCategory].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        return sortList;

      case 'By data ascending':
        sortList = [...eventsByCategory].sort((a, b) => {
          const dateA = new Date(a.date.split('.').reverse().join('-'));
          const dateB = new Date(b.date.split('.').reverse().join('-'));

          return dateA - dateB;
        });
        return sortList;

      case 'By data descending':
        sortList = [...eventsByCategory].sort((a, b) => {
          const dateA = new Date(a.date.split('.').reverse().join('-'));
          const dateB = new Date(b.date.split('.').reverse().join('-'));

          return dateB - dateA;
        });
        return sortList;

      case 'By priority ascending':
        sortList = [...eventsByCategory].sort(
          (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
        );
        return sortList;

      case 'By priority descending':
        sortList = [...eventsByCategory].sort(
          (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]
        );
        return sortList;
      default:
        return eventsByCategory;
    }
  };

  const events = getFilteredAndSortedEventList();

  const onDeleteBtn = id => {
    dispatch(deleteEvent(id));
  };

  return (
    <Container>
      {events.length === 0 && <p>{t('no_events')}</p>}
      {events.map(event => (
        <Card key={event.id} event={event} onDelete={onDeleteBtn} />
      ))}
    </Container>
  );
};
