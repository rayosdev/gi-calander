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
                "id": "iefp3h",
                "title": "Registration/Free time",
                "start": "2023-08-25T12:00:00+02:00",
                "end": "2023-08-25T13:00:00.000Z",
                "className": [
                    "event-color-register"
                ]
            },
            {
                "id": "ev7whb",
                "title": "Temple Attendance",
                "start": "2023-08-25T13:00:00.000Z",
                "end": "2023-08-25T16:30:00.000Z",
                "className": [
                    "event-color-devotional"
                ]
            },
            {
                "id": "3hraf",
                "title": "Dinner as BBQ",
                "start": "2023-08-25T18:30:00+02:00",
                "end": "2023-08-25T17:30:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                "id": "xwzwo",
                "title": "Activity",
                "start": "2023-08-25T19:30:00+02:00",
                "end": "2023-08-25T21:00:00.000Z",
                "className": [
                    "event-color-game-chill-night-snack"
                ]
            },
            {
                "id": "vhs1ly",
                "title": "Bed or Chill in Accommodation",
                "start": "2023-08-25T23:00:00+02:00",
                "end": "2023-08-25T22:00:00.000Z",
                "className": [
                    "event-color-speed-finding-talent-show"
                ]
            },
            {
                "id": "6pg1rs",
                "title": "Bed or Chill in Accommodation",
                "start": "2023-08-26T23:00:00+02:00",
                "end": "2023-08-26T22:00:00.000Z",
                "className": [
                    "event-color-speed-finding-talent-show"
                ]
            },
            {
                "id": "33vxfu",
                "title": "Bed or Chill in Accommodation",
                "start": "2023-08-27T23:00:00+02:00",
                "end": "2023-08-27T22:00:00.000Z",
                "className": [
                    "event-color-speed-finding-talent-show"
                ]
            },
            {
                "id": "ramw4",
                "title": "Bed or Chill in Accommodation",
                "start": "2023-08-28T23:00:00+02:00",
                "end": "2023-08-28T22:00:00.000Z",
                "className": [
                    "event-color-speed-finding-talent-show"
                ]
            },
            {
                "id": "uu2e8",
                "title": "Bed or Chill in Accommodation",
                "start": "2023-08-29T23:00:00+02:00",
                "end": "2023-08-29T22:00:00.000Z",
                "className": [
                    "event-color-speed-finding-talent-show"
                ]
            },
            {
                "id": "s9u4b",
                "title": "Bed or Chill in Accommodation",
                "start": "2023-08-30T23:00:00+02:00",
                "end": "2023-08-30T22:00:00.000Z",
                "className": [
                    "event-color-speed-finding-talent-show"
                ]
            },
            {
                "id": "f7ukwxb",
                "title": "Individual Extention",
                "start": "2023-08-31T08:00:00.000Z",
                "end": "2023-08-31T22:00:00.000Z",
                "className": [
                    "event-color-morning-walk-music-evening"
                ]
            },
            {
                "id": "bqd8xte",
                "title": "Individual Extention",
                "start": "2023-09-01T07:00:00+02:00",
                "end": "2023-09-01T22:00:00.000Z",
                "className": [
                    "event-color-morning-walk-music-evening"
                ]
            },
            {
                "id": "7zsmie",
                "title": "Individual Extention",
                "start": "2023-09-02T07:00:00+02:00",
                "end": "2023-09-02T11:00:00.000Z",
                "className": [
                    "event-color-morning-walk-music-evening"
                ]
            },
            {
                "id": "c41uo",
                "title": "Breakfast",
                "start": "2023-08-26T05:30:00.000Z",
                "end": "2023-08-26T06:00:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                "id": "egbx1e",
                "title": "Breakfast",
                "start": "2023-08-27T07:30:00+02:00",
                "end": "2023-08-27T06:00:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                "id": "980ugg",
                "title": "Breakfast",
                "start": "2023-08-28T07:30:00+02:00",
                "end": "2023-08-28T06:00:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                "id": "jkzhn7",
                "title": "Breakfast",
                "start": "2023-08-29T07:30:00+02:00",
                "end": "2023-08-29T06:00:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                "id": "krwkt6",
                "title": "Breakfast",
                "start": "2023-08-30T07:30:00+02:00",
                "end": "2023-08-30T06:00:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                "id": "y1aq8s",
                "title": "Breakfast",
                "start": "2023-08-31T07:30:00+02:00",
                "end": "2023-08-31T06:00:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                "id": "ej5iwb",
                "title": "Morning Devotional with Temel President",
                "start": "2023-08-26T06:00:00.000Z",
                "end": "2023-08-26T07:00:00.000Z",
                "className": [
                    "event-color-study-group"
                ]
            },
            {
                "id": "d467xd",
                "title": "Lunch",
                "start": "2023-08-27T13:00:00+02:00",
                "end": "2023-08-27T12:30:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                "id": "gdtx5",
                "title": "Lunch",
                "start": "2023-08-28T13:00:00+02:00",
                "end": "2023-08-28T12:30:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                "id": "eezt6h",
                "title": "Lunch",
                "start": "2023-08-29T13:00:00+02:00",
                "end": "2023-08-29T12:30:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                "id": "0c4ylp",
                "title": "Lunch",
                "start": "2023-08-30T13:00:00+02:00",
                "end": "2023-08-30T12:30:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                "id": "c4tog",
                "title": " Temple Marathon",
                "start": "2023-08-26T07:00:00.000Z",
                "end": "2023-08-26T21:00:00.000Z",
                "className": [
                    "event-color-workshops"
                ]
            },
            {
                "id": "rgyybw",
                "title": "Dinner",
                "start": "2023-08-27T18:30:00+02:00",
                "end": "2023-08-27T17:30:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                "id": "wg5ik",
                "title": "Dinner",
                "start": "2023-08-28T18:30:00+02:00",
                "end": "2023-08-28T17:30:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                "id": "vaz53l",
                "title": "Dinner",
                "start": "2023-08-29T18:30:00+02:00",
                "end": "2023-08-29T17:30:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
                ]
            },
            {
                "id": "hz42oq",
                "title": "Dinner",
                "start": "2023-08-30T18:30:00+02:00",
                "end": "2023-08-30T17:30:00.000Z",
                "className": [
                    "event-color-dinner-lunch-breakfast"
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
            if (event.ctrlKey && event.shiftKey) {
                console.log("teswt", editable)
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
                        duration: { days: 7 }, 
                        buttonText: '7 day',
                    },
                    timeGridWeek: {
                        type: 'custom',
                        duration: { days: 7 },
                        buttonText: 'all',
                    }
                }}
                datesSet={({ start }) => { start.setFullYear(2023, 6, 14) }} 
                validRange={{
                    start: '2023-08-25',
                    end: '2023-09-03'
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