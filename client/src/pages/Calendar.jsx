import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import Grid from '@material-ui/core/Grid';
import logo from '../images/TPED.png';

const API_KEY = "AIzaSyDMBbBr--d1gwyAImHB6ZH9exwc2L0_Fp0";
let calendars = [
  {calendarId: "c_0vu90e1mmer3k108s05f9dqpc0@group.calendar.google.com", 
  color: 'orange'},

];

let styles = {
    //you can use object styles (no import required)
    calendar: {
      borderWidth: "3px", //make outer edge of calendar thicker
      color: 'white',
    },
    eventText: {
        backgroundColor: 'orange',
        color: 'white',
    },
    today: {
        color: 'navy',
        border: '3px solid navy',
    }
  }



class CalendarDisplay extends React.Component {
    render() {
        return (
            <div style={{ paddingTop: '50px', margin: '50px', }}>
                <Calendar apiKey={API_KEY} calendars={calendars} styles={styles}/>
            </div>
        )
    }
}

export default CalendarDisplay;