
const CalendarDisplay = () =>{    
    return (
        <div style={{ position: 'absolute', left: '50%', top: '55%', transform: 'translate(-50%, -50%)'}}>
            <iframe title="Gator TPED Events" src="https://calendar.google.com/calendar/embed?src=c_0vu90e1mmer3k108s05f9dqpc0%40group.calendar.google.com&ctz=America%2FNew_York" 
            width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
    )


    
}






export default CalendarDisplay;