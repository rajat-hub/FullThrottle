import React from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import Modal from './modal';

const localizer = momentLocalizer(moment);

const CalendarModal = props => (
  <Modal onClose={props.onClose} show={props.show}>
    <div style={{ height: '500pt' }}>
      <Calendar
        events={props.events}
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
        localizer={localizer}
      />
    </div>
  </Modal>
);

export default CalendarModal;
