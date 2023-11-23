import { createSlice } from '@reduxjs/toolkit';
import { eventsList } from 'utils/eventsList';

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: eventsList,
    selectCategory: '',
    sortBy: '',
    searchTerm: '',
  },
  reducers: {
    addEvent(state, { payload }) {
      state.events = [...state.events, payload];
    },
    deleteEvent(state, { payload }) {
      state.events = state.events.filter(item => item.id !== payload);
    },
    editEvent(state, { payload }) {
      let index = state.events.findIndex(el => el.id === payload.id);

      const newArr = [...state.events];

      newArr.splice(index, 1, payload);

      state.events = newArr;
    },
    changeCategory(state, { payload }) {
      state.selectCategory = payload;
    },
    changeSortBy(state, { payload }) {
      state.sortBy = payload;
    },
    changeSearchTerm(state, { payload }) {
      state.searchTerm = payload;
    },
  },
});

export const {
  addEvent,
  deleteEvent,
  editEvent,
  changeCategory,
  changeSortBy,
  changeSearchTerm,
} = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
