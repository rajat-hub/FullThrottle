import React, { Component } from 'react';
import moment from 'moment';
import CalendarModal from './Components/CalendarModal';
import data from './Test JSON.json';
import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log(data);
    this.state = {
      data: data,
      users: [],
      show: false,
      events: []
    };
  }
  componentDidMount() {
    var users = [];
    this.state.data.members.map(item => {
      users.push(item.real_name);
    });
    this.setState({
      users
    });
  }

  handleClick = e => {
    //alert(e.currentTarget.dataset.id);
    this.findeventwithid(e.currentTarget.dataset.id);
    this.showModal();
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  findeventwithid = id => {
    var events = [];

    this.state.data.members.map(e => {
      if (id === e.id) {
        e.activity_periods.map(f => {
          events.push({
            title: 'Online Activity',
            allDay: false,
            start: moment(f.start_time, 'MMM D YYYY h:mma').toDate(),
            end: moment(f.end_time, 'MMM D YYYY h:mma').toDate()
          });
        });
      }
    });
    this.setState({ events });
  };

  render() {
    return (
      <div>
        <div id="demotext">Fullthrottle assignment</div>
        <div className="list-type5">
          <ol>
            {this.state.data.members.map(e => (
              <li onClick={this.handleClick} data-id={e.id}>
                <a href="#">{e.real_name}</a>
              </li>
            ))}
          </ol>
        </div>

        <CalendarModal
          onClose={this.showModal}
          show={this.state.show}
          events={this.state.events}
        />
      </div>
    );
  }
}

export default App;
