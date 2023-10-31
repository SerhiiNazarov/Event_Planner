import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { MyEvents } from 'pages/MyEvents';
import { CreateNewEvent } from 'pages/CreateNewEvent';
import { EventDetails } from 'pages/EventDetails';
import { EditEvent } from 'pages/EditEvent';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MyEvents />} />
        <Route path="/create" element={<CreateNewEvent />} />
        <Route path="/details" element={<EventDetails />} />
        <Route path="/edit" element={<EditEvent />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  );
};
