import { useState, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import bootstrapPlugin from '@fullcalendar/bootstrap' // Bootstrap plugin
import 'bootstrap/dist/css/bootstrap.css'
import './Calander.css'

export default function Calander() {
    const [editable, setEditable] = useState(false);
    const [events, setEvents] = useState(
        [
            {
                end: "2023-07-14T15:00:00.000Z",
                id: "b725rn",
                start: "2023-07-14T13:00:00.000Z",
                title: "Registration\r\n&\r\nOutdoor activities",
                className: [
                    "event-color-register"
                ]
            },
            {
                end: "2023-07-14T18:45:00.000Z",
                id: "knx8o9",
                start: "2023-07-14T17:30:00.000Z",
                title: "Lillsved challenge",
                className: [
                    "event-color-lillesvedchalange"
                ]
            },
            {
                end: "2023-07-14T17:30:00.000Z",
                id: "a154hm",
                start: "2023-07-14T16:45:00.000Z",
                title: "Information",
                className: [
                    "event-color-information"
                ]
            },
            {
                end: "2023-07-14T20:45:00.000Z",
                id: "jxa83",
                start: "2023-07-14T19:00:00.000Z",
                title: "Speed-friending",
                className: [
                    "event-color-speed-finding-talent-show"
                ]
            },
            {
                end: "2023-07-14T16:30:00.000Z",
                id: "010hua",
                start: "2023-07-14T15:00:00.000Z",
                title: "Dinner",
                className: [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                end: "2023-07-15T16:30:00.000Z",
                id: "ogt11",
                start: "2023-07-15T15:00:00.000Z",
                title: "Dinner",
                className: [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                end: "2023-07-16T16:30:00.000Z",
                id: "3ass1",
                start: "2023-07-16T15:00:00.000Z",
                title: "Dinner",
                className: [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                end: "2023-07-17T17:45:00.000Z",
                id: "q2rs4gu",
                start: "2023-07-17T16:00:00.000Z",
                title: "Dinner",
                className: [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                end: "2023-07-14T22:00:00.000Z",
                id: "kow8h7",
                start: "2023-07-14T23:00:00+02:00",
                title: "Games, chill, night snack",
                className: [
                    "event-color-game-chill-night-snack"
                ]
            },
            {
                end: "2023-07-15T22:00:00.000Z",
                id: "qvczws",
                start: "2023-07-15T23:00:00+02:00",
                title: "Games, chill, night snack",
                className: [
                    "event-color-game-chill-night-snack"
                ]
            },
            {
                end: "2023-07-16T22:00:00.000Z",
                id: "9lz14j",
                start: "2023-07-16T23:00:00+02:00",
                title: "Games, chill, night snack",
                className: [
                    "event-color-game-chill-night-snack"
                ]
            },
            {
                end: "2023-07-17T22:00:00.000Z",
                id: "be8md",
                start: "2023-07-17T23:00:00+02:00",
                title: "Games, chill, night snack",
                className: [
                    "event-color-game-chill-night-snack"
                ]
            },
            {
                end: "2023-07-15T06:00:00.000Z",
                id: "k14l6",
                start: "2023-07-15T07:00:00+02:00",
                title: "Morning recreation",
                className: [
                    "event-color-morning-walk-music-evening"
                ]
            },
            {
                end: "2023-07-16T06:00:00.000Z",
                id: "ncsv09",
                start: "2023-07-16T07:00:00+02:00",
                title: "Morning recreation",
                className: [
                    "event-color-morning-walk-music-evening"
                ]
            },
            {
                end: "2023-07-17T06:00:00.000Z",
                id: "jnqk4h",
                start: "2023-07-17T07:00:00+02:00",
                title: "Morning recreation",
                className: [
                    "event-color-morning-walk-music-evening"
                ]
            },
            {
                end: "2023-07-18T06:00:00.000Z",
                id: "vvke4x",
                start: "2023-07-18T07:00:00+02:00",
                title: "Morning recreation",
                className: [
                    "event-color-morning-walk-music-evening"
                ]
            },
            {
                end: "2023-07-15T07:00:00.000Z",
                id: "wlgkoa",
                start: "2023-07-15T05:30:00.000Z",
                title: "Breakfast",
                className: [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                end: "2023-07-16T07:00:00.000Z",
                id: "n3amrq",
                start: "2023-07-16T05:30:00.000Z",
                title: "Breakfast",
                className: [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                end: "2023-07-17T07:00:00.000Z",
                id: "vru2r",
                start: "2023-07-17T05:30:00.000Z",
                title: "Breakfast",
                className: [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                end: "2023-07-18T07:00:00.000Z",
                id: "74dxb8",
                start: "2023-07-18T05:30:00.000Z",
                title: "Breakfast",
                className: [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                end: "2023-07-15T08:00:00.000Z",
                id: "wvfxxq",
                start: "2023-07-15T09:15:00+02:00",
                title: "Study group",
                className: [
                    "event-color-study-group"
                ]
            },
            {
                end: "2023-07-16T08:00:00.000Z",
                id: "cq8tzo",
                start: "2023-07-16T09:15:00+02:00",
                title: "Study group",
                className: [
                    "event-color-study-group"
                ]
            },
            {
                end: "2023-07-17T08:00:00.000Z",
                id: "wn15o9",
                start: "2023-07-17T09:15:00+02:00",
                title: "Study group",
                className: [
                    "event-color-study-group"
                ]
            },
            {
                end: "2023-07-18T08:00:00.000Z",
                id: "2evxpa",
                start: "2023-07-18T09:15:00+02:00",
                title: "Study group",
                className: [
                    "event-color-study-group"
                ]
            },
            {
                end: "2023-07-15T09:15:00.000Z",
                id: "5cbjl",
                start: "2023-07-15T10:15:00+02:00",
                title: "*Workshop A",
                className: [
                    "event-color-workshops"
                ]
            },
            {
                end: "2023-07-15T10:30:00.000Z",
                id: "6wh6kt",
                start: "2023-07-15T09:30:00.000Z",
                title: "Workshop B",
                className: [
                    "event-color-workshops"
                ]
            },
            {
                end: "2023-07-15T11:45:00.000Z",
                id: "gscvza",
                start: "2023-07-15T10:15:00.000Z",
                title: "Lunch",
                className: [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                end: "2023-07-16T11:45:00.000Z",
                id: "z5eoi",
                start: "2023-07-16T12:15:00+02:00",
                title: "Lunch",
                className: [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                end: "2023-07-17T11:45:00.000Z",
                id: "iwm75x",
                start: "2023-07-17T12:15:00+02:00",
                title: "Lunch",
                className: [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                end: "2023-07-16T10:30:00.000Z",
                id: "vbdlo9",
                start: "2023-07-16T11:30:00+02:00",
                title: "Testimony meeting",
                className: [
                    "event-color-study-group"
                ]
            },
            {
                end: "2023-07-16T09:15:00.000Z",
                id: "a0lij",
                start: "2023-07-16T10:15:00+02:00",
                title: "Sacrament meeting",
                className: [
                    "event-color-study-group"
                ]
            },
            {
                end: "2023-07-15T13:00:00.000Z",
                id: "hlqojb",
                start: "2023-07-15T14:00:00+02:00",
                title: "Workshop C",
                className: [
                    "event-color-workshops"
                ]
            },
            {
                end: "2023-07-15T14:30:00.000Z",
                id: "mp4ny",
                start: "2023-07-15T15:30:00+02:00",
                title: "Workshop D",
                className: [
                    "event-color-workshops"
                ]
            },
            {
                end: "2023-07-16T13:00:00.000Z",
                id: "jb8pl",
                start: "2023-07-16T14:00:00+02:00",
                title: "Workshop E",
                className: [
                    "event-color-workshops"
                ]
            },
            {
                end: "2023-07-16T14:30:00.000Z",
                id: "zxff79",
                start: "2023-07-16T15:30:00+02:00",
                title: "Workshop F",
                className: [
                    "event-color-workshops"
                ]
            },
            {
                end: "2023-07-17T09:15:00.000Z",
                id: "4l4tso",
                start: "2023-07-17T10:15:00+02:00",
                title: "Workshop G",
                className: [
                    "event-color-workshops"
                ]
            },
            {
                end: "2023-07-17T10:30:00.000Z",
                id: "i2arr",
                start: "2023-07-17T11:30:00+02:00",
                title: "Workshop H",
                className: [
                    "event-color-workshops"
                ]
            },
            {
                end: "2023-07-17T13:00:00.000Z",
                id: "9z4c5b",
                start: "2023-07-17T14:00:00+02:00",
                title: "Workshop I",
                className: [
                    "event-color-workshops"
                ]
            },
            {
                end: "2023-07-17T14:30:00.000Z",
                id: "vi0mfp",
                start: "2023-07-17T13:30:00.000Z",
                title: "*Workshop J",
                className: [
                    "event-color-workshops"
                ]
            },
            {
                end: "2023-07-15T18:30:00.000Z",
                id: "ff1j3v",
                start: "2023-07-15T18:45:00+02:00",
                title: "OUTDOOR GAMES",
                className: [
                    "event-color-outdoor-games"
                ]
            },
            {
                end: "2023-07-15T21:00:00.000Z",
                id: "lguigb",
                start: "2023-07-15T20:30:00+02:00",
                title: "DANCE",
                className: [
                    "event-color-dance"
                ]
            },
            {
                end: "2023-07-16T19:00:00.000Z",
                id: "icofmn",
                start: "2023-07-16T18:45:00+02:00",
                title: "Musical evening",
                className: [
                    "event-color-dance"
                ]
            },
            {
                end: "2023-07-16T21:00:00.000Z",
                id: "xp2an",
                start: "2023-07-16T21:00:00+02:00",
                title: "Bonfire\r\n&\r\nOutdoor cinema",
                className: [
                    "event-color-bonfire"
                ]
            },
            {
                end: "2023-07-17T18:15:00.000Z",
                id: "sjhuhs",
                start: "2023-07-17T17:45:00.000Z",
                title: "Talent show",
                className: [
                    "event-color-bonfire"
                ]
            },
            {
                end: "2023-07-17T21:00:00.000Z",
                id: "m9fjlr",
                start: "2023-07-17T18:15:00.000Z",
                title: "DANCE",
                className: [
                    "event-color-dance"
                ]
            },
            {
                end: "2023-07-18T08:15:00.000Z",
                id: "n84ee8",
                start: "2023-07-18T10:00:00+02:00",
                title: "Pictures",
                className: [
                    "event-color-picture"
                ]
            },
            {
                end: "2023-07-18T09:15:00.000Z",
                id: "9ivbvu",
                start: "2023-07-18T10:15:00+02:00",
                title: "Devotional",
                className: [
                    "event-color-devotional"
                ]
            },
            {
                end: "2023-07-18T09:30:00.000Z",
                id: "4qrkjo",
                start: "2023-07-18T11:15:00+02:00",
                title: "Goodbyes + Snack bag",
                className: [
                    "event-color-picture"
                ]
            }
        ]
    );

    const containerDiv = useRef(null)

    useEffect(() => {
        console.log("__::__::__")
        console.dir(events);
        document.events = events
    }, [events, exportEvents]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.shiftKey && event.key === 'E') {
                setEditable((prevEditable) => !prevEditable);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleDateSelect = (selectInfo) => {
        if (editable == false) return
        let title = prompt('Please enter a new title for your event');
        let color = prompt('Please choose a color for your event:\n1. Register\n2. Dinner/Lunch/breakfast\n3. Information\n4. LillesvedChalange\n5. Speed-frinding/Talent Show\n6. Game Chill Night Snack\n7. Morning Walk/Music Evening\n8. Study Group\n9. Workshops\n10. Outdoor Games\n11. Dance\n12. Bonfire\n13. Picture\n14. Devotional');

        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // Clear date selection

        if (title) {
            const start = selectInfo.startStr;
            const end = new Date(start);
            end.setHours(end.getHours() + 1);

            const newEvent = {
                id: Math.random().toString(36).substring(7),
                title,
                start,
                end: end.toISOString(),
                // color: getColorByChoice(color),
                className: [getColorByChoice(color)]
            };

            setEvents(prevEvents => [...prevEvents, newEvent]);
        }
    };

    const getColorByChoice = (choice) => {
        switch (choice) {
            case "1":
                return "event-color-register";
            case "2":
                return "event-color-dinner-lunch-breakfast";
            case "3":
                return "event-color-information";
            case "4":
                return "event-color-lillesvedchalange";
            case "5":
                return "event-color-speed-finding-talent-show";
            case "6":
                return "event-color-game-chill-night-snack";
            case "7":
                return "event-color-morning-walk-music-evening";
            case "8":
                return "event-color-study-group";
            case "9":
                return "event-color-workshops";
            case "10":
                return "event-color-outdoor-games";
            case "11":
                return "event-color-dance";
            case "12":
                return "event-color-bonfire";
            case "13":
                return "event-color-picture";
            case "14":
                return "event-color-devotional";
            default:
                return "event-color-register"; // Default color if choice is not recognized
        }
    };

    const handleEventResize = (resizeInfo) => {

        const updatedEvent = resizeInfo.event;
        events.map((event) => {
            if(event.id == updatedEvent.id) event.end = updatedEvent.end.toISOString()
        })
    };

    const handleEventDropStop = (dropInfo) => {
        const updatedEvent = dropInfo.event;
        events.map((event) => {
            if (event.id == updatedEvent.id){
                event.start = updatedEvent.start.toISOString()
                event.end = updatedEvent.end.toISOString()
            }
        })
    };

    const eventContent = (eventInfo) => {
        const eventClass = `event-color-${eventInfo.event.backgroundColor}`; // Create class based on color
        const durationInMilliseconds = eventInfo.event.end - eventInfo.event.start;
        const durationInMinutes = durationInMilliseconds / (1000 * 60); // Convert milliseconds to minutes

        const handleEventDoubleClick = () => {
            if (editable == false) return
            let newTitle = prompt('Please enter a new title for the event', eventInfo.event.title);
            let newColor = prompt(
                'Please choose a new color for the event:\n1. Register\n2. Dinner/Lunch/breakfast\n3. Information\n4. LillesvedChalange\n5. Speed-finding/Talent Show\n6. Game Chill Night Snack\n7. Morning Walk/Music Evening\n8. Study Group\n9. Workshops\n10. Outdoor Games\n11. Dance\n12. Bonfire\n13. Picture\n14. Devotional',
                getColorByChoice(eventInfo.event.backgroundColor)
            );

            if (newTitle === null && newColor === null) {
                // Prompt canceled for both title and color, no changes made
                return;
            }

            if (newTitle === null) {
                // Prompt canceled for title, keep the existing title
                newTitle = eventInfo.event.title;
            }

            if (newColor === null) {
                // Prompt canceled for color, keep the existing color
                newColor = getColorByChoice(eventInfo.event.backgroundColor);
            }

            if (newTitle) {
                const start = eventInfo.startStr;
                const end = new Date(start);
                end.setHours(end.getHours() + 1);
                const updatedEvent = {
                    ...findEventById(eventInfo.event.id),
                    title: newTitle,
                    className: [getColorByChoice(newColor)],
                };

                
                const updatedEvents = events.map((event) =>
                    event = event.id === eventInfo.event.id ? updatedEvent : event
                );
                setEvents([...updatedEvents]);
            }
        };

        return (
            <div className={eventClass} onDoubleClick={handleEventDoubleClick}>
                {durationInMinutes > 15 && (
                    <>
                        <b>{formatTime24hours(findEventById(eventInfo.event.id).start)}</b>
                        <i> - </i>
                        <b>{formatTime24hours(findEventById(eventInfo.event.id).end)}</b>
                    </>
                )}
                <h3>{findEventById(eventInfo.event.id).title}</h3>
            </div>
        );
    };

    const findEventById = (eventId) => {
        return events.find((event) => event.id === eventId);
    };

    const formatTime24hours = (date) => {
        return new Date(date).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    };

    const formatColumnHeader = (dateString) => {
        const date = new Date(dateString.marker.toString());
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const day = days[date.getDay()];
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const formattedDate = `${day} ${date.getDate()}.${month}`;
        return formattedDate;
    };

    const addClassesToContainerDiv = calendar => {
        if (containerDiv.current){
            containerDiv.current.setAttribute('aria-data-type', calendar.view.type)
        }
    }

    function exportEvents() {
        const formattedEvents = document.events.map(event => {
            const formattedEvent = {
                ["end"]: event.end,
                ["id"]: event.id,
                ["start"]: event.start,
                ["title"]: event.title
            };

            if (event.className && event.className.length > 0) {
                formattedEvent.className = event.className;
            }
            return formattedEvent;
        });

        console.log(JSON.stringify(formattedEvents, null, 2)
            .replace(/\"(\w+)\":/g, '$1:'));
        copyToClipboard(JSON.stringify(formattedEvents, null, 2)
            .replace(/\"(\w+)\":/g, '$1:'));
    }

    function copyToClipboard(text) {
        const input = document.createElement('textarea');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    }

    useEffect(() => {
        document.exportEvents = exportEvents
    }, [])
    

    return (
        <div style={{ height: '100vh', width: 'calc(100vw - 20px)' }} ref={containerDiv}>
            <FullCalendar
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'timeGridWeek,timeGridDay'
                }}
                plugins={[timeGridPlugin, bootstrapPlugin, interactionPlugin]}
                initialView="custom"
                slotDuration='00:15:00'
                themeSystem='bootstrap'
                allDaySlot={false}
                slotMinTime="07:00:00"
                slotMaxTime="24:00:00"
                slotLabelFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
                views={{
                    custom: {
                        type: 'timeGrid',
                        duration: { days: 5 }, 
                        buttonText: '5 day',
                    },
                    timeGridWeek: {
                        type: 'custom',
                        duration: { days: 5 },
                        buttonText: 'all',
                    }
                }}
                datesSet={({ start }) => { start.setFullYear(2023, 6, 14) }} 
                validRange={{
                    start: '2023-07-14',
                    end: '2023-07-19'
                }}
                editable={editable}
                nowIndicator={true}
                selectable={true}
                select={handleDateSelect}
                events={events}
                eventDrop={handleEventDropStop}
                eventResize={handleEventResize}
                eventContent={eventContent}
                viewClassNames={addClassesToContainerDiv}
                titleFormat={{
                    month: 'short',
                    day: 'numeric'
                }}
                dayHeaderFormat={({ date }) => formatColumnHeader(date)}
            />
        </div>
    )
}